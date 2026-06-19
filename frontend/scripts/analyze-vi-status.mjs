import pg from 'pg'

function isPlaceholder(value) {
  const text = String(value || '').trim()
  if (!text) return true
  if (/^[\d\s.,]+$/.test(text)) return true
  if (/^\d+\.\d+$/.test(text)) return true
  return false
}

async function main() {
  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:123123@localhost:5432/wewin',
  })
  await client.connect()

  const items = await client.query('SELECT "EnglishText", "VietnameseText" FROM "GameItems"')
  let empty = 0
  let placeholder = 0
  let valid = 0
  const missingWords = new Set()
  for (const row of items.rows) {
    const vi = row.VietnameseText
    if (!String(vi || '').trim()) {
      empty += 1
      missingWords.add(String(row.EnglishText || '').trim().toLowerCase())
    } else if (isPlaceholder(vi)) {
      placeholder += 1
      missingWords.add(String(row.EnglishText || '').trim().toLowerCase())
    } else {
      valid += 1
    }
  }

  const units = await client.query(
    'SELECT "Order", "Name", "Slug", "LevelKeys", "GameKeys" FROM "Units" WHERE "Status"=\'Active\' ORDER BY "Order"',
  )

  console.log({ total: items.rows.length, valid, empty, placeholder, uniqueMissing: missingWords.size })
  console.log('Units 1 & 5:', units.rows.filter((u) => u.Order === 1 || u.Order === 5))
  console.log('Sample missing:', [...missingWords].sort().slice(0, 30))
  await client.end()
}

main().catch(console.error)
