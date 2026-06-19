import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import XLSX from 'xlsx'
import pg from 'pg'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const EXCEL_PATH = 'c:/Users/PC/Downloads/pre starters An school.xlsx'

const LEVELS = ['pre11', 'pre12', 'pre2', 'pre3']
const LEVEL_LABELS = {
  pre11: 'Pre 1.1',
  pre12: 'Pre 1.2',
  pre2: 'Pre 2',
  pre3: 'Pre 3',
}

const SKIP_WORDS = new Set([
  'and', 'or', 'the', 'a', 'an', 'yes', 'no', 'in', 'on', 'at', 'by', 'to', 'of', 'for',
  'with', 'is', 'are', 'was', 'were', 'be', 'have', 'has', 'got', 'can', 'do', 'does',
  'activity', 'exercise', 'homework', 'structure', 'reading', 'listening', 'writing',
  'report', 'review', 'practice', 'page', 'unit', 'funskill', 'booklet', 'grammar',
  'teacher', 'students', 'student', 'class', 'game', 'games', 'wordlist', 'topic',
  'focus', 'task', 'type', 'example', 'instructions', 'story', 'spelling', 'speaking',
  'between', 'under', 'behind', 'next', 'front', 'place', 'preposition', 'prepositions',
  'irregular', 'plural', 'noun', 'continuous', 'present', 'functional', 'language',
  'comic', 'strip', 'dialogue', 'match', 'complete', 'visual', 'crossword', 'draw',
  'label', 'find', 'count', 'write', 'answer', 'answers', 'ask', 'talk', 'listen',
  'read', 'act', 'colour', 'color', 'part', 'look', 'picture', 'pictures', 'yes', 'no',
  'she', 'he', 'they', 'we', 'you', 'i', 'me', 'too', 'so', 'would', 'like', 'please',
  'thank', 'these', 'this', 'those', 'what', 'where', 'when', 'how', 'many', 'old',
  'name', 'his', 'her', 'some', 'any', 'there', 'then', 'each', 'thing', 'things',
  'people', 'person', 'man', 'men', 'woman', 'children', 'child', 'mice', 'fish', 'sheep',
])

const CANONICAL = {
  voacbulary: 'vocabulary',
  lizzard: 'lizard',
  'jelly fish': 'jellyfish',
  'table tennis': 'table tennis',
  mom: 'mom',
  mum: 'mom',
  trousers: 'trousers',
  pants: 'pants',
  tv: 'television',
  'sing a song': 'sing a song',
  'listen to music': 'listen to music',
  'listen to': 'listen to',
  'get up': 'get up',
  'have breakfast': 'have breakfast',
  'have lunch': 'have lunch',
  'have dinner': 'have dinner',
  'go to bed': 'go to bed',
  'fly a kite': 'fly a kite',
  'board games': 'board games',
  'board game': 'board game',
  'tennis racket': 'tennis racket',
  'orange juice': 'orange juice',
  'ice cream': 'ice cream',
  'polar bear': 'polar bear',
  'badminton racket': 'badminton',
}

const ALIASES = {
  television: ['television', 'televison', 'tv'],
  lizard: ['lizard', 'lizzard'],
  jellyfish: ['jellyfish', 'jelly fish'],
  mom: ['mom', 'mum', 'dad'],
  dad: ['dad', 'mom'],
  mice: ['mice', 'mouse'],
  children: ['children', 'child'],
  people: ['people', 'person'],
  trousers: ['trousers', 'pants'],
  boardgames: ['board games', 'board game'],
  'board game': ['board games', 'board game'],
  'board games': ['board games', 'board game'],
  singasong: ['sing a song', 'song'],
  car: ['car'],
  helicopter: ['helicopter'],
  fish: ['fish'],
  sheep: ['sheep'],
  'have dinner': ['have dinner', 'have dinner have dinner'],
  televison: ['television', 'televison'],
  person: ['person', 'people'],
  people: ['people', 'person'],
  child: ['child', 'children'],
  children: ['children', 'child'],
  man: ['man', 'men'],
  men: ['men', 'man'],
  woman: ['woman', 'women'],
  women: ['women', 'woman'],
}

