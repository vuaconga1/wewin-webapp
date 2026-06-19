import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

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

async function main() {
  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:123123@localhost:5432/wewin',
  })
  await client.connect()
  const { rows } = await client.query('SELECT DISTINCT "EnglishText", "VietnameseText" FROM "GameItems" ORDER BY 1')
  const missing = [...new Set(
    rows
      .filter((row) => isPlaceholder(row.VietnameseText) || !hasVietnameseLetters(row.VietnameseText))
      .map((row) => String(row.EnglishText || '').trim())
      .filter(Boolean),
  )]
  fs.writeFileSync(path.join(__dirname, 'missing-words.txt'), missing.join('\n'), 'utf8')
  console.log('Missing words:', missing.length)
  await client.end()
}

main().catch(console.error)
