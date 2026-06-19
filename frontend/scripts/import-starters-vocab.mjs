import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import XLSX from 'xlsx'
import pg from 'pg'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '../..')
const EXCEL_PATH = 'c:/Users/PC/Downloads/pre starters An school.xlsx'
const imagesDir = path.join(rootDir, 'frontend/public/assets/images')
const audiosDir = path.join(rootDir, 'frontend/public/assets/audios')

const GAME_TYPES = ['listenchoose', 'lookchoose', 'pronunciation']
const MAX_QUESTIONS = 20
const STARTERS_GAME_KEY = 'starters'

// Lesson → Level (Pre); Lesson 1+2 → Tuần 1, Lesson 3+4 → Tuần 2
const LESSON_TO_LEVEL = { 1: 'pre11', 2: 'pre12', 3: 'pre2', 4: 'pre3' }
const LESSON_TO_WEEK = { 1: '1', 2: '1', 3: '2', 4: '2' }

const UNIT_TITLE_RE = /UNIT\s*(\d+)\s*[-–]?\s*LESSON\s*(\d+)/i

const SKIP_WORDS = new Set([
  'and', 'or', 'the', 'a', 'an', 'yes', 'no', 'in', 'on', 'at', 'by', 'to', 'of', 'for',
  'with', 'is', 'are', 'was', 'were', 'be', 'have', 'has', 'got', 'can', 'do', 'does',
  'activity', 'exercise', 'homework', 'structure', 'reading', 'listening', 'writing',
  'report', 'review', 'practice', 'page', 'unit', 'funskill', 'booklet', 'grammar',
  'teacher', 'students', 'student', 'class', 'game', 'games', 'wordlist', 'topic',
  'focus', 'task', 'type', 'example', 'instructions', 'story', 'spelling', 'speaking',
  'between', 'under', 'behind', 'next', 'front', 'place', 'preposition', 'prepositions',
  'irregular', 'plural', 'noun', 'continuous', 'present', 'comic', 'strip', 'dialogue',
  'match', 'complete', 'visual', 'crossword', 'draw', 'label', 'find', 'count', 'write',
  'answer', 'answers', 'ask', 'talk', 'listen', 'read', 'act', 'colour', 'color', 'part',
  'look', 'picture', 'pictures', 'she', 'he', 'they', 'we', 'you', 'i', 'me', 'too', 'so',
  'would', 'like', 'please', 'thank', 'these', 'this', 'those', 'what', 'where', 'when',
  'how', 'many', 'old', 'name', 'his', 'her', 'some', 'any', 'there', 'then', 'each',
  'etc', 'hold', 'point at', 'tail', 'peas', 'hamburger', 'diningroom',
])

const CANONICAL = {
  voacbulary: 'vocabulary',
  lizzard: 'lizard',
  'jelly fish': 'jellyfish',
  televison: 'television',
  hoo: 'hockey',
  rehview: 'review',
}

const LOOKUP_ALIASES = {
  television: ['television', 'televison', 'tv'],
  lizard: ['lizard', 'lizzard'],
  jellyfish: ['jellyfish', 'jelly fish'],
  mom: ['mom', 'mum'],
  dad: ['dad'],
  mice: ['mice', 'mouse'],
  children: ['children', 'child'],
  people: ['people', 'person'],
  person: ['people', 'person'],
  man: ['man', 'men'],
  men: ['men', 'man'],
  woman: ['woman', 'women'],
  women: ['women', 'woman'],
  trousers: ['trousers', 'pants'],
  pants: ['trousers', 'pants'],
  'board games': ['board games', 'board game'],
  'board game': ['board games', 'board game'],
  'sing a song': ['sing a song', 'song'],
  'listen to music': ['listen to music', 'listen to'],
  'listen to': ['listen to music', 'listen to'],
  'have dinner': ['have dinner', 'have dinner have dinner'],
  'fly a kite': ['fly a kite'],
  'get up': ['get up'],
  'have breakfast': ['have breakfast'],
  'have lunch': ['have lunch'],
  'go to bed': ['go to bed'],
  'put on clothes': ['put on clothes'],
  'take a shower': ['take a shower', 'shower'],
  'table tennis': ['table tennis'],
  'tennis racket': ['tennis racket', 'racket'],
  'orange juice': ['orange juice', 'juice'],
  'ice cream': ['ice cream'],
  'polar bear': ['polar bear'],
  car: ['car'],
  helicopter: ['helicopter'],
  fish: ['fish'],
  sheep: ['sheep'],
  horse: ['horse'],
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

function isStartersItem(item) {
  return splitScope(item.GameKeys).map(normalizeGameKey).includes('starters')
}

function matchesGame(rowValue) {
  return isStartersItem({ GameKeys: rowValue })
}

function extractVocabFromContent(text) {
  if (!text) return []
  const words = new Set()
  const t = String(text).replace(/\r\n/g, '\n')
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

function parseExcelLessons() {
  if (!fs.existsSync(EXCEL_PATH)) throw new Error(`Missing: ${EXCEL_PATH}`)
  const wb = XLSX.readFile(EXCEL_PATH)
  const data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, defval: '' })
  const lessons = []

  for (let i = 2; i < data.length; i++) {
    const title = String(data[i][1] || '').replace(/\r\n/g, ' ').trim()
    const m = title.match(UNIT_TITLE_RE)
    if (!m) continue
    const unitNum = Number(m[1])
    const lesson = Number(m[2])
    if (unitNum < 1 || unitNum > 15 || lesson < 1 || lesson > 4) continue
    lessons.push({
      unitNum,
      lesson,
      slug: `unit-${unitNum}`,
      level: LESSON_TO_LEVEL[lesson],
      week: LESSON_TO_WEEK[lesson],
      words: extractVocabFromContent(data[i][2]),
      title,
    })
  }
  return lessons
}