function normalizeWord(value) {
  return String(value || '').trim().toLowerCase().replace(/\.$/, '').replace(/\s+/g, ' ')
}

function normalizeLookupKey(value) {
  return normalizeWord(value).replace(/[^a-z0-9]/g, '')
}

function canonicalize(word) {
  const w = normalizeWord(word)
  return CANONICAL[w] || w
}

function splitScope(value) {
  return String(value || '').split(/[,;|/\n:&]/).map((x) => x.trim()).filter(Boolean)
}

function normalizeLevelKey(value) {
  const map = { '1': 'pre11', '2': 'pre12', '3': 'pre2', '4': 'pre3' }
  const n = normalizeLookupKey(value)
  if (map[n]) return map[n]
  const aliases = { pre11: 'pre11', pre12: 'pre12', pre2: 'pre2', pre3: 'pre3' }
  return aliases[n] || ''
}

function normalizeGameKey(value) {
  const n = normalizeLookupKey(value)
  if (!n || n === 'all') return 'kindergarten'
  if (['kindergarten', 'kindergarden', 'kg'].includes(n)) return 'kindergarten'
  if (['starter', 'starters'].includes(n)) return 'starters'
  return null
}

const LESSON_TO_LEVEL = { 1: 'pre11', 2: 'pre12', 3: 'pre2', 4: 'pre3' }
const LESSON_TO_WEEK = { 1: '1', 2: '1', 3: '2', 4: '2' }
const UNIT_TITLE_RE = /UNIT\s*(\d+)\s*[-–]?\s*LESSON\s*(\d+)/i

function extractVocabFromContent(text) {
  if (!text) return []
  const words = new Set()
  let t = String(text).replace(/\r\n/g, '\n')

  const vocabRe = /(?:^|\n|\d+\.\s*)(?:Review\s+)?(?:voacbulary|vocabs|vocabulary)\s*:?\s*/gi
  let match
  while ((match = vocabRe.exec(t)) !== null) {
    const start = match.index + match[0].length
    const rest = t.slice(start)
    const endMatch = rest.match(/\n\s*\d+[\.\)]\s|\n\s*Activity:|\n\s*->|\n\s*Structure:|\n\s*Reading|\n\s*Listening|\n\s*Homework:|\n\s*Write report|\n\s*-\s*Review|\n\s*-\s*Pages:|\nTopic:|\nGrammar|\nStory &/i)
    const segment = endMatch ? rest.slice(0, endMatch.index) : rest.slice(0, 600)
    segment.replace(/\([^)]*\)/g, ' ')
      .replace(/->[^,\n]*/g, ' ')
      .replace(/\bpage\s+\d+/gi, ' ')
      .split(/[,;\n|]/)
      .forEach((raw) => {
        const parts = String(raw).includes(' - ')
          ? String(raw).split(/\s*-\s*/).map((p) => p.trim())
          : [raw]
        for (const part of parts) {
          let cleaned = canonicalize(normalizeWord(part))
          cleaned = cleaned.replace(/^review\s+/, '').trim()
          if (!cleaned || cleaned.length < 2) return
          if (cleaned.split(' ').length > 4) return
          if (!/^[a-z][a-z0-9\s'-]*$/.test(cleaned)) return
          if (SKIP_WORDS.has(cleaned)) return
          if (/^\d+$/.test(cleaned)) return
          if (cleaned.includes('exercise')) return
          if (cleaned.includes('funskill')) return
          if (cleaned.includes('dialogue')) return
          if (cleaned.includes('comprehension')) return
          words.add(cleaned)
        }
      })
  }

  return [...words]
}

