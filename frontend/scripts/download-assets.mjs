import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import https from "node:https";
import http from "node:http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function die(msg) {
  console.error(msg);
  process.exit(1);
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function sanitizeFilename(name) {
  const base = String(name ?? "")
    .trim()
    .replace(/[<>:"/\\|?*\u0000-\u001F]/g, "_")
    .replace(/\s+/g, " ");
  return base.length ? base : "unnamed";
}

function tryParseJson(text) {
  try {
    const cleaned = typeof text === "string" ? text.replace(/^\uFEFF/, "") : text;
    return JSON.parse(cleaned);
  } catch {
    return null;
  }
}

async function fetchToFile(url, outPath) {
  await new Promise((resolve, reject) => {
    const u = new URL(url);
    const client = u.protocol === "https:" ? https : http;
    const req = client.get(
      u,
      { headers: { "User-Agent": "wewin-assets-downloader" } },
      (res) => {
        // Follow redirects
        if (
          res.statusCode &&
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          res.resume();
          fetchToFile(new URL(res.headers.location, u).toString(), outPath)
            .then(resolve, reject);
          return;
        }
        if (!res.statusCode || res.statusCode < 200 || res.statusCode >= 300) {
          res.resume();
          reject(new Error(`HTTP ${res.statusCode ?? "?"}`));
          return;
        }
        const tmpPath = `${outPath}.tmp`;
        const file = fs.createWriteStream(tmpPath);
        res.pipe(file);
        file.on("finish", () => {
          file.close(() => {
            fs.renameSync(tmpPath, outPath);
            resolve();
          });
        });
        file.on("error", (err) => {
          try {
            file.close(() => {});
          } catch {}
          try {
            fs.unlinkSync(tmpPath);
          } catch {}
          reject(err);
        });
      },
    );
    req.on("error", reject);
  });
}

function inferExtFromUrl(url, fallback) {
  try {
    const u = new URL(url);
    const ext = path.extname(u.pathname);
    if (ext && ext.length <= 6) return ext;
  } catch {}
  return fallback;
}

function loadRecordsFromAgentToolsExport(projectRoot) {
  const agentToolsDir = path.join(
    projectRoot,
    "..",
    "..",
    "..",
    "Users",
    "PC",
    ".cursor",
    "projects",
    "e-AnSchool-wewin-webapp",
    "agent-tools",
  );
  // Best-effort: this path is environment-specific; we also support passing --json
  if (!fs.existsSync(agentToolsDir)) return null;
  const files = fs
    .readdirSync(agentToolsDir)
    .filter((f) => f.toLowerCase().endsWith(".txt"))
    .map((f) => path.join(agentToolsDir, f))
    .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);
  for (const fp of files.slice(0, 20)) {
    const raw = fs.readFileSync(fp, "utf8");
    const json = tryParseJson(raw);
    if (json && typeof json === "object" && ("audios" in json || "images" in json)) {
      return json;
    }
  }
  return null;
}

function parseArgs(argv) {
  const args = {
    jsonPath: null,
    kind: "all", // all | audios | images
    limit: null,
    concurrency: 6,
    skipExisting: true,
  };
  // Support positional args: <kind> <limit>
  if (argv[0] && !String(argv[0]).startsWith("--")) {
    args.kind = String(argv[0]);
    argv = argv.slice(1);
  }
  if (argv[0] && !String(argv[0]).startsWith("--")) {
    const n = Number(argv[0]);
    if (Number.isFinite(n)) args.limit = n;
    argv = argv.slice(1);
  }

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--json") args.jsonPath = argv[++i] ?? null;
    else if (a === "--kind") args.kind = argv[++i] ?? "all";
    else if (a === "--limit") args.limit = Number(argv[++i]);
    else if (a === "--concurrency") args.concurrency = Number(argv[++i]);
    else if (a === "--no-skip-existing") args.skipExisting = false;
  }
  return args;
}

async function runPool(items, concurrency, worker) {
  let idx = 0;
  const results = { ok: 0, fail: 0, skipped: 0 };
  async function runner() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const my = idx++;
      if (my >= items.length) return;
      const it = items[my];
      try {
        const r = await worker(it, my);
        if (r === "skipped") results.skipped++;
        else results.ok++;
      } catch {
        results.fail++;
      }
    }
  }
  await Promise.all(Array.from({ length: Math.max(1, concurrency) }, runner));
  return results;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const projectRoot = path.resolve(__dirname, ".."); // frontend/
  const outImages = path.join(projectRoot, "public", "assets", "images");
  const outAudios = path.join(projectRoot, "public", "assets", "audios");
  ensureDir(outImages);
  ensureDir(outAudios);

  let data = null;
  if (args.jsonPath) {
    const jp = path.resolve(process.cwd(), args.jsonPath);
    if (!fs.existsSync(jp)) die(`Không tìm thấy file JSON: ${jp}`);
    data = tryParseJson(fs.readFileSync(jp, "utf8"));
  } else {
    // Fallback: look for a repo-local export file if present
    const fallback = path.join(projectRoot, "scripts", "wewin-assets.json");
    if (fs.existsSync(fallback)) {
      data = tryParseJson(fs.readFileSync(fallback, "utf8"));
    } else {
      // Best-effort: try to locate the export that chat created
      data = loadRecordsFromAgentToolsExport(projectRoot);
    }
  }

  if (!data || typeof data !== "object") {
    die(
      "Không có dữ liệu. Hãy chạy với: node scripts/download-assets.mjs --json <path-to-json>",
    );
  }

  const images = Array.isArray(data.images) ? data.images : [];
  const audios = Array.isArray(data.audios) ? data.audios : [];

  const tasks = [];
  if (args.kind === "all" || args.kind === "images") {
    for (const row of images) {
      if (!row?.url) continue;
      const base = sanitizeFilename(row.name ?? "image");
      const ext = inferExtFromUrl(row.url, ".jpg");
      const filename = `${base}${ext}`;
      tasks.push({
        kind: "images",
        url: row.url,
        outPath: path.join(outImages, filename),
      });
    }
  }
  if (args.kind === "all" || args.kind === "audios") {
    for (const row of audios) {
      if (!row?.url) continue;
      const base = sanitizeFilename(row.name ?? "audio");
      const ext = inferExtFromUrl(row.url, ".mp3");
      const filename = `${base}${ext}`;
      tasks.push({
        kind: "audios",
        url: row.url,
        outPath: path.join(outAudios, filename),
      });
    }
  }

  const limited =
    typeof args.limit === "number" && Number.isFinite(args.limit) && args.limit > 0
      ? tasks.slice(0, args.limit)
      : tasks;

  console.log(
    `Sẽ tải ${limited.length}/${tasks.length} file (kind=${args.kind}, concurrency=${args.concurrency}, skipExisting=${args.skipExisting})`,
  );

  const results = await runPool(limited, args.concurrency, async (t, i) => {
    if (args.skipExisting && fs.existsSync(t.outPath)) {
      if (i % 50 === 0) console.log(`(skip) ${path.basename(t.outPath)}`);
      return "skipped";
    }
    try {
      await fetchToFile(t.url, t.outPath);
      if (i % 20 === 0) console.log(`(ok) ${path.basename(t.outPath)}`);
      return "ok";
    } catch (e) {
      console.log(`(fail) ${path.basename(t.outPath)} <- ${t.url}`);
      throw e;
    }
  });

  console.log(
    `Xong: ok=${results.ok}, skipped=${results.skipped}, fail=${results.fail}`,
  );
  console.log("Images:", outImages);
  console.log("Audios:", outAudios);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
