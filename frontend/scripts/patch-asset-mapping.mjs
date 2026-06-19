import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '../public/assets/images')

function assetUrl(fileName) {
  const base = fileName.replace(/\.(jpg|jpeg|png|webp|gif)$/i, '')
  const ext = path.extname(fileName) || '.jpg'
  return `/assets/images/${encodeURIComponent(base)}${ext}`
}

function fileExists(name) {
  return fs.existsSync(path.join(imagesDir, name))
}

// Explicit word → image file (case-sensitive filename on disk)
const IMAGE_MAP = [
  // 15 ảnh mới import 19/6
  { words: ['Africa'], file: 'Africa.png' },
  { words: ['Antarctica'], file: 'Antarctica.png' },
  { words: ['Apartment'], file: 'Apartment.png' },
  { words: ['Asia'], file: 'Asia.png' },
  { words: ['Barn'], file: 'Barn.png' },
  { words: ['Bell'], file: 'Bell.png', units: ['christmas-&-happy-new-year'] },
  { words: ['Cloud'], file: 'Cloud.png' },
  { words: ['Cool'], file: 'Cool.png' },
  { words: ['Coop'], file: 'Coop.png' },
  { words: ['Europe'], file: 'Europe.png' },
  { words: ['Eyes'], file: 'Eyes.png' },
  { words: ['Feed'], file: 'Feed.jpg' },
  { words: ['Fence'], file: 'Fence.png' },
  { words: ['Flock'], file: 'Flock.png' },
  { words: ['Garage'], file: 'Garage.png' },

  // decorate + caterpillar
  { words: ['Decorate The House', 'decorate'], file: 'decorate.jpg', renameTo: 'decorate' },
  { words: ['Caterpillar'], file: 'caterpillar.jpg' },
  { words: ['Full Caterpillar'], file: 'caterpillar.jpg' },

  // Christmas — ảnh đã có từ trước
  { words: ['Gingerbread'], file: 'gingerbread.jpg', units: ['christmas-&-happy-new-year'] },
  { words: ['Wreath'], file: 'wreath.jpg', units: ['christmas-&-happy-new-year'] },
  { words: ['Stocking'], file: 'stocking.jpg', units: ['christmas-&-happy-new-year'] },
  { words: ['Party Hat'], file: 'party hat.jpg', units: ['christmas-&-happy-new-year'] },

  // Christmas zodiac animals
  { words: ['Cat'], file: 'cat zodiac.jpg', units: ['christmas-&-happy-new-year'] },
  { words: ['Dog'], file: 'dog zodiac.jpg', units: ['christmas-&-happy-new-year'] },
  { words: ['Dragon'], file: 'dragon zodiac.jpg', units: ['christmas-&-happy-new-year'] },
  { words: ['Ox'], file: 'ox zodiac.jpg', units: ['christmas-&-happy-new-year'] },
  { words: ['Rat'], file: 'rat zodiac.jpg', units: ['christmas-&-happy-new-year'] },

  // Other fixes from existing files
  { words: ['Surprised'], file: 'suprised.jpg' },
  { words: ['Seahorse', 'sea horse'], file: 'sea horse.jpg' },

  // Alias mapping từ file có sẵn
  { words: ['television', 'TV'], file: 'TV.jpg' },
  { words: ['Have Dinner', 'have dinner'], file: 'dinner.jpg' },
  { words: ['play ground', 'playground'], file: 'playground.jpg' },
  { words: ['Read Stories'], file: 'Read.jpg' },
  { words: ['sing a song'], file: 'song.jpg' },
  { words: ['put on clothes'], file: 'clothes.jpg' },
  { words: ['jelly fish', 'jellyfish'], file: 'jellyfish.jpg' },
  { words: ['North America', 'South America'], file: 'america.jpg' },
  { words: ['Sand Castle'], file: 'castle.jpg' },
  { words: ['Beachball'], file: 'beachball.jpg' },
  { words: ['Sailing'], file: 'sail.jpg' },
]

const ZODIAC_ANIMALS = ['cat', 'dog', 'dragon', 'ox', 'rat', 'goat', 'horse', 'monkey', 'pig', 'snake', 'tiger', 'cock']

async function main() {
  for (const entry of IMAGE_MAP) {
    if (!fileExists(entry.file)) {
      console.warn(`SKIP missing file: ${entry.file} for ${entry.words.join('|')}`)
    }
  }

  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:123123@localhost:5432/wewin',
  })
  await client.connect()

  let updated = 0
  await client.query('BEGIN')
  try {
    for (const entry of IMAGE_MAP) {
      if (!fileExists(entry.file)) continue
      const url = assetUrl(entry.file)

      for (const word of entry.words) {
        const params = [word]
        let sql = `SELECT "Id", "EnglishText", "UnitSlug" FROM "GameItems" WHERE "EnglishText" ILIKE $1`
        if (entry.units?.length) {
          sql += ` AND "UnitSlug" = ANY($2::text[])`
          params.push(entry.units)
        }
        const rows = (await client.query(sql, params)).rows

        for (const row of rows) {
          const sets = [`"ImageValue" = $1`]
          const vals = [url]
          if (entry.renameTo && row.EnglishText !== entry.renameTo) {
            sets.push(`"EnglishText" = $${vals.length + 1}`)
            vals.push(entry.renameTo)
          }
          vals.push(row.Id)
          await client.query(`UPDATE "GameItems" SET ${sets.join(', ')} WHERE "Id" = $${vals.length}`, vals)
          updated += 1
        }
      }
    }

    // Christmas lowercase zodiac animals (goat, horse...) — set zodiac image if no plain image
    for (const animal of ZODIAC_ANIMALS) {
      const zodiacFile = `${animal} zodiac.jpg`
      if (!fileExists(zodiacFile)) continue
      const url = assetUrl(zodiacFile)
      const title = animal.charAt(0).toUpperCase() + animal.slice(1)
      const res = await client.query(
        `UPDATE "GameItems" SET "ImageValue" = $1
         WHERE "UnitSlug" = 'christmas-&-happy-new-year'
           AND ("EnglishText" ILIKE $2 OR "EnglishText" ILIKE $3)
           AND ("ImageValue" IS NULL OR "ImageValue" = '' OR "ImageValue" = $4)`,
        [url, animal, title, animal],
      )
      updated += res.rowCount
    }

    await client.query('COMMIT')
  } catch (err) {
    await client.query('ROLLBACK')
    throw err
  } finally {
    await client.end()
  }

  console.log(`Patched ${updated} GameItems`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