function parseExcel() {
  if (!fs.existsSync(EXCEL_PATH)) throw new Error(`Missing file: ${EXCEL_PATH}`)
  const wb = XLSX.readFile(EXCEL_PATH)
  const sheetName = wb.SheetNames[0]
  const data = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { header: 1, defval: '' })

  const lessons = []
  const unitLessonCoverage = new Map()

  for (let i = 2; i < data.length; i++) {
    const stt = data[i][0]
    const title = String(data[i][1] || '').replace(/\r\n/g, ' ').trim()
    const content = data[i][2]
    const m = title.match(UNIT_TITLE_RE)
    if (!m) continue

    const unitNum = Number(m[1])
    const lesson = Number(m[2])
    if (unitNum < 1 || unitNum > 15 || lesson < 1 || lesson > 4) continue

    lessons.push({
      row: i + 1,
      stt,
      unitNum,
      lesson,
      level: LESSON_TO_LEVEL[lesson],
      week: LESSON_TO_WEEK[lesson],
      title,
      words: extractVocabFromContent(content),
    })

    if (!unitLessonCoverage.has(unitNum)) unitLessonCoverage.set(unitNum, new Set())
    unitLessonCoverage.get(unitNum).add(lesson)
  }

  const expected = new Map()
  for (const lesson of lessons) {
    const key = `unit-${lesson.unitNum}::${lesson.level}::${lesson.week}::L${lesson.lesson}`
    expected.set(key, {
      unitNum: lesson.unitNum,
      lesson: lesson.lesson,
      level: lesson.level,
      week: lesson.week,
      words: lesson.words,
      title: lesson.title,
    })
  }

  return { sheetName, lessons, expected, unitLessonCoverage }
}

function wordMatches(projectWords, expectedWord) {
  const key = normalizeLookupKey(expectedWord)
  if (projectWords.has(key)) return projectWords.get(key)

  const aliases = ALIASES[normalizeWord(expectedWord)] || ALIASES[canonicalize(expectedWord)] || []
  for (const alias of aliases) {
    const ak = normalizeLookupKey(alias)
    if (projectWords.has(ak)) return projectWords.get(ak)
  }

  for (const [pk, pv] of projectWords) {
    if (pk === key) return pv
    for (const alias of aliases) {
      if (pk === normalizeLookupKey(alias)) return pv
    }
  }
  return null
}

async function fetchProjectVocab(client) {
  const itemsRes = await client.query(`
    SELECT "UnitSlug", "EnglishText", "WeekKeys", "LevelKeys", "GameKeys", "GameType"
    FROM "GameItems"
    ORDER BY "UnitSlug", "SortOrder"
  `)

  const project = new Map()

  for (const item of itemsRes.rows) {
    const games = splitScope(item.GameKeys).map(normalizeGameKey).filter(Boolean)
    if (games.length && !games.includes('starters')) continue

    const slug = item.UnitSlug
    if (!/^unit-\d+$/.test(slug)) continue

    const en = String(item.EnglishText || '').trim()
    if (!en) continue

    const levels = splitScope(item.LevelKeys).map(normalizeLevelKey).filter(Boolean)
    const weeks = splitScope(item.WeekKeys).filter(Boolean)
    const useLevels = levels.length ? levels : LEVELS
    const useWeeks = weeks.length ? weeks : ['1', '2']

    for (const level of useLevels) {
      for (const week of useWeeks) {
        const key = `${slug}::${level}::${week}`
        if (!project.has(key)) project.set(key, new Map())
        const map = project.get(key)
        const wkey = normalizeLookupKey(en)
        if (!map.has(wkey)) map.set(wkey, en)
      }
    }
  }

  return project
}

function compareExpected(expected, project) {
  const byUnit = new Map()
  let totalExpected = 0
  let totalFound = 0
  let totalMissing = 0

  for (const [, exp] of expected) {
    const unitKey = `unit-${exp.unitNum}`
    if (!byUnit.has(unitKey)) byUnit.set(unitKey, [])

    const pkey = `${unitKey}::${exp.level}::${exp.week}`
    const projectWords = project.get(pkey) || new Map()
    const missing = []
    const found = []

    for (const word of exp.words) {
      totalExpected += 1
      const match = wordMatches(projectWords, word)
      if (match) {
        totalFound += 1
        found.push({ expected: word, actual: match })
      } else {
        totalMissing += 1
        missing.push(word)
      }
    }

    byUnit.get(unitKey).push({
      lesson: exp.lesson,
      level: exp.level,
      week: exp.week,
      expectedCount: exp.words.length,
      missing,
      found,
      words: exp.words,
    })
  }

  return { byUnit, totalExpected, totalFound, totalMissing }
}

