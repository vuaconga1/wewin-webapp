import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '../public/assets/images')
const audiosDir = path.join(__dirname, '../public/assets/audios')

const GAME_TYPES = ['listenchoose', 'lookchoose', 'pronunciation']
const STARTERS_GAME_KEY = 'starters'

const PATCHES = [
  {
    slug: 'unit-4',
    level: 'pre3',
    week: '2',
    words: [
      { englishText: 'Meal', imageFile: 'meal.jpg', audioFile: 'meal.mp3' },
      { englishText: 'Favourite', imageFile: 'favourite.jpg', audioFile: 'favourite.mp3' },
    ],
  },
  {
    slug: 'unit-9',
    level: 'pre11',
    week: '1',
    words: [
      { englishText: 'Board games', imageFile: 'Board games.jpg', audioFile: 'Board games.mp3' },
    ],
  },
]

function normalizeLookupKey(value) {
  return String(value || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '')
}

function resolveLocalPath(folder, fileName) {
  const base = fileName.replace(/\.(jpg|mp3)$/i, '')
  const ext = folder === 'images' ? '.jpg' : '.mp3'
  const candidates = [fileName, `${base}${ext}`, base]
  for (const candidate of candidates) {
    const full = path.join(folder === 'images' ? imagesDir : audiosDir, candidate)
    if (fs.existsSync(full)) {
      const name = path.basename(full, ext)
      return `/assets/${folder}/${encodeURIComponent(name)}${ext}`
    }
  }
  return ''
}

async function main() {
  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:123123@localhost:5432/wewin',
  })
  await client.connect()

  let inserted = 0
  let updated = 0

  await client.query('BEGIN')
  try {
    for (const patch of PATCHES) {
      for (const word of patch.words) {
        const imageValue = resolveLocalPath('images', word.imageFile)
        const audioValue = resolveLocalPath('audios', word.audioFile)
        if (!imageValue) throw new Error(`Missing image: ${word.imageFile}`)

        for (const gameType of GAME_TYPES) {
          const sourceKey = `starters-sync:v1:${gameType}:${patch.slug}:${patch.level}:${patch.week}:${normalizeLookupKey(word.englishText)}`
          const existing = await client.query('SELECT "Id", "SortOrder" FROM "GameItems" WHERE "SourceKey" = $1', [sourceKey])

          if (existing.rows.length) {
            await client.query(
              `UPDATE "GameItems" SET "ImageValue"=$1, "AudioValue"=$2, "EnglishText"=$3 WHERE "SourceKey"=$4`,
              [imageValue, audioValue, word.englishText, sourceKey],
            )
            updated += 1
            continue
          }

          const maxSort = await client.query(
            `SELECT COALESCE(MAX("SortOrder"), -1) AS max FROM "GameItems"
             WHERE "UnitSlug"=$1 AND "LevelKeys"=$2 AND "WeekKeys"=$3 AND "GameType"=$4 AND "GameKeys"=$5`,
            [patch.slug, patch.level, patch.week, gameType, STARTERS_GAME_KEY],
          )
          const sortOrder = Number(maxSort.rows[0].max) + 1

          await client.query(
            `INSERT INTO "GameItems" ("SourceKey", "GameType", "UnitSlug", "ImageValue", "AudioValue", "EnglishText", "VietnameseText", "WeekKeys", "LevelKeys", "GameKeys", "SortOrder")
             VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
            [
              sourceKey, gameType, patch.slug, imageValue, audioValue, word.englishText, '',
              patch.week, patch.level, STARTERS_GAME_KEY, sortOrder,
            ],
          )
          inserted += 1
        }
      }
    }
    await client.query('COMMIT')
  } catch (err) {
    await client.query('ROLLBACK')
    throw err
  } finally {
    await client.end()
  }

  console.log(`Patch complete: inserted=${inserted}, updated=${updated}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
