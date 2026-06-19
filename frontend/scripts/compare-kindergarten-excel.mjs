import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import XLSX from 'xlsx'
import pg from 'pg'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const EXCEL_PATH = 'e:/Wewin/Project/TOPIC KINDERGARTEN +Structure neww.xlsx'

// Flags of country trong Excel là lỗi đánh máy — chỉ áp dụng Unit 1, Tuần 1 (WEEK 1+2).
const FLAGS_UNIT_SLUG = 'around-the-world-and-my-country'
const FLAGS_WEEK = '1'

const LEVEL_LABELS = {
  pre11: 'Pre 1.1 (2 tuổi)',
  pre12: 'Pre 1.2 (3 tuổi)',
  pre2: 'Pre 2 (4-5 tuổi)',
  pre3: 'Pre 3 (6 tuổi)',
}

const TOPIC_TO_SLUG = {
  'around the world and my country': 'around-the-world-and-my-country',
  'the seasons': 'the-seasons',
  'transport & job': 'transport-&-job',
  'the earth': 'the-earth',
  'animals': 'animals',
  'plant & vegetable': 'plant-&-vegetable',
  'happy summer': 'happy-summer',
  'explore your suroundings': 'explore-your-suroudings',
  'explore your surroundings': 'explore-your-suroudings',
  'all about me': 'all-about-me',
  'class, school & 5 senses': 'class-school-&-5-senses',
  'my house': 'my-house',
  'christmas & happy new year': 'christmas-&-happy-new-year',
}

const SKIP_WORDS = new Set([
  'and', 'or', 'the', 'a', 'an', 'yes', 'no', 'because', 'near', 'in', 'at', 'on', 'by',
  'from', 'to', 'of', 'for', 'with', 'my', 'your', 'their', 'our', 'its', 'summer clothes',
  'winter clothes', 'fly animal', 'farrm', 'weather', 'clothes', 'transport', 'jobs', 'job',
  'places', 'place', 'country', 'countries', 'solar system', 'recycling', 'earth',
])

function normalizeWord(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/\.$/, '')
    .replace(/\s+/g, ' ')
}

function normalizeLookupKey(value) {
  return normalizeWord(value).replace(/[^a-z0-9]/g, '')
}

function parseLevel(cls) {
  const s = String(cls).toLowerCase()
  if (s.includes('1.1') || s.includes('2 tu')) return 'pre11'
  if (s.includes('1.2') || s.includes('3 tu')) return 'pre12'
  if (s.includes('pre 2') || s.includes('4-5')) return 'pre2'
  if (s.includes('pre 3') || s.includes('6 tu')) return 'pre3'
  return null
}

function stripBoilerplate(text) {
  let t = String(text || '').replace(/\r\n/g, '\n')
  t = t.replace(/Flags of country[\s\S]*/gi, '')
  t = t.replace(/\(Hình[^)]*\)/gi, '')
  t = t.replace(/👉[^\n]*/g, '')
  return t
}