function printReport(parsed, comparison, project) {
  console.log('\n=== BÁO CÁO STARERS vs EXCEL ===\n')
  console.log(`File: ${EXCEL_PATH}`)
  console.log(`Sheet: ${parsed.sheetName}`)
  console.log('Quy ước: L1=pre11/Tuần1, L2=pre12/Tuần1, L3=pre2/Tuần2, L4=pre3/Tuần2')
  console.log('Cột A = STT, B = UNIT[n]-LESSON[n], C = vocabulary\n')

  console.log('## Độ phủ lesson trong Excel (15 unit × 4 lesson)\n')
  for (let u = 1; u <= 15; u++) {
    const have = [...(parsed.unitLessonCoverage.get(u) || [])].sort((a, b) => a - b)
    const missing = [1, 2, 3, 4].filter((l) => !have.includes(l))
    const status = missing.length ? `⚠️ thiếu lesson ${missing.join(', ')}` : '✅ đủ 4 lesson'
    console.log(`Unit ${String(u).padStart(2)}: ${status} (có: ${have.join(', ') || '—'})`)
  }

  const { byUnit, totalExpected, totalFound, totalMissing } = comparison

  console.log('\n## Tổng quan (60 lesson × từ vựng)\n')
  console.log(`Tổng từ kiểm tra: ${totalExpected}`)
  console.log(`Có trong project: ${totalFound}`)
  console.log(`Thiếu: ${totalMissing}`)
  console.log(`Tỷ lệ đủ: ${totalExpected ? ((totalFound / totalExpected) * 100).toFixed(1) : 0}%\n`)

  console.log('## Chi tiết theo unit (chỉ hiện lesson còn thiếu)\n')

  for (let u = 1; u <= 15; u++) {
    const rows = (byUnit.get(`unit-${u}`) || []).sort((a, b) => a.lesson - b.lesson)
    const totalMiss = rows.reduce((s, r) => s + r.missing.length, 0)
    const totalExp = rows.reduce((s, r) => s + r.expectedCount, 0)
    const status = totalMiss === 0 ? '✅' : `⚠️ thiếu ${totalMiss}/${totalExp} từ`
    console.log(`\n### UNIT ${u} ${status}`)
    for (const row of rows) {
      if (!row.missing.length) continue
      console.log(`   L${row.lesson} (${row.level}, tuần ${row.week}): thiếu ${row.missing.join(', ')}`)
    }
    if (totalMiss === 0) console.log('   _(Đủ tất cả 4 lesson)_')
  }

  console.log('\n## Tóm tắt theo unit\n')
  console.log('| Unit | Lessons | Từ yêu cầu | Thiếu | % |')
  console.log('| ---: | ---: | ---: | ---: | ---: |')
  for (let u = 1; u <= 15; u++) {
    const rows = byUnit.get(`unit-${u}`) || []
    const exp = rows.reduce((s, r) => s + r.expectedCount, 0)
    const miss = rows.reduce((s, r) => s + r.missing.length, 0)
    const pct = exp ? (((exp - miss) / exp) * 100).toFixed(0) : '-'
    console.log(`| ${u} | ${rows.length} | ${exp} | ${miss} | ${pct}% |`)
  }
}

async function main() {
  const parsed = parseExcel()
  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:123123@localhost:5432/wewin',
  })
  await client.connect()
  const project = await fetchProjectVocab(client)
  await client.end()

  const comparison = compareExpected(parsed.expected, project)
  printReport(parsed, comparison, project)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
