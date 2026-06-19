import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'
import {
  buildIndex,
  validateVocabMedia,
} from './media-resolver.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '../public/assets/images')
const audiosDir = path.join(__dirname, '../public/assets/audios')

async function main() {
  const imageIndex = buildIndex(imagesDir)
  const audioIndex = buildIndex(audiosDir)

  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:123123@localhost:5432/wewin',
  })
  await client.connect()
  const r = await client.query(`
    SELECT DISTINCT ON ("UnitSlug", "LevelKeys", "WeekKeys", "GameKeys", "EnglishText")
      "EnglishText", "UnitSlug", "GameKeys", "LevelKeys", "WeekKeys", "ImageValue", "AudioValue", "GameType"
    FROM "GameItems"
    WHERE "GameType" IN ('listenchoose', 'lookchoose', 'pronunciation')
    ORDER BY "UnitSlug", "LevelKeys", "WeekKeys", "GameKeys", "EnglishText", "GameType"
  `)
  await client.end()

  const missingImage = []
  const missingAudio = []
  const brokenImage = []
  const seen = new Set()

  for (const row of r.rows) {
    const word = String(row.EnglishText || '').trim()
    if (!word) continue
    const key = `${word.toLowerCase()}::${row.UnitSlug}::${row.GameKeys}::${row.LevelKeys}::${row.WeekKeys}`
    if (seen.has(key)) continue
    seen.add(key)

    const check = validateVocabMedia(row, imageIndex, audioIndex, imagesDir)
    if (check.ok) continue
    if (check.reason === 'missing_image') {
      missingImage.push({ word, unit: row.UnitSlug, game: row.GameKeys || 'kindergarten', level: row.LevelKeys, week: row.WeekKeys })
    } else if (check.reason === 'broken_image') {
      brokenImage.push({ word, unit: row.UnitSlug, file: check.file })
    } else if (check.reason === 'missing_audio') {
      missingAudio.push({ word, unit: row.UnitSlug, game: row.GameKeys || 'kindergarten', level: row.LevelKeys, week: row.WeekKeys })
    }
  }

  console.log('\n=== BÁO CÁO TỪ VỰNG LỖI ẢNH / AUDIO ===\n')
  console.log(`Thiếu ảnh: ${missingImage.length}`)
  console.log(`Ảnh hỏng (file corrupt): ${brokenImage.length}`)
  console.log(`Thiếu audio: ${missingAudio.length}\n`)

  if (brokenImage.length) {
    console.log('## Ảnh hỏng (file corrupt)\n')
    brokenImage.forEach((x, i) => console.log(`${i + 1}. ${x.word} (${x.unit}) → ${x.file}`))
    console.log('')
  }

  if (missingImage.length) {
    console.log('## Thiếu file ảnh\n')
    missingImage.forEach((x, i) => {
      console.log(`${i + 1}. **${x.word}** | ${x.unit} | ${x.game} | L${x.level} W${x.week}`)
    })
    console.log('')
  }

  if (missingAudio.length) {
    console.log('## Thiếu file audio\n')
    missingAudio.forEach((x, i) => {
      console.log(`${i + 1}. **${x.word}** | ${x.unit} | ${x.game} | L${x.level} W${x.week}`)
    })
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
