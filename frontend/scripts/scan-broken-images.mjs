import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '../public/assets/images')

const IMAGE_MAGIC = [
  { type: 'jpeg', bytes: [0xff, 0xd8, 0xff] },
  { type: 'png', bytes: [0x89, 0x50, 0x4e, 0x47] },
  { type: 'gif', bytes: [0x47, 0x49, 0x46] },
  { type: 'webp', bytes: [0x52, 0x49, 0x46, 0x46] },
]

function detectImageType(buffer) {
  if (!buffer.length) return null
  const head = [...buffer.subarray(0, 12)]
  for (const sig of IMAGE_MAGIC) {
    if (sig.bytes.every((b, i) => head[i] === b)) {
      if (sig.type === 'webp') {
        const tag = buffer.subarray(8, 12).toString('ascii')
        if (tag !== 'WEBP') return null
      }
      return sig.type
    }
  }
  return null
}

function analyzeFile(filePath) {
  const stat = fs.statSync(filePath)
  const name = path.basename(filePath)
  const ext = path.extname(name).toLowerCase()

  if (stat.size === 0) {
    return { name, reason: 'empty file', size: 0 }
  }

  const buf = fs.readFileSync(filePath)
  const headText = buf.subarray(0, Math.min(buf.length, 256)).toString('utf8').trimStart()

  if (headText.startsWith('<!DOCTYPE') || headText.startsWith('<html') || headText.includes('drive.google.com')) {
    return { name, reason: 'HTML (Google Drive page saved as image)', size: stat.size }
  }

  if (headText.startsWith('{') || headText.startsWith('[')) {
    return { name, reason: 'JSON/text, not image', size: stat.size }
  }

  const imageType = detectImageType(buf)
  if (!imageType) {
    return { name, reason: `invalid image data (ext ${ext || 'none'})`, size: stat.size }
  }

  return null
}

async function fetchDbReferences() {
  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:123123@localhost:5432/wewin',
  })
  await client.connect()
  const r = await client.query(`
    SELECT DISTINCT "EnglishText", "UnitSlug", "ImageValue", "GameKeys"
    FROM "GameItems"
    WHERE "ImageValue" IS NOT NULL AND "ImageValue" <> ''
  `)
  await client.end()

  const byFile = new Map()
  for (const row of r.rows) {
    const refs = []
    const imageValue = String(row.ImageValue || '')
    if (imageValue.includes('/assets/images/')) {
      refs.push(decodeURIComponent(imageValue.split('/assets/images/').pop().split('?')[0]))
    }
    const english = String(row.EnglishText || '').trim()
    if (english) refs.push(`${english}.jpg`)

    for (const ref of refs) {
      const key = ref.toLowerCase()
      if (!byFile.has(key)) byFile.set(key, [])
      byFile.get(key).push({
        word: row.EnglishText,
        unit: row.UnitSlug,
        game: row.GameKeys,
        imageValue: imageValue.slice(0, 80),
      })
    }
  }
  return byFile
}

function main() {
  const files = fs.readdirSync(imagesDir)
    .filter((f) => fs.statSync(path.join(imagesDir, f)).isFile())
    .sort((a, b) => a.localeCompare(b))

  const broken = []
  for (const file of files) {
    const issue = analyzeFile(path.join(imagesDir, file))
    if (issue) broken.push(issue)
  }

  return { files, broken }
}

async function run() {
  const { files, broken } = main()
  const dbRefs = await fetchDbReferences()

  console.log('\n=== ẢNH KHÔNG LOAD ĐƯỢC ===\n')
  console.log(`Tổng file trong images/: ${files.length}`)
  console.log(`File hỏng: ${broken.length}\n`)

  if (!broken.length) {
    console.log('Không phát hiện file hỏng.')
    return
  }

  console.log('| # | File | Lý do | Size | Dùng trong DB |')
  console.log('| -: | --- | --- | ---: | --- |')

  broken.forEach((item, idx) => {
    const refs = dbRefs.get(item.name.toLowerCase()) || []
    const used = refs.length
      ? refs.slice(0, 3).map((r) => `${r.word} (${r.unit})`).join('; ') + (refs.length > 3 ? ` +${refs.length - 3}` : '')
      : '_(không thấy trong GameItems)_'
    console.log(`| ${idx + 1} | ${item.name} | ${item.reason} | ${item.size} | ${used} |`)
  })

  console.log('\n### Chi tiết từng file\n')
  for (const item of broken) {
    console.log(`\n**${item.name}** — ${item.reason} (${item.size} bytes)`)
    const refs = dbRefs.get(item.name.toLowerCase()) || []
    if (refs.length) {
      for (const ref of refs.slice(0, 8)) {
        console.log(`  - ${ref.word} | ${ref.unit} | ${ref.game}`)
      }
      if (refs.length > 8) console.log(`  - ... +${refs.length - 8} entries`)
    }
  }
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
