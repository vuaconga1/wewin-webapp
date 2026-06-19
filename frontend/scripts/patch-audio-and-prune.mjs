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

function audioUrl(fileName) {
  const base = fileName.replace(/\.(mp3|wav|ogg)$/i, '')
  return `/assets/audios/${encodeURIComponent(base)}.mp3`
}

function audioExists(fileName) {
  return fs.existsSync(path.join(audiosDir, fileName))
}

const AUDIO_MAP = [
  { words: ['Caterpillar', 'Full Caterpillar'], file: 'caterpillar.mp3' },
  { words: ['Gingerbread'], file: 'ginger bread.mp3' },
  { words: ['Seahorse', 'sea horse'], file: 'sea horse.mp3' },
  { words: ['Beachball', 'Beach ball'], file: 'beach ball.mp3' },
  { words: ['Have Dinner', 'have dinner'], file: 'dinner.mp3' },
  // 5 file mới nhất user thêm
  { words: ['Read Stories'], file: 'Read Stories.mp3' },
  { words: ['Eyes'], file: 'Eyes.mp3' },
  { words: ['Cloud'], file: 'Cloud.mp3' },
  { words: ['Apartment'], file: 'Apartment.mp3' },
  { words: ['Sand Castle'], file: 'Sand Castle.mp3' },
]

async function patchAudio(client) {
  let updated = 0
  for (const entry of AUDIO_MAP) {
    if (!audioExists(entry.file)) {
      console.warn(`SKIP audio missing: ${entry.file}`)
      continue
    }
    const url = audioUrl(entry.file)
    for (const word of entry.words) {
      const res = await client.query(
        `UPDATE "GameItems" SET "AudioValue" = $1
         WHERE "EnglishText" ILIKE $2
           AND "GameType" IN ('listenchoose', 'lookchoose', 'pronunciation')`,
        [url, word],
      )
      updated += res.rowCount
    }
  }
  return updated
}

async function pruneInvalid(client, imageIndex, audioIndex) {
  const all = await client.query(`
    SELECT "Id", "EnglishText", "UnitSlug", "GameKeys", "LevelKeys", "WeekKeys",
           "ImageValue", "AudioValue", "GameType"
    FROM "GameItems"
    WHERE "GameType" IN ('listenchoose', 'lookchoose', 'pronunciation')
  `)

  const comboMap = new Map()
  for (const row of all.rows) {
    const word = String(row.EnglishText || '').trim()
    const comboKey = `${word.toLowerCase()}::${row.UnitSlug}::${row.GameKeys}::${row.LevelKeys}::${row.WeekKeys}`
    if (!comboMap.has(comboKey)) {
      comboMap.set(comboKey, { row, ids: [] })
    }
    comboMap.get(comboKey).ids.push(row.Id)
  }

  const toDelete = []
  const removed = []
  const kept = []

  for (const [, { row, ids }] of comboMap) {
    const check = validateVocabMedia(row, imageIndex, audioIndex, imagesDir)
    if (check.ok) {
      kept.push(row.EnglishText)
      continue
    }
    toDelete.push(...ids)
    removed.push({
      word: row.EnglishText,
      unit: row.UnitSlug,
      game: row.GameKeys || 'kindergarten',
      level: row.LevelKeys,
      week: row.WeekKeys,
      reason: check.reason,
    })
  }

  if (toDelete.length) {
    await client.query('DELETE FROM "GameItems" WHERE "Id" = ANY($1::int[])', [toDelete])
  }

  return { deleted: toDelete.length, removed, keptCount: comboMap.size - removed.length }
}

async function main() {
  const imageIndex = buildIndex(imagesDir)
  const audioIndex = buildIndex(audiosDir)

  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:123123@localhost:5432/wewin',
  })
  await client.connect()

  await client.query('BEGIN')
  try {
    const audioPatched = await patchAudio(client)
    const { deleted, removed, keptCount } = await pruneInvalid(client, imageIndex, audioIndex)
    await client.query('COMMIT')

    console.log('\n=== PATCH AUDIO + PRUNE INVALID VOCAB ===\n')
    console.log(`Audio rows updated: ${audioPatched}`)
    console.log(`Combos kept: ${keptCount}`)
    console.log(`Rows deleted: ${deleted} (${removed.length} vocab combos)\n`)

    const byReason = { missing_image: [], missing_audio: [], broken_image: [] }
    for (const r of removed) {
      byReason[r.reason]?.push(r)
    }

    if (byReason.missing_image.length) {
      console.log(`## Đã xóa — thiếu ảnh (${byReason.missing_image.length})\n`)
      byReason.missing_image.forEach((x, i) => {
        console.log(`${i + 1}. ${x.word} | ${x.unit} | ${x.game} | L${x.level} W${x.week}`)
      })
      console.log('')
    }
    if (byReason.broken_image.length) {
      console.log(`## Đã xóa — ảnh hỏi (${byReason.broken_image.length})\n`)
      byReason.broken_image.forEach((x, i) => console.log(`${i + 1}. ${x.word} | ${x.unit}`))
      console.log('')
    }
    if (byReason.missing_audio.length) {
      console.log(`## Đã xóa — thiếu audio (${byReason.missing_audio.length})\n`)
      byReason.missing_audio.forEach((x, i) => {
        console.log(`${i + 1}. ${x.word} | ${x.unit} | ${x.game} | L${x.level} W${x.week}`)
      })
    }

    // Post-prune audit
    const remaining = await client.query(`
      SELECT DISTINCT ON ("UnitSlug", "LevelKeys", "WeekKeys", "GameKeys", "EnglishText")
        "EnglishText", "UnitSlug", "GameKeys", "LevelKeys", "WeekKeys", "ImageValue", "AudioValue"
      FROM "GameItems"
      WHERE "GameType" IN ('listenchoose', 'lookchoose', 'pronunciation')
      ORDER BY "UnitSlug", "LevelKeys", "WeekKeys", "GameKeys", "EnglishText"
    `)

    let stillBad = 0
    for (const row of remaining.rows) {
      const check = validateVocabMedia(row, imageIndex, audioIndex, imagesDir)
      if (!check.ok) stillBad += 1
    }

    console.log(`\n=== SAU KHI XỬ LÝ ===`)
    console.log(`Combo còn lại: ${remaining.rows.length}`)
    console.log(`Combo vẫn lỗi media: ${stillBad} (mong đợi 0)`)
  } catch (err) {
    await client.query('ROLLBACK')
    throw err
  } finally {
    await client.end()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
