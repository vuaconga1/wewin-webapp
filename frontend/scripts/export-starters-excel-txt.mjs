import fs from 'node:fs'
import XLSX from 'xlsx'

const EXCEL_PATH = 'c:/Users/PC/Downloads/pre starters An school.xlsx'
const OUTPUT_PATH = 'e:/AnSchool/wewin-webapp/STARTERS_VOCABULARY.txt'
const UNIT_TITLE_RE = /UNIT\s*(\d+)\s*[-–]?\s*LESSON\s*(\d+)/i
const LESSON_LABELS = {
  1: 'Lesson 1 (Pre 1.1)',
  2: 'Lesson 2 (Pre 1.2)',
  3: 'Lesson 3 (Pre 2)',
  4: 'Lesson 4 (Pre 3)',
}

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

function normalizeWord(value) {
  return String(value || '').trim().toLowerCase().replace(/\.$/, '').replace(/\s+/g, ' ')
}

function canonicalize(word) {
  const w = normalizeWord(word)
  return CANONICAL[w] || w
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
          if (!cleaned || cleaned.length < 2) continue
          if (cleaned.split(' ').length > 4) continue
          if (!/^[a-z][a-z0-9\s'-]*$/.test(cleaned)) continue
          if (SKIP_WORDS.has(cleaned)) continue
          if (/^\d+$/.test(cleaned)) continue
          if (cleaned.includes('exercise')) continue
          if (cleaned.includes('funskill')) continue
          if (cleaned.includes('dialogue')) continue
          if (cleaned.includes('comprehension')) continue
          words.add(cleaned)
        }
      })
  }
  return [...words]
}

function parseExcel() {
  if (!fs.existsSync(EXCEL_PATH)) throw new Error(`Missing file: ${EXCEL_PATH}`)
  const wb = XLSX.readFile(EXCEL_PATH)
  const data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, defval: '' })
  const byUnit = new Map()

  for (let i = 2; i < data.length; i++) {
    const title = String(data[i][1] || '').replace(/\r\n/g, ' ').trim()
    const m = title.match(UNIT_TITLE_RE)
    if (!m) continue
    const unitNum = Number(m[1])
    const lesson = Number(m[2])
    if (unitNum < 1 || unitNum > 15 || lesson < 1 || lesson > 4) continue
    const words = extractVocabFromContent(data[i][2])
    if (!byUnit.has(unitNum)) byUnit.set(unitNum, { lessons: {} })
    byUnit.get(unitNum).lessons[lesson] = { title, words }
  }
  return byUnit
}

function buildOutput(byUnit) {
  let out = 'TỪ VỰNG STARTERS - 15 UNIT (từ Excel)\n'
  out += 'Nguồn: pre starters An school.xlsx\n'
  out += 'Mỗi unit gồm 4 lesson (L1=Pre 1.1, L2=Pre 1.2, L3=Pre 2, L4=Pre 3)\n'
  out += '='.repeat(50) + '\n\n'

  for (let u = 1; u <= 15; u++) {
    const unit = byUnit.get(u)
    const allWords = []
    const seen = new Set()

    out += `UNIT ${u}\n`
    out += '='.repeat(20) + '\n'

    for (let l = 1; l <= 4; l++) {
      const lesson = unit?.lessons?.[l]
      out += `${LESSON_LABELS[l]}\n`
      out += '-'.repeat(20) + '\n'
      if (!lesson?.words?.length) {
        out += '(không có từ vựng)\n\n'
        continue
      }
      lesson.words.forEach((w, i) => {
        out += `${i + 1}. ${w}\n`
        const key = w.toLowerCase()
        if (!seen.has(key)) {
          seen.add(key)
          allWords.push(w)
        }
      })
      out += '\n'
    }

    out += `TỔNG HỢP UNIT ${u} (${allWords.length} từ, không trùng)\n`
    out += '-'.repeat(20) + '\n'
    allWords.forEach((w, i) => {
      out += `${i + 1}. ${w}\n`
    })
    out += '\n' + '='.repeat(50) + '\n\n'
  }

  return out
}

const byUnit = parseExcel()
fs.writeFileSync(OUTPUT_PATH, buildOutput(byUnit), 'utf8')
console.log(`Written: ${OUTPUT_PATH}`)

for (let u = 1; u <= 15; u++) {
  const unit = byUnit.get(u)
  const seen = new Set()
  for (let l = 1; l <= 4; l++) {
    for (const w of unit?.lessons?.[l]?.words || []) seen.add(w.toLowerCase())
  }
  const lessons = unit ? Object.keys(unit.lessons).sort().join(', ') : '—'
  console.log(`Unit ${String(u).padStart(2)}: ${seen.size} từ | lessons: ${lessons}`)
}
