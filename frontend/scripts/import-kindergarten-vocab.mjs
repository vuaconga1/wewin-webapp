import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import XLSX from 'xlsx'
import pg from 'pg'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '../..')
const EXCEL_PATH = 'e:/Wewin/Project/TOPIC KINDERGARTEN +Structure neww.xlsx'
const imagesDir = path.join(rootDir, 'frontend/public/assets/images')
const audiosDir = path.join(rootDir, 'frontend/public/assets/audios')

// Excel lặp "Flags of country" ở mọi unit/tuần — đó là lỗi đánh máy.
// Chỉ Unit 1 (Around the World), Tuần 1 (WEEK 1+2) mới có từ vựng cờ quốc gia.
const FLAGS_UNIT_SLUG = 'around-the-world-and-my-country'
const FLAGS_WEEK = '1'

const GAME_TYPES = ['listenchoose', 'lookchoose', 'pronunciation']
const LEVELS = ['pre11', 'pre12', 'pre2', 'pre3']
const WEEKS = ['1', '2']
const MAX_QUESTIONS = 20

const TOPIC_TO_SLUG = {
  'around the world and my country': 'around-the-world-and-my-country',
  'the seasons': 'the-seasons',
  'transport & job': 'transport-&-job',
  'the earth': 'the-earth',
  'animals': 'animals',
  'plant & vegetable': 'plant-&-vegetable',
  'happy summer': 'happy-summer',
  'explore your suroundings': 'explore-your-suroudings',
  'all about me': 'all-about-me',
  'class, school & 5 senses': 'class-school-&-5-senses',
  'my house': 'my-house',
  'christmas & happy new year': 'christmas-&-happy-new-year',
}

const SKIP_WORDS = new Set([
  'and', 'or', 'the', 'a', 'an', 'yes', 'no', 'because', 'near', 'in', 'at', 'on', 'by',
  'from', 'to', 'of', 'for', 'with', 'my', 'your', 'their', 'our', 'its', 'summer clothes',
  'winter clothes', 'fly animal', 'farrm', 'weather', 'clothes', 'transport', 'jobs', 'job',
  'places', 'place', 'country', 'countries', 'solar system', 'recycling',
])

const CANONICAL_WORD = {
  broccol: 'broccoli',
  pape: 'paper',
  caterpilla: 'caterpillar',
  vol: 'volcano',
  'take a s': 'take a shower',
  suprised: 'surprised',
  ake: 'lake',
  'sand castle': 'sand castle',
  'sea horse': 'seahorse',
  policeman: 'police',
  santa: 'santa claus',
}

const LOOKUP_ALIASES = {
  rain: ['rainy', 'rain'],
  wind: ['windy', 'wind'],
  sun: ['sun', 'sunny'],
  cloud: ['cloud', 'cloudy'],
  hot: ['hot'],
  cold: ['cold', 'cool'],
  police: ['police', 'policeman', 'policewoman'],
  playground: ['playground', 'play ground'],
  'play ground': ['playground', 'play ground'],
  motorbike: ['motorbike', 'motorcycle'],
  caterpillar: ['caterpillar', 'caterpilla'],
  farmer: ['farmer'],
  beach: ['beach'],
  house: ['house'],
  school: ['school'],
  hat: ['hat'],
  wear: ['wear'],
  cool: ['cool', 'cold'],
  sunglasses: ['sunglasses'],
  bell: ['bell', 'jingle bell'],
  notebook: ['notebook'],
  paper: ['paper'],
  cucumber: ['cucumber'],
  eat: ['eat'],
  sleep: ['sleep'],
  'watch tv': ['watch tv', 'watch television'],
  'take a shower': ['take a shower', 'shower'],
}

function normalizeWord(value) {
  return String(value || '').trim().toLowerCase().replace(/\.$/, '').replace(/\s+/g, ' ')
}

function normalizeLookupKey(value) {
  return normalizeWord(value).replace(/[^a-z0-9]/g, '')
}

function canonicalizeWord(word) {
  const w = normalizeWord(word)
  return CANONICAL_WORD[w] || w
}

function splitScope(value) {
  return String(value || '').split(/[,;|/\n:&]/).map((x) => x.trim()).filter(Boolean)
}

function normalizeLevelKey(value) {
  const map = { '1': 'pre11', '2': 'pre12', '3': 'pre2', '4': 'pre3' }
  const normalized = normalizeLookupKey(value)
  if (map[normalized]) return map[normalized]
  const aliases = {
    pre11: 'pre11', pre12: 'pre12', pre2: 'pre2', pre3: 'pre3',
    pre11: 'pre11', pre12: 'pre12', pre21: 'pre2', pre31: 'pre3',
    '2tuoi': 'pre11', '3tuoi': 'pre12', '45tuoi': 'pre2', '6tuoi': 'pre3',
  }
  return aliases[normalized] || ''
}

