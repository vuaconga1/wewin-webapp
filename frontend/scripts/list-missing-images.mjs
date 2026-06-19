import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '../public/assets/images')

const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.gif']

function normalizeAssetFileName(name) {
  const cleaned = String(name || '').trim()
  if (!cleaned) return ''
  const letters = cleaned.replace(/[^A-Za-zÀ-ỹ]/g, '')
  if (letters.length > 0 && letters === letters.toUpperCase()) return cleaned.toLowerCase()
  return cleaned
}

function buildFileIndex() {
  const files = fs.readdirSync(imagesDir)
  const byLower = new Map()
  for (const f of files) {
    byLower.set(f.toLowerCase(), f)
    const base = f.replace(/\.(jpg|jpeg|png|webp|gif)$/i, '')
    byLower.set(base.toLowerCase(), f)
  }
  return byLower
}

function resolveLocalFile(name, index) {
  const cleaned = normalizeAssetFileName(name)
  if (!cleaned) return null

  const candidates = new Set([
    cleaned,
    `${cleaned}.jpg`,
    `${cleaned}.png`,
    cleaned.toLowerCase(),
    `${cleaned.toLowerCase()}.jpg`,
    `${cleaned.toLowerCase()}.png`,
  ])

  for (const c of candidates) {
    if (index.has(c.toLowerCase())) return index.get(c.toLowerCase())
  }

  for (const ext of IMAGE_EXTS) {
    const key = `${cleaned}${ext}`.toLowerCase()
    if (index.has(key)) return index.get(key)
  }

  return null
}

function extractFileName(imageValue, englishText) {
  const raw = String(imageValue || '').trim()
  if (raw.startsWith('/assets/images/')) {
    return decodeURIComponent(raw.replace('/assets/images/', '').split('?')[0])
  }
  if (raw && !raw.startsWith('http')) return raw
  return String(englishText || '').trim()
}

async function main() {
  const index = buildFileIndex()

  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:123123@localhost:5432/wewin',
  })
  await client.connect()
  const r = await client.query(`
    SELECT DISTINCT "EnglishText", "UnitSlug", "ImageValue", "GameKeys", "GameType", "LevelKeys", "WeekKeys"
    FROM "GameItems"
    WHERE "GameType" IN ('listenchoose', 'lookchoose', 'pronunciation')
    ORDER BY "EnglishText", "UnitSlug"
  `)
  await client.end()

  const missing = []
  const seen = new Set()

  for (const row of r.rows) {
    const word = String(row.EnglishText || '').trim()
    const fileName = extractFileName(row.ImageValue, word)
    const resolved = resolveLocalFile(fileName, index) || resolveLocalFile(word, index)

    if (resolved) continue

    const key = `${word.toLowerCase()}::${row.UnitSlug}::${row.GameKeys}`
    if (seen.has(key)) continue
    seen.add(key)

    missing.push({
      word,
      unit: row.UnitSlug,
      game: row.GameKeys,
      level: row.LevelKeys,
      week: row.WeekKeys,
      expectedJpg: `/assets/images/${encodeURIComponent(normalizeAssetFileName(word) || word)}.jpg`,
      imageValue: String(row.ImageValue || '').slice(0, 60),
    })
  }

  missing.sort((a, b) => a.word.localeCompare(b.word) || a.unit.localeCompare(b.unit))

  console.log('\n=== ẢNH THIẾU FILE (không tìm thấy .jpg/.png trong public/assets/images) ===\n')
  console.log(`Tổng: ${missing.length} từ vựng (unique word+unit+game)\n`)

  for (let i = 0; i < missing.length; i++) {
    const m = missing[i]
    console.log(`${i + 1}. **${m.word}**`)
    console.log(`   Unit: ${m.unit} | Game: ${m.game} | Level: ${m.level} | Week: ${m.week}`)
    console.log(`   URL app sẽ gọi: ${m.expectedJpg}`)
    if (m.imageValue) console.log(`   ImageValue DB: ${m.imageValue}`)
    console.log('')
  }

  console.log('\n--- CSV ---')
  console.log('word,unit,game,level,week,expected_url')
  for (const m of missing) {
    console.log(`"${m.word}","${m.unit}","${m.game}","${m.level}","${m.week}","${m.expectedJpg}"`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
