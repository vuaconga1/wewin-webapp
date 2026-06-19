import fs from 'node:fs'
import path from 'node:path'

export const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.gif']
export const AUDIO_EXTS = ['.mp3', '.wav', '.ogg']
export const CHRISTMAS_UNIT = 'christmas-&-happy-new-year'
export const ZODIAC_ANIMALS = new Set(['cat', 'dog', 'dragon', 'ox', 'rat', 'goat', 'horse', 'monkey', 'pig', 'snake', 'tiger', 'cock'])

export const AUDIO_NAME_ALIASES = {
  labybug: 'ladybug',
  caterpilla: 'caterpillar',
  televison: 'television',
  surprised: 'suprised',
  'jelly fish': 'jellyfish',
  gingerbread: 'ginger bread',
  'have dinner': 'dinner',
  seahorse: 'sea horse',
  beachball: 'beach ball',
  'beach ball': 'beach ball',
  'read stories': 'Read Stories',
  eyes: 'Eyes',
  cloud: 'Cloud',
  apartment: 'Apartment',
  'sand castle': 'Sand Castle',
}

export function normalizeAssetFileName(name) {
  const cleaned = String(name || '').trim()
  if (!cleaned) return ''
  const letters = cleaned.replace(/[^A-Za-zÀ-ỹ]/g, '')
  if (letters.length > 0 && letters === letters.toUpperCase()) return cleaned.toLowerCase()
  return cleaned
}

export function resolveAudioFileName(name) {
  const cleaned = String(name || '').trim()
  const lower = cleaned.toLowerCase()
  if (AUDIO_NAME_ALIASES[lower]) return AUDIO_NAME_ALIASES[lower]
  if (lower.endsWith(' zodiac')) return cleaned.slice(0, -' zodiac'.length).trim()
  return cleaned
}

export function buildIndex(dir) {
  const index = new Map()
  if (!fs.existsSync(dir)) return index
  for (const f of fs.readdirSync(dir)) {
    index.set(f.toLowerCase(), f)
    const base = f.replace(/\.(jpg|jpeg|png|webp|gif|mp3|wav|ogg)$/i, '')
    index.set(base.toLowerCase(), f)
  }
  return index
}

export function getImageCandidates(word, unitSlug) {
  const cleaned = normalizeAssetFileName(word)
  const lower = cleaned.toLowerCase()
  const candidates = new Set([cleaned, lower, `${cleaned} zodiac`, `${lower} zodiac`])
  if (unitSlug === CHRISTMAS_UNIT && ZODIAC_ANIMALS.has(lower)) candidates.add(`${lower} zodiac`)
  if (!/zodiac/i.test(cleaned)) {
    candidates.add(`${cleaned} zodiac`)
    candidates.add(`${lower} zodiac`)
  }
  return [...candidates]
}

export function resolveImageFile(word, unitSlug, imageValue, imageIndex) {
  const raw = String(imageValue || '').trim()
  if (raw.startsWith('/assets/images/')) {
    const name = decodeURIComponent(raw.replace('/assets/images/', '').split('?')[0])
    if (imageIndex.has(name.toLowerCase())) return imageIndex.get(name.toLowerCase())
    return null
  }
  for (const c of getImageCandidates(word, unitSlug)) {
    for (const ext of IMAGE_EXTS) {
      const key = `${c}${ext}`.toLowerCase()
      if (imageIndex.has(key)) return imageIndex.get(key)
    }
  }
  return null
}

export function resolveAudioFile(word, audioValue, audioIndex) {
  const raw = String(audioValue || '').trim()
  if (raw.startsWith('/assets/audios/')) {
    const name = decodeURIComponent(raw.replace('/assets/audios/', '').split('?')[0])
    if (audioIndex.has(name.toLowerCase())) return audioIndex.get(name.toLowerCase())
    return null
  }
  const names = [resolveAudioFileName(word), word.trim()]
  for (const name of names) {
    for (const ext of AUDIO_EXTS) {
      const key = `${name}${ext}`.toLowerCase()
      if (audioIndex.has(key)) return audioIndex.get(key)
    }
  }
  return null
}

export function isBrokenImageFile(fileName, imagesDir) {
  const full = path.join(imagesDir, fileName)
  if (!fs.existsSync(full)) return false
  const buf = fs.readFileSync(full).subarray(0, 256)
  const text = buf.toString('utf8').trimStart()
  if (text.startsWith('<!DOCTYPE') || text.startsWith('<html') || text.includes('drive.google.com')) {
    return true
  }
  const head = [...buf.subarray(0, 12)]
  return !(
    (head[0] === 0xff && head[1] === 0xd8)
    || (head[0] === 0x89 && head[1] === 0x50)
    || (head[0] === 0x47 && head[1] === 0x49)
    || (head[0] === 0x52 && head[1] === 0x49)
  )
}

export function validateVocabMedia(row, imageIndex, audioIndex, imagesDir) {
  const word = String(row.EnglishText || '').trim()
  const imgFile = resolveImageFile(word, row.UnitSlug, row.ImageValue, imageIndex)
  const audFile = resolveAudioFile(word, row.AudioValue, audioIndex)
  if (!imgFile) return { ok: false, reason: 'missing_image' }
  if (isBrokenImageFile(imgFile, imagesDir)) return { ok: false, reason: 'broken_image', file: imgFile }
  if (!audFile) return { ok: false, reason: 'missing_audio' }
  return { ok: true, imgFile, audFile }
}