function normalizeGameKey(value) {
  const normalized = normalizeLookupKey(value)
  if (!normalized || normalized === 'all') return 'kindergarten'
  if (['kindergarten', 'kindergarden', 'kg', 'kinder', 'kindy'].includes(normalized)) return 'kindergarten'
  if (['starter', 'starters'].includes(normalized)) return 'starters'
  return null
}

function matchesLevel(rowValue, selected) {
  if (!selected || selected === 'all') return true
  const rowKeys = splitScope(rowValue).map(normalizeLevelKey).filter(Boolean)
  return rowKeys.length === 0 || rowKeys.includes(selected)
}

function matchesWeek(rowValue, selected) {
  if (!selected || selected === 'all') return true
  const rowKeys = splitScope(rowValue)
  return rowKeys.length === 0 || rowKeys.includes(selected)
}

function matchesGame(rowValue) {
  const rowKeys = splitScope(rowValue).map(normalizeGameKey).filter(Boolean)
  return rowKeys.length === 0 || rowKeys.includes('kindergarten')
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
    const cleaned = canonicalizeWord(normalizeWord(w))
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
    const cleaned = canonicalizeWord(normalizeWord(w))
    if (!cleaned || cleaned.length < 2) return
    if (!/^[a-z][a-z0-9\s'-]*$/.test(cleaned)) return
    words.add(cleaned)
  })
  return [...words]
}

function shouldIncludeFlags(slug, week) {
  return slug === FLAGS_UNIT_SLUG && week === FLAGS_WEEK
}

function buildFlagLookupKeysFromExcel() {
  const keys = new Set()
  if (!fs.existsSync(EXCEL_PATH)) return keys
  const wb = XLSX.readFile(EXCEL_PATH)
  const data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, defval: '' })
  for (let i = 1; i < data.length; i++) {
    for (const col of [2, 4]) {
      for (const word of extractFlags(data[i][col])) {
        keys.add(normalizeLookupKey(word))
      }
    }
  }
  return keys
}

const FLAG_LOOKUP_KEYS = buildFlagLookupKeysFromExcel()

function isFlagVocabulary(word) {
  return FLAG_LOOKUP_KEYS.has(normalizeLookupKey(word))
}

function withoutFlagVocabulary(words, slug, week) {
  if (shouldIncludeFlags(slug, week)) return words
  return words.filter((w) => !isFlagVocabulary(w))
}

function extractVocab(text, slug, week) {
  if (!text) return { topic: [], flags: [], all: [] }
  const flagWords = shouldIncludeFlags(slug, week) ? extractFlags(text) : []
  const t = stripBoilerplate(text)
  const topicWords = new Set()
  const categoryRe = /(?:^|[\n\r])\s*([A-Za-z][A-Za-z0-9+ &/-]{0,60}?)\s*:\s*/g
  const matches = [...t.matchAll(categoryRe)]
  if (matches.length) {
    for (let i = 0; i < matches.length; i++) {
      const start = matches[i].index + matches[i][0].length
      const end = i + 1 < matches.length ? matches[i + 1].index : t.length
      addWordsFromSegment(t.slice(start, end), topicWords)
    }
  } else {
    addWordsFromSegment(t, topicWords)
  }
  const topic = [...topicWords]
  const flags = flagWords.filter((w) => !topicWords.has(w))
  return { topic, flags, all: [...topic, ...flags] }
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
  const expected = new Map()

  for (let i = 1; i < data.length; i++) {
    const row = data[i]
    const topicCell = String(row[0] || '').trim().replace(/\t/g, '')
    if (topicCell) currentTopic = topicCell
    const level = parseLevel(row[1])
    if (!level || !currentTopic) continue
    const slug = topicToSlug(currentTopic.replace(/\t/g, '').trim())
    for (const [week, text] of [['1', row[2]], ['2', row[4]]]) {
      const key = `${slug}::${level}::${week}`
      expected.set(key, extractVocab(text, slug, week).all)
    }
  }
  return expected
}

function resolveAudioFileName(name) {
  const cleaned = String(name || '').trim()
  const aliases = { labybug: 'ladybug', caterpilla: 'caterpillar', televison: 'television' }
  const lower = cleaned.toLowerCase()
  if (aliases[lower]) return aliases[lower]
  if (lower.endsWith(' zodiac')) return cleaned.slice(0, -' zodiac'.length).trim()
  return cleaned
}

