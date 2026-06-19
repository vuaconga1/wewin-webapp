import pg from 'pg'

const GAME_TYPES = ['listenchoose', 'lookchoose', 'pronunciation']
const LESSON_TO_LEVEL = { 1: 'pre11', 2: 'pre12', 3: 'pre2', 4: 'pre3' }
const LESSON_TO_WEEK = { 1: '1', 2: '1', 3: '2', 4: '2' }

const client = new pg.Client({ connectionString: 'postgresql://postgres:123123@localhost:5432/wewin' })
await client.connect()
const items = await client.query(`SELECT "GameType", "UnitSlug", "LevelKeys", "WeekKeys", "GameKeys" FROM "GameItems" WHERE "GameKeys"='starters'`)

let ok = 0, bad = 0, over20 = 0
for (let u = 1; u <= 15; u++) {
  for (const lesson of [1, 2, 3, 4]) {
    const level = LESSON_TO_LEVEL[lesson]
    const week = LESSON_TO_WEEK[lesson]
    const slug = `unit-${u}`
    const counts = {}
    for (const gt of GAME_TYPES) {
      counts[gt] = items.rows.filter((i) =>
        i.UnitSlug === slug && i.GameType === gt && i.LevelKeys === level && i.WeekKeys === week,
      ).length
    }
    const vals = Object.values(counts)
    const same = vals.every((v) => v === vals[0])
    const max = Math.max(...vals)
    if (same && max <= 20 && max > 0) ok++
    else {
      bad++
      if (max > 20) over20++
      console.log(`BAD unit-${u} L${lesson} (${level} w${week}):`, counts)
    }
  }
}
console.log('\nSummary:', { ok, bad, over20, expected: 60 })
await client.end()
