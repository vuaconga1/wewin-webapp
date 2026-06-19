import { publicPath } from './publicPath'

export const LOCAL_GAME_BACKGROUND = publicPath('/assets/images/Background.jpg')
export const LOGO_URL = publicPath('/assets/images/anschool.jpg')

export const LOCAL_MENU_BACKGROUND_MAP: Record<string, string> = {
  catching: publicPath('/assets/images/catching.jpg'),
  listenchoose: publicPath('/assets/images/ListenAndChoose.jpg'),
  lookchoose: publicPath('/assets/images/LookAndChoose.jpg'),
  pronunciation: publicPath('/assets/images/pronunciation.jpg'),
}

function isDriveUrl(url: string) {
  return /drive\.google\.com/i.test(url)
}

function normalizeAssetFileName(name: string) {
  const cleaned = String(name || '').trim()
  if (!cleaned) return ''
  const letters = cleaned.replace(/[^A-Za-zÀ-ỹ]/g, '')
  if (letters.length > 0 && letters === letters.toUpperCase()) return cleaned.toLowerCase()
  return cleaned
}

function resolveAudioFileName(name: string) {
  const cleaned = String(name || '').trim()
  if (!cleaned) return ''

  const aliases: Record<string, string> = {
    labybug: 'ladybug',
    caterpilla: 'caterpillar',
    televison: 'television',
  }

  const lower = cleaned.toLowerCase()
  if (aliases[lower]) return aliases[lower]
  if (lower.endsWith(' zodiac')) return cleaned.slice(0, -' zodiac'.length).trim()
  return cleaned
}

function localAssetPath(folder: 'images' | 'audios', name: string) {
  const cleaned = normalizeAssetFileName(folder === 'audios' ? resolveAudioFileName(name) : name)
  if (!cleaned) return ''
  const ext = folder === 'audios' ? '.mp3' : '.jpg'
  return publicPath(`/assets/${folder}/${encodeURIComponent(cleaned)}${ext}`)
}

export function resolveGameBackground(url?: string) {
  const value = String(url || '').trim()
  if (value && !isDriveUrl(value)) return value
  return LOCAL_GAME_BACKGROUND
}

export function resolveImageUrl(url: string, fallbackName?: string) {
  const raw = String(url || '').trim()
  const name = String(fallbackName || '').trim()

  if (raw && raw.startsWith('/assets/')) return publicPath(raw)
  if (raw && raw.startsWith('/') && !raw.startsWith('//')) return raw
  if (raw && raw.startsWith('http') && !isDriveUrl(raw)) return raw

  for (const candidate of getImageNameCandidates(name)) {
    const local = localAssetPath('images', candidate)
    if (local) return local
  }

  if (raw && !raw.startsWith('http')) {
    const local = localAssetPath('images', raw)
    if (local) return local
  }

  return name ? localAssetPath('images', name) : raw
}

function getImageNameCandidates(name: string): string[] {
  const cleaned = String(name || '').trim()
  if (!cleaned) return []

  const candidates = [cleaned]
  if (!/zodiac/i.test(cleaned)) {
    candidates.push(`${cleaned} zodiac`)
  }

  return candidates
}

export function resolveAudioUrl(url: string, fallbackName?: string) {
  const raw = String(url || '').trim()
  const name = resolveAudioFileName(String(fallbackName || '').trim())
  const resolvedRaw = resolveAudioFileName(raw)

  if (name) {
    const local = localAssetPath('audios', name)
    if (local) return local
  }

  if (resolvedRaw && resolvedRaw.startsWith('/assets/')) return publicPath(resolvedRaw)
  if (raw && raw.startsWith('/assets/')) return publicPath(raw)
  if (raw && raw.startsWith('/') && !raw.startsWith('//')) return raw
  if (raw && raw.startsWith('http') && !isDriveUrl(raw)) return raw
  if (resolvedRaw && !resolvedRaw.startsWith('http')) {
    const local = localAssetPath('audios', resolvedRaw)
    if (local) return local
  }
  if (raw && !raw.startsWith('http')) {
    const local = localAssetPath('audios', raw)
    if (local) return local
  }

  return name ? localAssetPath('audios', name) : raw
}

export function mergeMenuBackgroundMap(fromApi?: Record<string, string>) {
  const merged = { ...LOCAL_MENU_BACKGROUND_MAP }
  if (!fromApi) return merged

  Object.entries(fromApi).forEach(([key, value]) => {
    const next = String(value || '').trim()
    if (next && !isDriveUrl(next)) merged[key] = next
  })
  return merged
}

export function applyMenuCardBackgrounds(menuBackgroundMap?: Record<string, string>) {
  const fallbackBackgrounds: Record<string, string> = {
    catching: 'linear-gradient(135deg, rgba(255,251,235,0.98), rgba(254,243,199,0.98))',
    listenchoose: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(219,234,254,0.98))',
    lookchoose: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(221,214,254,0.98))',
    pronunciation: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(220,252,231,0.98))',
  }

  const map = mergeMenuBackgroundMap(menuBackgroundMap)

  document.querySelectorAll<HTMLElement>('.menu-game-card').forEach((card) => {
    const key = String(card.dataset.menuKey || '').toLowerCase()
    const matchedImage = map[key]
    if (matchedImage) {
      card.style.backgroundImage = `url("${matchedImage}")`
      card.style.backgroundSize = '100% 100%'
      card.style.backgroundPosition = 'center'
      card.style.backgroundRepeat = 'no-repeat'
      card.style.backgroundColor = 'transparent'
    } else {
      card.style.backgroundImage = ''
      card.style.background = fallbackBackgrounds[key] || 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(226,232,240,0.98))'
      card.style.backgroundSize = 'cover'
      card.style.backgroundPosition = 'center'
    }
  })
}
