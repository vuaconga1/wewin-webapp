export const SPEECH_MAX_RECORD_MS = 4000
export const SPEECH_START_DELAY_MS = 450
export const SPEECH_RESTART_COOLDOWN_MS = 2500
export const SPEECH_NETWORK_COOLDOWN_MS = 5000
export const SPEECH_RECORD_BUTTON_LOCK_MS = 1500

export type MicPanelState = 'hidden' | 'prompt' | 'granted' | 'denied' | 'unsupported' | 'checking'

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor
    webkitSpeechRecognition?: SpeechRecognitionConstructor
  }
}

type SpeechRecognitionConstructor = new () => BrowserSpeechRecognition

interface BrowserSpeechRecognition extends EventTarget {
  continuous: boolean
  lang: string
  interimResults: boolean
  maxAlternatives: number
  onstart: ((this: BrowserSpeechRecognition, ev: Event) => void) | null
  onspeechstart: ((this: BrowserSpeechRecognition, ev: Event) => void) | null
  onresult: ((this: BrowserSpeechRecognition, ev: BrowserSpeechRecognitionEvent) => void) | null
  onnomatch: ((this: BrowserSpeechRecognition, ev: Event) => void) | null
  onerror: ((this: BrowserSpeechRecognition, ev: BrowserSpeechRecognitionErrorEvent) => void) | null
  onend: ((this: BrowserSpeechRecognition, ev: Event) => void) | null
  start(): void
  stop(): void
  abort(): void
}

export type BrowserSpeechRecognitionErrorEvent = {
  error: string
}

export type BrowserSpeechRecognitionEvent = Event & {
  results: BrowserSpeechRecognitionResultList
}

type BrowserSpeechRecognitionResultList = {
  readonly length: number
  [index: number]: BrowserSpeechRecognitionResult
}

interface BrowserSpeechRecognitionResult {
  readonly length: number
  [index: number]: BrowserSpeechRecognitionAlternative
  isFinal: boolean
}

interface BrowserSpeechRecognitionAlternative {
  transcript: string
  confidence: number
}

export type SpeechRecognitionInstance = BrowserSpeechRecognition

export function getSpeechRecognitionCtor(): SpeechRecognitionConstructor | null {
  if (typeof window === 'undefined') return null
  return window.SpeechRecognition || window.webkitSpeechRecognition || null
}

export function isSpeechRecognitionAvailable(): boolean {
  return !!getSpeechRecognitionCtor()
}

export function isPronunciationSupported(): boolean {
  return isSpeechRecognitionAvailable()
    && !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
}

export function isSafariBrowser(): boolean {
  const ua = navigator.userAgent || ''
  return /Safari/i.test(ua) && !/Chrome|CriOS|Chromium|Edg|OPR|FxiOS/i.test(ua)
}

export function getSafariSpeechHint(): string {
  return 'Vào Cài đặt → Safari → Nhận dạng giọng nói và bật quyền cho trang này.'
}

export function normalizeSpeechText(value: string): string {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:'"]/g, '')
    .replace(/\s+/g, ' ')
}

export function levenshteinDistance(left: string, right: string): number {
  if (left === right) return 0
  if (!left.length) return right.length
  if (!right.length) return left.length

  const matrix: number[][] = []
  for (let i = 0; i <= right.length; i++) matrix[i] = [i]
  for (let j = 0; j <= left.length; j++) matrix[0][j] = j

  for (let i = 1; i <= right.length; i++) {
    for (let j = 1; j <= left.length; j++) {
      const cost = right.charAt(i - 1) === left.charAt(j - 1) ? 0 : 1
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      )
    }
  }

  return matrix[right.length][left.length]
}

