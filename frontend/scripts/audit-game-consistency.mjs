import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '../..')
const outputPath = path.join(rootDir, 'GAME_CONSISTENCY_AUDIT.md')
const API_BASE = process.env.API_BASE_URL || 'http://localhost:5222/api'
const imagesDir = path.join(rootDir, 'frontend/public/assets/images')
const wwwrootDir = path.join(rootDir, 'backend/wwwroot')

const LEVELS = ['pre11', 'pre12', 'pre2', 'pre3']
const WEEKS = ['1', '2']
const GAMES = ['kindergarten', 'starters']

function normalizeAssetFileName(name) {
  const cleaned = String(name || '').trim()
  if (!cleaned) return ''
  const letters = cleaned.replace(/[^A-Za-zÀ-ỹ]/g, '')
  if (letters.length > 0 && letters === letters.toUpperCase()) return cleaned.toLowerCase()
  return cleaned
}

function getImageNameCandidates(name) {
  const cleaned = String(name || '').trim()
  if (!cleaned) return []
  const candidates = [cleaned]
  if (!/zodiac/i.test(cleaned)) candidates.push(`${cleaned} zodiac`)
  return candidates
}

function localAssetPath(name) {
  const cleaned = normalizeAssetFileName(name)
  if (!cleaned) return ''
  return `/assets/images/${encodeURIComponent(cleaned)}.jpg`
}

function resolveImageUrl(url, fallbackName) {
  const raw = String(url || '').trim()
  const name = String(fallbackName || '').trim()

  if (raw && raw.startsWith('/assets/')) return raw
  if (raw && raw.startsWith('/') && !raw.startsWith('//')) return raw
  if (raw && raw.startsWith('http') && !/drive\.google\.com/i.test(raw)) return raw

  for (const candidate of getImageNameCandidates(name)) {
    const local = localAssetPath(candidate)
    if (local) return local
  }

  if (raw && !raw.startsWith('http')) {
    const local = localAssetPath(raw)
    if (local) return local
  }

  return name ? localAssetPath(name) : raw
}

function urlToLocalPath(urlPath) {
  if (!urlPath) return null
  if (urlPath.startsWith('http://') || urlPath.startsWith('https://') || urlPath.startsWith('data:')) {
    return { kind: 'remote', url: urlPath }
  }
  let relative = urlPath.replace(/^\//, '')
  try {
    relative = decodeURIComponent(relative)
  } catch {
    // keep encoded
  }
  const candidates = [
    path.join(rootDir, 'frontend/public', relative),
    path.join(wwwrootDir, relative),
    path.join(rootDir, 'frontend/dist', relative),
  ]
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return { kind: 'local', path: candidate, url: urlPath }
  }
  return { kind: 'missing', url: urlPath, expected: candidates[0] }
}

async function fetchJson(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`${response.status} ${url}`)
  const payload = await response.json()
  if (!payload.success) throw new Error(payload.message || `API failed: ${url}`)
  return payload.data
}

function splitScope(value) {
  return String(value || '')
    .split(/[,;|/\n:&]/)
    .map((x) => x.trim())
    .filter(Boolean)
}

function normalizeLevelKey(value) {
  const map = { '1': 'pre11', '2': 'pre12', '3': 'pre2', '4': 'pre3' }
  const normalized = String(value || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '')
  if (map[normalized]) return map[normalized]
  const aliases = {
    pre11: 'pre11', pre12: 'pre12', pre2: 'pre2', pre3: 'pre3',
    '2tuoi': 'pre11', '3tuoi': 'pre12', '45tuoi': 'pre2', '4to5': 'pre2', '6tuoi': 'pre3',
  }
  return aliases[normalized] || ''
}