function resolveAudioFileName(name) {
  const cleaned = String(name || '').trim()
  const aliases = { labybug: 'ladybug', caterpilla: 'caterpillar', televison: 'television' }
  const lower = cleaned.toLowerCase()
  if (aliases[lower]) return aliases[lower]
  return cleaned
}

function assetFileExists(type, name) {
  const folder = type === 'audio' ? audiosDir : imagesDir
  const ext = type === 'audio' ? 'mp3' : 'jpg'
  const cleaned = resolveAudioFileName(name)
  return fs.existsSync(path.join(folder, `${cleaned}.${ext}`))
    || fs.existsSync(path.join(folder, `${cleaned.toLowerCase()}.${ext}`))
}

function titleCaseWords(text) {
  return String(text || '').split(' ').map((part) => {
    if (!part) return part
    return part.charAt(0).toUpperCase() + part.slice(1)
  }).join(' ')
}

function findRegistryEntry(registry, word) {
  const key = normalizeLookupKey(word)
  if (registry.has(key)) return registry.get(key)
  const aliases = LOOKUP_ALIASES[normalizeWord(word)] || LOOKUP_ALIASES[canonicalize(word)] || []
  for (const alias of aliases) {
    const ak = normalizeLookupKey(alias)
    if (registry.has(ak)) return registry.get(ak)
  }
  for (const [regKey, entry] of registry) {
    if (regKey === key) return entry
    for (const alias of aliases) {
      if (regKey === normalizeLookupKey(alias)) return entry
    }
  }
  return null
}

function isPlaceholderVietnamese(value) {
  const text = String(value || '').trim()
  if (!text) return true
  if (/^[\d\s.,]+$/.test(text)) return true
  if (/^\d+\.\d+$/.test(text)) return true
  return false
}

function buildRegistry(items) {
  const registry = new Map()
  for (const item of items) {
    const key = normalizeLookupKey(item.EnglishText)
    if (!key) continue
    const score = (item.ImageValue ? 2 : 0) + (item.AudioValue ? 1 : 0) + (!isPlaceholderVietnamese(item.VietnameseText) ? 1 : 0)
    const existing = registry.get(key)
    if (!existing || score > existing.score) {
      registry.set(key, {
        englishText: item.EnglishText,
        vietnameseText: isPlaceholderVietnamese(item.VietnameseText) ? '' : item.VietnameseText,
        imageValue: item.ImageValue || '',
        audioValue: item.AudioValue || '',
        score,
      })
    }
  }
  return registry
}

function resolveAssetForWord(word, registry) {
  const entry = findRegistryEntry(registry, word)
  const canonical = canonicalize(word)
  const englishText = entry?.englishText || titleCaseWords(canonical)
  return {
    englishText,
    vietnameseText: entry?.vietnameseText || '',
    imageValue: entry?.imageValue || '',
    audioValue: entry?.audioValue || '',
  }
}

function buildTargetWords(excelWords, existingWords) {
  const merged = []
  const seen = new Set()
  for (const list of [excelWords, existingWords]) {
    for (const raw of list) {
      const word = canonicalize(normalizeWord(raw))
      const key = normalizeLookupKey(word)
      if (!word || !key || seen.has(key)) continue
      seen.add(key)
      merged.push(word)
    }
  }
  return merged.slice(0, MAX_QUESTIONS)
}