function singleSpeechWordMatch(heardWord: string, targetWord: string): boolean {
  if (!heardWord || !targetWord) return false
  if (heardWord === targetWord) return true

  const distance = levenshteinDistance(heardWord, targetWord)
  if (distance > 1) return false
  if (heardWord.length < targetWord.length) return false

  if (heardWord.length > targetWord.length) {
    return heardWord.indexOf(targetWord) === 0 && distance <= 1
  }

  return distance <= 1
}

export function speechWordsLooselyMatch(transcript: string, target: string): boolean {
  const cleanTarget = normalizeSpeechText(target)
  const cleanTranscript = normalizeSpeechText(transcript)

  if (!cleanTarget || !cleanTranscript) return false
  if (cleanTranscript === cleanTarget) return true

  const targetWords = cleanTarget.split(' ').filter(Boolean)
  const heardWords = cleanTranscript.split(' ').filter(Boolean)

  if (targetWords.length === 1) {
    const targetWord = targetWords[0]
    if (cleanTranscript.includes(cleanTarget)) return true
    for (let i = 0; i < heardWords.length; i++) {
      if (singleSpeechWordMatch(heardWords[i], targetWord)) return true
    }
    return false
  }

  if (cleanTranscript.includes(cleanTarget)) return true

  let matchedWords = 0
  targetWords.forEach((targetWord) => {
    const found = heardWords.some((heardWord) => singleSpeechWordMatch(heardWord, targetWord))
    if (found) matchedWords += 1
  })

  if (matchedWords / targetWords.length >= 0.75) return true

  const compactTarget = cleanTarget.replace(/\s+/g, '')
  const compactTranscript = cleanTranscript.replace(/\s+/g, '')
  if (compactTranscript.length < compactTarget.length) return false

  const maxLength = Math.max(compactTarget.length, compactTranscript.length, 1)
  const distance = levenshteinDistance(compactTranscript, compactTarget)
  const similarity = 1 - (distance / maxLength)

  return similarity >= 0.82
}

export function collectSpeechAlternatives(event: BrowserSpeechRecognitionEvent): string[] {
  const collected: string[] = []
  const results = event?.results
  if (!results) return collected

  for (let i = 0; i < results.length; i++) {
    for (let j = 0; j < results[i].length; j++) {
      const transcript = String(results[i][j].transcript || '').trim()
      if (transcript) collected.push(transcript)
    }
  }

  return collected
}

export function mergeSpeechAlternatives(existing: string[], incoming: string[]): string[] {
  return [...new Set((existing || []).concat(incoming || []).filter(Boolean))]
}

export function getMicPanelCopy(state: MicPanelState, detailText?: string) {
  if (state === 'granted' || state === 'hidden') {
    return { title: '', detail: '', buttonText: 'Cấp quyền micro', buttonDisabled: false }
  }

  if (state === 'denied') {
    return {
      title: 'Quyền micro đang bị chặn',
      detail: detailText || 'Hãy mở quyền micro trong biểu tượng ổ khóa của trình duyệt, rồi bấm Cấp quyền micro lại.',
      buttonText: 'Mở quyền micro',
      buttonDisabled: false,
    }
  }

  if (state === 'unsupported') {
    return {
      title: 'Trình duyệt chưa hỗ trợ game phát âm',
      detail: detailText || 'Cần Chrome hoặc Edge để nhận diện phát âm. Safari có thể dùng nhưng cần bật Nhận dạng giọng nói.',
      buttonText: 'Không hỗ trợ',
      buttonDisabled: true,
    }
  }

  if (state === 'checking') {
    return {
      title: 'Đang kiểm tra micro...',
      detail: detailText || 'Đợi một chút để trình duyệt xác nhận quyền micro.',
      buttonText: 'Đang kiểm tra...',
      buttonDisabled: true,
    }
  }

  return {
    title: 'Cần quyền micro để chơi game phát âm',
    detail: detailText || 'Bấm Cấp quyền micro để ghi âm và kiểm tra phát âm từ tiếng Anh.',
    buttonText: 'Cấp quyền micro',
    buttonDisabled: false,
  }
}
