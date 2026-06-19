import dictionary from './data/vietnameseDictionary.json'

const NUMERIC_PLACEHOLDER = /^[\d\s.,]+$/
const LESSON_MARKER = /^\d+\.\d+$/

const STATIC_DICTIONARY = dictionary as Record<string, string>

export function normalizeEnglishKey(value: string): string {
  return String(value || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '')
}

export function isPlaceholderVietnamese(value: string | undefined | null): boolean {
  const text = String(value || '').trim()
  if (!text) return true
  if (NUMERIC_PLACEHOLDER.test(text)) return true
  if (LESSON_MARKER.test(text)) return true
  return false
}

export function resolveVietnameseText(
  english: string,
  current: string | undefined | null,
  lookup: Record<string, string> = {},
): string {
  if (!isPlaceholderVietnamese(current)) return String(current || '').trim()
  const key = normalizeEnglishKey(english)
  return lookup[key] || STATIC_DICTIONARY[key] || ''
}

export function buildVietnameseLookup(
  items: Array<{ en: string; vi: string }>,
): Record<string, string> {
  const lookup: Record<string, string> = { ...STATIC_DICTIONARY }
  items.forEach((item) => {
    if (isPlaceholderVietnamese(item.vi)) return
    const key = normalizeEnglishKey(item.en)
    if (!key) return
    lookup[key] = String(item.vi).trim()
  })
  return lookup
}
