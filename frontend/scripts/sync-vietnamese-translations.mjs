import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '../..')
const inventoryPath = path.join(rootDir, 'VOCABULARY_INVENTORY.md')
const dictionaryPath = path.join(rootDir, 'frontend/src/data/vietnameseDictionary.json')

function normalizeEnglishKey(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '')
}

function isPlaceholder(value) {
  const text = String(value || '').trim()
  if (!text) return true
  if (/^[\d\s.,]+$/.test(text)) return true
  if (/^\d+\.\d+$/.test(text)) return true
  return false
}

function hasVietnameseLetters(value) {
  return /[a-zA-Zà-ỹÀ-Ỹ]/.test(String(value || ''))
}

function parseInventoryDictionary() {
  const dictionary = new Map()
  if (!fs.existsSync(inventoryPath)) return dictionary

  const lines = fs.readFileSync(inventoryPath, 'utf8').split(/\r?\n/)
  for (const line of lines) {
    if (!line.startsWith('|')) continue
    const cells = line.split('|').map((cell) => cell.trim())
    if (cells.length < 5) continue
    if (cells[1] === '#' || cells[1] === '---') continue

    const english = cells[2]
    const vietnamese = cells[3]
    if (!english || isPlaceholder(vietnamese) || !hasVietnameseLetters(vietnamese)) continue

    const key = normalizeEnglishKey(english)
    if (!key || dictionary.has(key)) continue
    dictionary.set(key, vietnamese.trim())
  }

  return dictionary
}

async function main() {
  const inventoryDictionary = parseInventoryDictionary()
  const staticDictionary = JSON.parse(fs.readFileSync(dictionaryPath, 'utf8'))
  console.log(`Parsed ${inventoryDictionary.size} translations from inventory report.`)
  console.log(`Loaded ${Object.keys(staticDictionary).length} static dictionary entries.`)

  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:123123@localhost:5432/wewin',
  })
  await client.connect()

  const { rows } = await client.query('SELECT "Id", "EnglishText", "VietnameseText" FROM "GameItems" ORDER BY "Id"')
  const lookup = new Map([...inventoryDictionary, ...Object.entries(staticDictionary)])

  for (const row of rows) {
    if (isPlaceholder(row.VietnameseText) || !hasVietnameseLetters(row.VietnameseText)) continue
    const key = normalizeEnglishKey(row.EnglishText)
    if (!key || lookup.has(key)) continue
    lookup.set(key, String(row.VietnameseText).trim())
  }

  let updated = 0
  let stillMissing = new Set()

  await client.query('BEGIN')
  try {
    for (const row of rows) {
      const current = String(row.VietnameseText || '').trim()
      if (!isPlaceholder(current) && hasVietnameseLetters(current)) continue

      const key = normalizeEnglishKey(row.EnglishText)
      const resolved = lookup.get(key) || ''
      if (!resolved) {
        stillMissing.add(String(row.EnglishText || '').trim().toLowerCase())
        continue
      }

      await client.query('UPDATE "GameItems" SET "VietnameseText" = $1 WHERE "Id" = $2', [resolved, row.Id])
      updated += 1
    }
    await client.query('COMMIT')
  } catch (error) {
    await client.query('ROLLBACK')
    throw error
  } finally {
    await client.end()
  }

  console.log(`Updated ${updated} GameItems with Vietnamese translations.`)
  console.log(`Still missing ${stillMissing.size} unique English words.`)
  if (stillMissing.size) {
    console.log('Sample still missing:', [...stillMissing].sort().slice(0, 40).join(', '))
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