function itemMatchesCombo(item, slug, level, week) {
  if (item.UnitSlug !== slug) return false
  if (!isStartersItem(item)) return false
  const levels = splitScope(item.LevelKeys).map(normalizeLevelKey).filter(Boolean)
  if (levels.length && !levels.includes(level)) return false
  const weeks = splitScope(item.WeekKeys).filter(Boolean)
  if (weeks.length && !weeks.includes(week)) return false
  return true
}

async function main() {
  const lessons = parseExcelLessons()
  console.log(`Parsed ${lessons.length} lessons from Excel (expect 60)`)

  const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:123123@localhost:5432/wewin'
  const client = new pg.Client({ connectionString })
  await client.connect()

  const itemsRes = await client.query(`
    SELECT "Id", "GameType", "UnitSlug", "ImageValue", "AudioValue", "EnglishText", "VietnameseText",
           "WeekKeys", "LevelKeys", "GameKeys", "SortOrder"
    FROM "GameItems" ORDER BY "Id"
  `)
  const allItems = itemsRes.rows
  const starterSlugs = new Set(Array.from({ length: 15 }, (_, i) => `unit-${i + 1}`))
  const starterItems = allItems.filter((i) => starterSlugs.has(i.UnitSlug) && isStartersItem(i))
  const registry = buildRegistry(allItems)

  let deleted = 0
  let inserted = 0

  await client.query('BEGIN')
  try {
    for (const lesson of lessons) {
      const existingWords = []
      for (const item of starterItems) {
        if (!itemMatchesCombo(item, lesson.slug, lesson.level, lesson.week)) continue
        const w = canonicalize(normalizeWord(item.EnglishText))
        if (w) existingWords.push(w)
      }

      const targetWords = buildTargetWords(lesson.words, existingWords)
      if (!targetWords.length) continue

      const idsToDelete = starterItems
        .filter((item) => itemMatchesCombo(item, lesson.slug, lesson.level, lesson.week) && GAME_TYPES.includes(item.GameType))
        .map((item) => item.Id)

      if (idsToDelete.length) {
        await client.query('DELETE FROM "GameItems" WHERE "Id" = ANY($1::int[])', [idsToDelete])
        deleted += idsToDelete.length
      }

      let sortOrder = 0
      for (const gameType of GAME_TYPES) {
        for (const word of targetWords) {
          const asset = resolveAssetForWord(word, registry)
          const sourceKey = `starters-sync:v1:${gameType}:${lesson.slug}:${lesson.level}:${lesson.week}:${normalizeLookupKey(word)}`
          await client.query(
            `INSERT INTO "GameItems" ("SourceKey", "GameType", "UnitSlug", "ImageValue", "AudioValue", "EnglishText", "VietnameseText", "WeekKeys", "LevelKeys", "GameKeys", "SortOrder")
             VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
             ON CONFLICT ("SourceKey") DO UPDATE SET
               "ImageValue"=EXCLUDED."ImageValue", "AudioValue"=EXCLUDED."AudioValue",
               "EnglishText"=EXCLUDED."EnglishText", "VietnameseText"=EXCLUDED."VietnameseText",
               "WeekKeys"=EXCLUDED."WeekKeys", "LevelKeys"=EXCLUDED."LevelKeys", "SortOrder"=EXCLUDED."SortOrder"`,
            [
              sourceKey, gameType, lesson.slug,
              asset.imageValue, asset.audioValue, asset.englishText, asset.vietnameseText,
              lesson.week, lesson.level, STARTERS_GAME_KEY, sortOrder,
            ],
          )
          inserted += 1
          sortOrder += 1
          const regKey = normalizeLookupKey(asset.englishText)
          if (!registry.has(regKey)) {
            registry.set(regKey, {
              englishText: asset.englishText,
              vietnameseText: asset.vietnameseText,
              imageValue: asset.imageValue,
              audioValue: asset.audioValue,
              score: 1,
            })
          }
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

  console.log('\n=== IMPORT STARTERS VOCAB ===\n')
  console.log('Quy ước: L1=pre11/w1, L2=pre12/w1, L3=pre2/w2, L4=pre3/w2')
  console.log(`Deleted: ${deleted} | Inserted/updated: ${inserted}`)
  console.log(`Combos: ${lessons.filter((l) => l.words.length).length} lessons with vocab`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