async function main() {
  const countMismatches = []
  const missingImages = new Map()
  const emptyGames = []
  let combosChecked = 0
  let combosWithData = 0

  for (const game of GAMES) {
    const bootstrap = await fetchJson(`${API_BASE}/app/bootstrap?game=${game}`)
    const units = bootstrap.units || []

    for (const unit of units) {
      const unitLevels = (Array.isArray(unit.levels) ? unit.levels : splitScope(unit.levels || ''))
        .map(normalizeLevelKey)
        .filter(Boolean)
      const applicableLevels = unitLevels.length ? LEVELS.filter((l) => unitLevels.includes(l)) : LEVELS

      for (const level of applicableLevels) {
        for (const week of WEEKS) {
          combosChecked += 1
          const params = new URLSearchParams({ slug: unit.slug, level, week, game })
          const data = await fetchJson(`${API_BASE}/game/all?${params}`)
          const listen = data.listenchoose || []
          const look = data.lookchoose || []
          const pron = data.pronunciation || []
          const total = listen.length + look.length + pron.length
          if (!total) continue
          combosWithData += 1

          const counts = { listen: listen.length, look: look.length, pron: pron.length }
          const allSame = listen.length === look.length && look.length === pron.length
          if (!allSame) {
            countMismatches.push({
              game,
              unit: unit.name,
              slug: unit.slug,
              level,
              week,
              ...counts,
              onlyInPron: [],
              onlyInLook: [],
              onlyInListen: [],
            })
            const listenTexts = new Set(listen.map((q) => String(q.text || '').trim().toLowerCase()))
            const lookTexts = new Set(look.map((q) => String(q.correct || '').trim().toLowerCase()))
            const pronTexts = new Set(pron.map((q) => String(q.en || '').trim().toLowerCase()))

            const row = countMismatches[countMismatches.length - 1]
            row.onlyInPron = [...pronTexts].filter((t) => t && !lookTexts.has(t) && !listenTexts.has(t))
            row.onlyInLook = [...lookTexts].filter((t) => t && !pronTexts.has(t))
            row.onlyInListen = [...listenTexts].filter((t) => t && !lookTexts.has(t) && !pronTexts.has(t))
          }

          const recordMissing = (entry) => {
            const key = `${entry.game}|${entry.slug}|${entry.level}|${entry.week}|${entry.gameType}|${entry.word}|${entry.url}`
            if (!missingImages.has(key)) missingImages.set(key, entry)
          }

          for (const q of look) {
            const resolved = resolveImageUrl(q.image, q.correct)
            const check = urlToLocalPath(resolved)
            if (check.kind === 'missing' || check.kind === 'remote') {
              recordMissing({
                game,
                unit: unit.name,
                slug: unit.slug,
                level,
                week,
                gameType: 'lookchoose',
                word: q.correct,
                url: resolved,
                issue: check.kind === 'remote' ? 'remote-only' : 'missing-local',
                expected: check.expected || '',
              })
            }
          }

          for (const q of listen) {
            const urls = new Set([q.correct, ...(q.options || [])].filter(Boolean))
            for (const imgUrl of urls) {
              const resolved = resolveImageUrl(imgUrl, q.text)
              const check = urlToLocalPath(resolved)
              if (check.kind === 'missing' || check.kind === 'remote') {
                recordMissing({
                  game,
                  unit: unit.name,
                  slug: unit.slug,
                  level,
                  week,
                  gameType: 'listenchoose',
                  word: q.text,
                  url: resolved,
                  issue: check.kind === 'remote' ? 'remote-only' : 'missing-local',
                  expected: check.expected || '',
                })
              }
            }
          }

          for (const q of pron) {
            const resolved = resolveImageUrl(q.image, q.en)
            const check = urlToLocalPath(resolved)
            if (check.kind === 'missing' || check.kind === 'remote') {
              recordMissing({
                game,
                unit: unit.name,
                slug: unit.slug,
                level,
                week,
                gameType: 'pronunciation',
                word: q.en,
                url: resolved,
                issue: check.kind === 'remote' ? 'remote-only' : 'missing-local',
                expected: check.expected || '',
              })
            }
          }

          if (!listen.length && !look.length && !pron.length) {
            emptyGames.push({ game, unit: unit.name, slug: unit.slug, level, week })
          }
        }
      }
    }
  }

  const missingList = [...missingImages.values()]
  const missingLocal = missingList.filter((x) => x.issue === 'missing-local')
  const remoteOnly = missingList.filter((x) => x.issue === 'remote-only')

  const uniqueMissingWords = new Map()
  for (const row of missingLocal) {
    const key = `${row.word}::${row.url}`
    if (!uniqueMissingWords.has(key)) uniqueMissingWords.set(key, row)
  }

  const now = new Date().toISOString().slice(0, 19).replace('T', ' ')
  const lines = []
  lines.push('# Rà soát đồng nhất game WeWin')
  lines.push('')
  lines.push(`> Tạo lúc: ${now}`)
  lines.push(`> Nguồn: API \`${API_BASE}/game/all\` + kiểm tra file \`frontend/public/assets/images\``)
  lines.push('')
  lines.push('## Tổng quan')
  lines.push('')
  lines.push('| Chỉ số | Giá trị |')
  lines.push('| --- | --- |')
  lines.push(`| Tổ hợp unit × level × week × game đã quét | ${combosChecked} |`)
  lines.push(`| Tổ hợp có ít nhất 1 câu hỏi | ${combosWithData} |`)
  lines.push(`| **Lệch số câu giữa 3 game** | **${countMismatches.length}** |`)
  lines.push(`| Ảnh thiếu file local (unique) | ${uniqueMissingWords.size} |`)
  lines.push(`| Ảnh chỉ có URL remote (chưa tải local) | ${remoteOnly.length} |`)
  lines.push(`| File ảnh trong \`frontend/public/assets/images\` | ${fs.existsSync(imagesDir) ? fs.readdirSync(imagesDir).filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f)).length : 0} |`)
  lines.push('')

  lines.push('## Lệch số câu (ListenChoose vs LookChoose vs Pronunciation)')
  lines.push('')
  if (!countMismatches.length) {
    lines.push('_Không phát hiện lệch số câu._')
  } else {
    lines.push(`**${countMismatches.length} tổ hợp** có số câu khác nhau giữa 3 game.`)
    lines.push('')
    lines.push('| Game | Unit | Level | Week | Listen | Look | Pron | Chỉ có ở Pron | Chỉ có ở Look | Chỉ có ở Listen |')
    lines.push('| --- | --- | --- | --- | ---: | ---: | ---: | --- | --- | --- |')
    for (const row of countMismatches.sort((a, b) => a.unit.localeCompare(b.unit) || a.level.localeCompare(b.level) || a.week.localeCompare(b.week))) {
      lines.push(`| ${row.game} | ${row.unit} | ${row.level} | ${row.week} | ${row.listen} | ${row.look} | ${row.pron} | ${row.onlyInPron.join(', ') || '—'} | ${row.onlyInLook.slice(0, 5).join(', ') || '—'}${row.onlyInLook.length > 5 ? '…' : ''} | ${row.onlyInListen.slice(0, 5).join(', ') || '—'}${row.onlyInListen.length > 5 ? '…' : ''} |`)
    }
  }

  lines.push('')
  lines.push('## Ảnh thiếu file local (unique theo từ + path)')
  lines.push('')
  if (!uniqueMissingWords.size) {
    lines.push('_Không phát hiện ảnh thiếu file local._')
  } else {
    lines.push(`**${uniqueMissingWords.size} ảnh** không tìm thấy file local (thường do tên \`ox\` thay vì \`ox zodiac\`).`)
    lines.push('')
    lines.push('| Từ | URL kỳ vọng | File kỳ vọng |')
    lines.push('| --- | --- | --- |')
    for (const row of [...uniqueMissingWords.values()].sort((a, b) => a.word.localeCompare(b.word))) {
      lines.push(`| ${row.word} | \`${row.url}\` | \`${path.relative(rootDir, row.expected)}\` |`)
    }
  }

  lines.push('')
  lines.push('## Ảnh thiếu local — chi tiết theo unit (LookChoose / ListenChoose / Pronunciation)')
  lines.push('')
  if (!missingLocal.length) {
    lines.push('_Không có._')
  } else {
    lines.push(`**${missingLocal.length} dòng**`)
    lines.push('')
    lines.push('| Game | Unit | Level | Week | Game type | Từ | URL |')
    lines.push('| --- | --- | --- | --- | --- | --- | --- |')
    for (const row of missingLocal.sort((a, b) => a.unit.localeCompare(b.unit) || a.gameType.localeCompare(b.gameType) || a.word.localeCompare(b.word))) {
      lines.push(`| ${row.game} | ${row.unit} | ${row.level} | ${row.week} | ${row.gameType} | ${row.word} | \`${row.url}\` |`)
    }
  }

  lines.push('')
  lines.push('## Ảnh remote-only (có URL nhưng chưa có file local)')
  lines.push('')
  if (!remoteOnly.length) {
    lines.push('_Không có._')
  } else {
    const remoteUnique = new Map()
    for (const row of remoteOnly) {
      const key = `${row.word}::${row.url}`
      if (!remoteUnique.has(key)) remoteUnique.set(key, row)
    }
    lines.push(`**${remoteUnique.size} ảnh unique**`)
    lines.push('')
    lines.push('| Từ | URL |')
    lines.push('| --- | --- |')
    for (const row of [...remoteUnique.values()].sort((a, b) => a.word.localeCompare(b.word))) {
      lines.push(`| ${row.word} | ${String(row.url).slice(0, 100)} |`)
    }
  }

  lines.push('')
  lines.push('---')
  lines.push('')
  lines.push('## Ghi chú')
  lines.push('')
  lines.push('- **Lệch số câu**: mỗi game đọc sheet Excel riêng (`GameData`, `Game_LookChoose`, `Game_Pronunciation`).')
  lines.push('- ListenChoose thường dùng từ dạng `ox zodiac`; LookChoose/Pronunciation dùng `ox`.')
  lines.push('- Ảnh con giáp thường chỉ có file `* zodiac.jpg`, không có `ox.jpg`, `cat.jpg`…')
  lines.push('- Script kiểm tra sau khi áp dụng logic `resolveImageUrl` (ưu tiên `/assets/` từ API + fallback `zodiac`).')
  lines.push('')

  fs.writeFileSync(outputPath, lines.join('\n'), 'utf8')
  console.log(`Wrote ${outputPath}`)
  console.log(`Count mismatches: ${countMismatches.length}`)
  console.log(`Missing local images (unique): ${uniqueMissingWords.size}`)
  console.log(`Missing local rows: ${missingLocal.length}`)
  console.log(`Remote-only rows: ${remoteOnly.length}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