function addWordsFromSegment(segment, words) {
  const cleanedSegment = segment
    .split(/\s*(?:It's|What|Where|How|Who|Can|Why|I |They |This |Structure)/i)[0]
    .replace(/\./g, ',')
    .replace(/\n/g, ',')

  cleanedSegment.split(/[,;]/).forEach((w) => {
    const cleaned = normalizeWord(w)
    if (!cleaned || cleaned.length < 2) return
    if (!/^[a-z][a-z0-9\s'-]*$/.test(cleaned)) return
    if (SKIP_WORDS.has(cleaned)) return
    words.add(cleaned)
  })
}

function extractFlags(text) {
  const words = new Set()
  const match = String(text || '').match(/Flags of country\s*:([\s\S]*?)(?:\(Hình|👉|$)/i)
  if (!match) return []
  match[1].split(/[,;\n\r]/).forEach((w) => {
    const cleaned = normalizeWord(w)
    if (!cleaned || cleaned.length < 2) return
    if (!/^[a-z][a-z0-9\s'-]*$/.test(cleaned)) return
    words.add(cleaned)
  })
  return [...words]
}

function shouldIncludeFlags(slug, week) {
  return slug === FLAGS_UNIT_SLUG && week === FLAGS_WEEK
}

function extractVocab(text, slug, week) {
  const t = stripBoilerplate(text)
  const words = new Set()

  if (shouldIncludeFlags(slug, week)) {
    for (const w of extractFlags(text)) words.add(w)
  }

  const categoryRe = /(?:^|[\n\r])\s*([A-Za-z][A-Za-z0-9+ &/-]{0,60}?)\s*:\s*/g
  const matches = [...t.matchAll(categoryRe)]

  if (matches.length) {
    for (let i = 0; i < matches.length; i++) {
      const start = matches[i].index + matches[i][0].length
      const end = i + 1 < matches.length ? matches[i + 1].index : t.length
      addWordsFromSegment(t.slice(start, end), words)
    }
  } else {
    addWordsFromSegment(t, words)
  }

  return [...words]
}

function splitScope(value) {
  return String(value || '')
    .split(/[,;|/\n:&]/)
    .map((x) => x.trim())
    .filter(Boolean)
}

function normalizeLevelKey(value) {
  const map = { '1': 'pre11', '2': 'pre12', '3': 'pre2', '4': 'pre3' }
  const normalized = normalizeLookupKey(value)
  if (map[normalized]) return map[normalized]
  const aliases = {
    pre11: 'pre11', pre12: 'pre12', pre2: 'pre2', pre3: 'pre3',
    '2tuoi': 'pre11', '3tuoi': 'pre12', '45tuoi': 'pre2', '6tuoi': 'pre3',
  }
  return aliases[normalized] || normalized
}

function normalizeGameKey(value) {
  const normalized = normalizeLookupKey(value)
  if (!normalized || normalized === 'all') return 'kindergarten'
  if (['kindergarten', 'kindergarden', 'kg', 'kinder', 'kindy'].includes(normalized)) return 'kindergarten'
  if (['starter', 'starters'].includes(normalized)) return 'starters'
  return null
}

function topicToSlug(topic) {
  const key = String(topic || '').replace(/\t/g, '').trim().toLowerCase()
  if (TOPIC_TO_SLUG[key]) return TOPIC_TO_SLUG[key]
  return key.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function parseExcelExpected() {
  const wb = XLSX.readFile(EXCEL_PATH)
  const data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, defval: '' })

  let currentTopic = ''
  const expected = []

  for (let i = 1; i < data.length; i++) {
    const row = data[i]
    const topicCell = String(row[0] || '').trim().replace(/\t/g, '')
    if (topicCell) currentTopic = topicCell

    const level = parseLevel(row[1])
    if (!level || !currentTopic) continue

    const topic = currentTopic.replace(/\t/g, '').trim()
    const slug = topicToSlug(topic)

    expected.push({
      topic,
      slug,
      level,
      week: '1',
      words: extractVocab(row[2], slug, '1'),
    })
    expected.push({
      topic,
      slug,
      level,
      week: '2',
      words: extractVocab(row[4], slug, '2'),
    })
  }

  return expected
}

async function fetchProjectVocab() {
  const connectionString = process.env.DATABASE_URL
    || 'postgresql://postgres:123123@localhost:5432/wewin'

  const client = new pg.Client({ connectionString })
  await client.connect()

  const [unitsRes, itemsRes] = await Promise.all([
    client.query('SELECT "Order", "Name", "Slug", "LevelKeys", "GameKeys", "Status" FROM "Units" ORDER BY "Order"'),
    client.query(`SELECT "UnitSlug", "EnglishText", "WeekKeys", "LevelKeys", "GameKeys" FROM "GameItems" ORDER BY "UnitSlug", "SortOrder"`),
  ])

  await client.end()

  const units = unitsRes.rows.filter((u) => u.Status === 'Active')
  const items = itemsRes.rows

  const project = new Map()

  for (const unit of units) {
    const unitGames = splitScope(unit.GameKeys).map(normalizeGameKey).filter(Boolean)
    const isKindergarten = unitGames.length === 0 || unitGames.includes('kindergarten')
    if (!isKindergarten) continue

    const unitItems = items.filter((item) => item.UnitSlug === unit.Slug)
    for (const item of unitItems) {
      const en = String(item.EnglishText || '').trim()
      if (!en) continue

      const itemGames = splitScope(item.GameKeys).map(normalizeGameKey).filter(Boolean)
      if (itemGames.length && !itemGames.includes('kindergarten')) continue

      const itemLevels = splitScope(item.LevelKeys).map(normalizeLevelKey).filter(Boolean)
      const weeks = splitScope(item.WeekKeys).filter(Boolean)

      const levels = itemLevels.length ? itemLevels : ['pre11', 'pre12', 'pre2', 'pre3']
      const weekKeys = weeks.length ? weeks : ['1', '2']

      for (const level of levels) {
        for (const week of weekKeys) {
          const key = `${unit.Slug}::${level}::${week}`
          if (!project.has(key)) {
            project.set(key, {
              topic: unit.Name,
              slug: unit.Slug,
              level,
              week,
              words: new Map(),
            })
          }
          const entry = project.get(key)
          const wordKey = normalizeWord(en)
          if (!entry.words.has(wordKey)) {
            entry.words.set(wordKey, en)
          }
        }
      }
    }
  }

  return project
}

function wordMatches(projectWords, expectedWord) {
  const normalized = normalizeWord(expectedWord)
  const lookup = normalizeLookupKey(expectedWord)

  if (projectWords.has(normalized)) return projectWords.get(normalized)

  for (const [key, value] of projectWords) {
    if (normalizeLookupKey(key) === lookup) return value
  }

  // common aliases
  const aliases = {
    'police': ['police officer', 'policeman', 'policewoman'],
    'playground': ['play ground'],
    'play ground': ['playground'],
    'motorcycle': ['motorbike'],
    'motorbike': ['motorcycle'],
    'television': ['televison', 'tv'],
    'santa claus': ['santa'],
    'happy new year': ['new year'],
    'christmas tree': ['christmas tree', 'tree'],
    'suprised': ['surprised', 'suprised'],
    'surprised': ['suprised', 'surprised'],
    'watch tv': ['watch tv', 'watch television'],
    'take a shower': ['take a shower', 'shower'],
    'wake up': ['wake up', 'wake'],
    'go to school': ['go to school', 'school'],
    'do my homework': ['do my homework', 'homework'],
    'brush my teeth': ['brush my teeth', 'brush teeth'],
    'wash my hand': ['wash my hand', 'wash hands', 'wash hand'],
    'read a book': ['read a book', 'read book', 'read'],
    'get dressed': ['get dressed', 'dress'],
    'grandpa': ['grandpa', 'grandfather'],
    'grandma': ['grandma', 'grandmother'],
    'volcano': ['volcano', 'vol'],
    'fly animal': ['fly animal', 'flying animal'],
  }

  const aliasList = aliases[normalized] || []
  for (const alias of aliasList) {
    if (projectWords.has(alias)) return projectWords.get(alias)
    for (const [key, value] of projectWords) {
      if (normalizeLookupKey(key) === normalizeLookupKey(alias)) return value
    }
  }

  return null
}

function getUnitLevelWords(project, slug, level) {
  const merged = new Map()
  for (const week of ['1', '2']) {
    const key = `${slug}::${level}::${week}`
    const entry = project.get(key)
    if (!entry) continue
    for (const [wordKey, wordValue] of entry.words) {
      if (!merged.has(wordKey)) merged.set(wordKey, wordValue)
    }
  }
  return merged
}

function compare(expected, project) {
  const results = []
  let totalExpected = 0
  let totalFound = 0
  let totalMissing = 0

  for (const exp of expected) {
    const key = `${exp.slug}::${exp.level}::${exp.week}`
    const proj = project.get(key)
    const projectWords = proj ? proj.words : new Map()
    const unitLevelWords = getUnitLevelWords(project, exp.slug, exp.level)

    const missing = []
    const found = []
    const wrongWeek = []

    for (const word of exp.words) {
      totalExpected += 1
      const match = wordMatches(projectWords, word)
      if (match) {
        totalFound += 1
        found.push({ expected: word, actual: match })
      } else {
        const altMatch = wordMatches(unitLevelWords, word)
        if (altMatch) {
          totalFound += 1
          wrongWeek.push({ expected: word, actual: altMatch })
        } else {
          totalMissing += 1
          missing.push(word)
        }
      }
    }

    const extra = []
    if (proj) {
      const expectedSet = new Set(exp.words.map(normalizeWord))
      for (const [wordKey, wordValue] of proj.words) {
        let isExpected = expectedSet.has(wordKey)
        if (!isExpected) {
          for (const ew of exp.words) {
            if (wordMatches(new Map([[wordKey, wordValue]]), ew)) {
              isExpected = true
              break
            }
          }
        }
        if (!isExpected) extra.push(wordValue)
      }
    }

    results.push({
      topic: exp.topic,
      slug: exp.slug,
      level: exp.level,
      week: exp.week,
      expectedCount: exp.words.length,
      foundCount: found.length + wrongWeek.length,
      missing,
      wrongWeek,
      extra,
      complete: missing.length === 0 && exp.words.length > 0,
    })
  }

  return { results, totalExpected, totalFound, totalMissing }
}

function printReport({ results, totalExpected, totalFound, totalMissing }, project) {
  console.log('\n=== BÁO CÁO SO SÁNH KINDERGARTEN vs EXCEL ===\n')
  console.log('Quy ước: WEEK 1+2 (Excel) = Tuần 1 (Project), WEEK 3+4 (Excel) = Tuần 2 (Project)\n')
  console.log(`Tổng từ vựng yêu cầu (Excel): ${totalExpected}`)
  console.log(`Đã có trong project: ${totalFound}`)
  console.log(`Còn thiếu: ${totalMissing}`)
  console.log(`Tỷ lệ đủ: ${totalExpected ? ((totalFound / totalExpected) * 100).toFixed(1) : 0}%\n`)

  const byTopic = new Map()
  for (const r of results) {
    if (!byTopic.has(r.topic)) byTopic.set(r.topic, [])
    byTopic.get(r.topic).push(r)
  }

  for (const [topic, rows] of byTopic) {
    const topicExpected = rows.reduce((s, r) => s + r.expectedCount, 0)
    const topicMissing = rows.reduce((s, r) => s + r.missing.length, 0)
    const topicFound = topicExpected - topicMissing
    const status = topicMissing === 0 ? '✅ ĐỦ' : `⚠️ THIẾU ${topicMissing}/${topicExpected}`

    console.log(`\n## ${topic}`)
    console.log(`   ${status} (${topicFound}/${topicExpected} từ)`)

    for (const r of rows) {
      if (r.expectedCount === 0) continue
      const levelLabel = LEVEL_LABELS[r.level] || r.level
      const weekLabel = r.week === '1' ? 'Tuần 1 (W1+2)' : 'Tuần 2 (W3+4)'
      const rowStatus = r.missing.length === 0 ? '✅' : `❌ thiếu ${r.missing.length}/${r.expectedCount}`

      console.log(`\n   ${levelLabel} | ${weekLabel} | ${rowStatus}`)
      if (r.missing.length) {
        console.log(`      Thiếu: ${r.missing.join(', ')}`)
      }
      if (r.wrongWeek?.length) {
        console.log(`      Có nhưng sai tuần: ${r.wrongWeek.map((w) => w.expected).join(', ')}`)
      }
      if (r.extra.length && r.extra.length <= 8) {
        console.log(`      Thừa (không trong Excel): ${r.extra.join(', ')}`)
      } else if (r.extra.length > 8) {
        console.log(`      Thừa (không trong Excel): ${r.extra.slice(0, 8).join(', ')}... (+${r.extra.length - 8})`)
      }
    }
  }

  // Summary table
  console.log('\n\n=== TÓM TẮT THEO CHỦ ĐỀ ===\n')
  console.log('| Chủ đề | Yêu cầu | Có | Thiếu | % |')
  console.log('| --- | ---: | ---: | ---: | ---: |')
  for (const [topic, rows] of byTopic) {
    const req = rows.reduce((s, r) => s + r.expectedCount, 0)
    const miss = rows.reduce((s, r) => s + r.missing.length, 0)
    const have = req - miss
    const pct = req ? ((have / req) * 100).toFixed(0) : '-'
    console.log(`| ${topic} | ${req} | ${have} | ${miss} | ${pct}% |`)
  }

  // Units in project not in Excel
  const excelSlugs = new Set(results.map((r) => r.slug))
  const projectOnly = [...project.values()].filter((p) => !excelSlugs.has(p.slug))
  if (projectOnly.length) {
    console.log('\n\n=== UNIT CÓ TRONG PROJECT NHƯNG KHÔNG CÓ TRONG EXCEL ===\n')
    for (const p of projectOnly) {
      console.log(`- ${p.topic} (${p.slug})`)
    }
  }

  const excelOnly = [...excelSlugs].filter((s) => ![...project.keys()].some((k) => k.startsWith(`${s}::`)))
  if (excelOnly.length) {
    console.log('\n=== CHỦ ĐỀ CÓ TRONG EXCEL NHƯNG KHÔNG TÌM THẤY UNIT TRONG PROJECT ===\n')
    for (const s of excelOnly) {
      const row = results.find((r) => r.slug === s)
      console.log(`- ${row?.topic || s} (${s})`)
    }
  }
}

async function main() {
  if (!fs.existsSync(EXCEL_PATH)) {
    console.error('Không tìm thấy file Excel:', EXCEL_PATH)
    process.exit(1)
  }

  const expected = parseExcelExpected()
  const project = await fetchProjectVocab()
  const report = compare(expected, project)
  printReport(report, project)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
