import pg from 'pg'

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

async function main() {
  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:123123@localhost:5432/wewin',
  })
  await client.connect()

  const { rows } = await client.query(`
    SELECT "Id", "EnglishText", "VietnameseText"
    FROM "GameItems"
    ORDER BY "Id"
  `)

  const lookup = new Map()
  for (const row of rows) {
    if (isPlaceholder(row.VietnameseText)) continue
    const key = normalizeEnglishKey(row.EnglishText)
    if (!key || lookup.has(key)) continue
    lookup.set(key, String(row.VietnameseText).trim())
  }

  let updated = 0
  await client.query('BEGIN')
  try {
    for (const row of rows) {
      if (!isPlaceholder(row.VietnameseText)) continue
      const key = normalizeEnglishKey(row.EnglishText)
      const resolved = lookup.get(key) || ''
      if (!resolved) continue
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

  console.log(`Fixed ${updated} placeholder VietnameseText values.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
