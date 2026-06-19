import pg from 'pg'

const client = new pg.Client({ connectionString: process.env.DATABASE_URL || 'postgresql://postgres:123123@localhost:5432/wewin' })
const GAME_TYPES = ['listenchoose', 'lookchoose', 'pronunciation']
const LEVELS = ['pre11', 'pre12', 'pre2', 'pre3']
const WEEKS = ['1', '2']

function splitScope(value) {
  return String(value || '').split(/[,;|/\n:&]/).map((x) => x.trim()).filter(Boolean)
}

function normalizeLevelKey(value) {
  const map = { '1': 'pre11', '2': 'pre12', '3': 'pre2', '4': 'pre3' }
  const n = String(value || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '')
  if (map[n]) return map[n]
  const aliases = { pre11: 'pre11', pre12: 'pre12', pre2: 'pre2', pre3: 'pre3' }
  return aliases[n] || ''
}

function matchesLevel(rowValue, selected) {
  const rowKeys = splitScope(rowValue).map(normalizeLevelKey).filter(Boolean)
  return rowKeys.length === 0 || rowKeys.includes(selected)
}

function matchesWeek(rowValue, selected) {
  const rowKeys = splitScope(rowValue)
  return rowKeys.length === 0 || rowKeys.includes(selected)
}

function matchesGame(rowValue) {
  const rowKeys = splitScope(rowValue).map((v) => v.toLowerCase()).filter(Boolean)
  return rowKeys.length === 0 || rowKeys.includes('kindergarten')
}

await client.connect()
const units = await client.query(`SELECT "Slug", "Name", "Order", "GameKeys", "LevelKeys", "Status" FROM "Units" WHERE "Status"='Active' ORDER BY "Order"`)
const items = await client.query(`SELECT "GameType", "UnitSlug", "EnglishText", "WeekKeys", "LevelKeys", "GameKeys" FROM "GameItems"`)

const kgUnits = units.rows.filter((u) => {
  const games = splitScope(u.GameKeys).map((g) => g.toLowerCase()).filter(Boolean)
  return games.length === 0 || games.includes('kindergarten')
}).filter((u) => u.Order <= 12)

let mismatches = 0
let over20 = 0
let ok = 0

for (const unit of kgUnits) {
  for (const level of LEVELS) {
    const unitLevels = splitScope(unit.LevelKeys).map(normalizeLevelKey).filter(Boolean)
    if (unitLevels.length && !unitLevels.includes(level)) continue
    for (const week of WEEKS) {
      const counts = {}
      for (const gt of GAME_TYPES) {
        counts[gt] = items.rows.filter((item) =>
          item.UnitSlug === unit.Slug
          && item.GameType === gt
          && matchesGame(item.GameKeys)
          && matchesLevel(item.LevelKeys, level)
          && matchesWeek(item.WeekKeys, week),
        ).length
      }
      const vals = Object.values(counts)
      const same = vals.every((v) => v === vals[0])
      const max = Math.max(...vals)
      if (!same) {
        mismatches += 1
        console.log(`MISMATCH ${unit.Name} ${level} w${week}:`, counts)
      } else if (max > 20) {
        over20 += 1
        console.log(`OVER20 ${unit.Name} ${level} w${week}: ${max}`)
      } else if (max > 0) {
        ok += 1
      }
    }
  }
}

console.log('\nSummary:', { ok, mismatches, over20, total: ok + mismatches + over20 })
await client.end()