function assetFileExists(type, name) {
  const folder = type === 'audio' ? audiosDir : imagesDir
  const ext = type === 'audio' ? 'mp3' : 'jpg'
  const cleaned = resolveAudioFileName(name)
  const direct = path.join(folder, `${cleaned}.${ext}`)
  if (fs.existsSync(direct)) return true
  const lower = path.join(folder, `${cleaned.toLowerCase()}.${ext}`)
  return fs.existsSync(lower)
}

function titleCaseWords(text) {
  return String(text || '').split(' ').map((part) => {
    if (!part) return part
    return part.charAt(0).toUpperCase() + part.slice(1)
  }).join(' ')
}

function pickDisplayEnglish(word, candidates) {
  if (candidates.length) {
    const exact = candidates.find((c) => normalizeWord(c) === normalizeWord(word))
    if (exact) return exact
    return candidates[0]
  }
  return titleCaseWords(word)
}

function findRegistryEntry(registry, word) {
  const key = normalizeLookupKey(word)
  if (registry.has(key)) return registry.get(key)

  const aliases = LOOKUP_ALIASES[normalizeWord(word)] || LOOKUP_ALIASES[canonicalizeWord(word)] || []
  for (const alias of aliases) {
    const aliasKey = normalizeLookupKey(alias)
    if (registry.has(aliasKey)) return registry.get(aliasKey)
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

  for (const [alias, targets] of Object.entries(LOOKUP_ALIASES)) {
    const aliasKey = normalizeLookupKey(alias)
    if (registry.has(aliasKey)) continue
    for (const target of targets) {
      const entry = registry.get(normalizeLookupKey(target))
      if (entry) {
        registry.set(aliasKey, entry)
        break
      }
    }
  }
  return registry
}

function resolveAssetForWord(word, registry) {
  const entry = findRegistryEntry(registry, word)
  const canonical = canonicalizeWord(word)
  const englishText = pickDisplayEnglish(canonical, entry ? [entry.englishText] : [])
  const imageValue = entry?.imageValue || ''
  const audioValue = entry?.audioValue || ''
  const vietnameseText = entry?.vietnameseText || ''
  const hasImage = imageValue.startsWith('/assets/') || assetFileExists('image', englishText) || assetFileExists('image', canonical)
  const hasAudio = audioValue.startsWith('/assets/') || assetFileExists('audio', englishText) || assetFileExists('audio', canonical)
  return { englishText, vietnameseText, imageValue, audioValue, hasImage, hasAudio }
}

function itemMatchesCombo(item, level, week) {
  return matchesGame(item.GameKeys)
    && matchesLevel(item.LevelKeys, level)
    && matchesWeek(item.WeekKeys, week)
}

function collectExistingWords(items, unitSlug, level, week) {
  const words = new Set()
  for (const item of items) {
    if (item.UnitSlug !== unitSlug) continue
    if (!itemMatchesCombo(item, level, week)) continue
    const w = canonicalizeWord(normalizeWord(item.EnglishText))
    if (w) words.add(w)
  }
  return [...words]
}

function buildTargetWords(excelWords, existingWords, slug, week) {
  const merged = []
  const seen = new Set()
  for (const list of [
    withoutFlagVocabulary(excelWords, slug, week),
    withoutFlagVocabulary(existingWords, slug, week),
  ]) {
    for (const raw of list) {
      const word = canonicalizeWord(normalizeWord(raw))
      const key = normalizeLookupKey(word)
      if (!word || !key || seen.has(key)) continue
      if (!shouldIncludeFlags(slug, week) && isFlagVocabulary(word)) continue
      seen.add(key)
      merged.push(word)
    }
  }

  return merged.slice(0, MAX_QUESTIONS)
}

async function main() {
  if (!fs.existsSync(EXCEL_PATH)) {
    console.error('Missing Excel:', EXCEL_PATH)
    process.exit(1)
  }

  const expected = parseExcelExpected()
  const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:123123@localhost:5432/wewin'
  const client = new pg.Client({ connectionString })
  await client.connect()

  const [unitsRes, itemsRes] = await Promise.all([
    client.query('SELECT "Order", "Name", "Slug", "LevelKeys", "GameKeys", "Status" FROM "Units" ORDER BY "Order"'),
    client.query(`SELECT "Id", "SourceKey", "GameType", "UnitSlug", "ImageValue", "AudioValue", "EnglishText", "VietnameseText", "WeekKeys", "LevelKeys", "GameKeys", "SortOrder" FROM "GameItems" ORDER BY "Id"`),
  ])

  const kgUnits = unitsRes.rows.filter((u) => {
    if (u.Status !== 'Active') return false
    const games = splitScope(u.GameKeys).map(normalizeGameKey).filter(Boolean)
    return games.length === 0 || games.includes('kindergarten')
  }).filter((u) => Object.values(TOPIC_TO_SLUG).includes(u.Slug) || u.Order <= 12)

  const kgSlugs = new Set(kgUnits.map((u) => u.Slug))
  const allItems = itemsRes.rows
  const kgItems = allItems.filter((i) => kgSlugs.has(i.UnitSlug) && matchesGame(i.GameKeys))
  const registry = buildRegistry(allItems)

  let deleted = 0
  let inserted = 0
  const report = []

  await client.query('BEGIN')

  try {
    for (const unit of kgUnits) {
      for (const level of LEVELS) {
        const unitLevels = splitScope(unit.LevelKeys).map(normalizeLevelKey).filter(Boolean)
        if (unitLevels.length && !unitLevels.includes(level)) continue

        for (const week of WEEKS) {
          const comboKey = `${unit.Slug}::${level}::${week}`
          const excelWords = expected.get(comboKey) || []
          const existingWords = collectExistingWords(kgItems, unit.Slug, level, week)
          const targetWords = buildTargetWords(excelWords, existingWords, unit.Slug, week)

          if (!targetWords.length) continue

          const idsToDelete = []
          for (const item of kgItems) {
            if (item.UnitSlug !== unit.Slug) continue
            if (!itemMatchesCombo(item, level, week)) continue
            if (!GAME_TYPES.includes(item.GameType)) continue
            idsToDelete.push(item.Id)
          }

          if (idsToDelete.length) {
            await client.query('DELETE FROM "GameItems" WHERE "Id" = ANY($1::int[])', [idsToDelete])
            deleted += idsToDelete.length
          }

          let sortOrder = 0
          for (const gameType of GAME_TYPES) {
            for (const word of targetWords) {
              const asset = resolveAssetForWord(word, registry)
              const sourceKey = `kg-sync:v2:${gameType}:${unit.Slug}:${level}:${week}:${normalizeLookupKey(word)}`
              await client.query(
                `INSERT INTO "GameItems" ("SourceKey", "GameType", "UnitSlug", "ImageValue", "AudioValue", "EnglishText", "VietnameseText", "WeekKeys", "LevelKeys", "GameKeys", "SortOrder")
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
                 ON CONFLICT ("SourceKey") DO UPDATE SET
                   "ImageValue" = EXCLUDED."ImageValue",
                   "AudioValue" = EXCLUDED."AudioValue",
                   "EnglishText" = EXCLUDED."EnglishText",
                   "VietnameseText" = EXCLUDED."VietnameseText",
                   "WeekKeys" = EXCLUDED."WeekKeys",
                   "LevelKeys" = EXCLUDED."LevelKeys",
                   "SortOrder" = EXCLUDED."SortOrder"`,
                [
                  sourceKey,
                  gameType,
                  unit.Slug,
                  asset.imageValue,
                  asset.audioValue,
                  asset.englishText,
                  asset.vietnameseText,
                  week,
                  level,
                  '',
                  sortOrder,
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

          report.push({
            unit: unit.Name,
            slug: unit.Slug,
            level,
            week,
            words: targetWords.length,
            excel: excelWords.length,
            sample: targetWords.slice(0, 5).join(', '),
          })
        }
      }
    }

    await client.query('COMMIT')
  } catch (error) {
    await client.query('ROLLBACK')
    throw error
  } finally {
    await client.end()
  }

  console.log('\n=== IMPORT KINDERGARTEN VOCAB ===\n')
  console.log('Flags/country vocab: chỉ Unit 1 Around the World, Tuần 1 (WEEK 1+2).')
  console.log(`Flag word keys ignored elsewhere: ${FLAG_LOOKUP_KEYS.size}\n`)
  console.log(`Units processed: ${kgUnits.length}`)
  console.log(`Deleted old rows: ${deleted}`)
  console.log(`Inserted/updated rows: ${inserted}`)
  console.log(`Combos synced: ${report.length}`)
  console.log('\nSample:')
  for (const row of report.slice(0, 8)) {
    console.log(`- ${row.unit} | ${row.level} | week ${row.week} | ${row.words} words (excel ${row.excel})`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
