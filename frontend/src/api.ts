export type Level = {
  key: string
  title: string
  ageLabel: string
  label: string
}

export type Week = {
  key: string
  label: string
}

export type Unit = {
  order: number
  name: string
  slug: string
  icon: string
  levels: string[]
}

export type PronunciationQuestion = {
  image: string
  audio: string
  en: string
  vi: string
}

export type ListenChooseQuestion = {
  audio: string
  correct: string
  options: string[]
  text: string
}

export type LookChooseQuestion = {
  image: string
  correct: string
  options: string[]
  audio: string
}

export type BootstrapResponse = {
  units: Unit[]
  levels: Level[]
  weeks: Week[]
  gameBgImageUrl?: string
  gameMenuBackgroundMap?: Record<string, string>
}

export type SpeechAssessment = {
  matched: boolean
  transcript: string
  pronunciationScore: number
  accuracyScore: number
  threshold: number
  feedback: string
}

export type GameAllResponse = {
  listenchoose: ListenChooseQuestion[]
  lookchoose: LookChooseQuestion[]
  pronunciation: PronunciationQuestion[]
}

type ApiEnvelope<T> = {
  success: boolean
  message?: string
  data?: T
  units?: Unit[]
  levels?: Level[]
  weeks?: Week[]
  gameBgImageUrl?: string
  gameMenuBackgroundMap?: Record<string, string>
}

import {
  mergeMenuBackgroundMap,
  resolveAudioUrl,
  resolveGameBackground,
  resolveImageUrl,
} from './assetsConfig'
import { resolveVietnameseText } from './vietnameseText'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5222/api'

async function getJson<T>(path: string, params: Record<string, string | undefined> = {}): Promise<T> {
  const url = new URL(`${API_BASE_URL}${path}`)
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value)
  })

  const response = await fetch(url)
  const payload = (await response.json()) as ApiEnvelope<T>

  if (!response.ok || !payload.success) {
    throw new Error(payload.message || `API request failed: ${response.status}`)
  }

  if (payload.data !== undefined) return payload.data
  return payload as T
}

export async function getUnits(params: { level?: string; game: string }): Promise<Unit[]> {
  const payload = await getJson<Unit[] | { units?: Unit[] }>('/units', {
    level: params.level,
    game: params.game,
  })
  if (Array.isArray(payload)) return payload
  return payload.units || []
}

export async function getBootstrap(game: string): Promise<BootstrapResponse> {
  const payload = await getJson<BootstrapResponse>('/app/bootstrap', { game })

  return {
    units: payload.units || [],
    levels: payload.levels || [],
    weeks: payload.weeks || [],
    gameBgImageUrl: resolveGameBackground(payload.gameBgImageUrl),
    gameMenuBackgroundMap: mergeMenuBackgroundMap(payload.gameMenuBackgroundMap),
  }
}

function normalizeGameData(data: GameAllResponse): GameAllResponse {
  return {
    listenchoose: (data.listenchoose || []).map((item) => ({
      ...item,
      audio: resolveAudioUrl(item.audio, item.text),
      correct: resolveImageUrl(item.correct, item.text),
      options: item.options.map((option) => resolveImageUrl(option)),
    })),
    lookchoose: (data.lookchoose || []).map((item) => ({
      ...item,
      image: resolveImageUrl(item.image, item.correct),
      audio: resolveAudioUrl(item.audio, item.correct),
    })),
    pronunciation: (data.pronunciation || []).map((item) => ({
      ...item,
      image: resolveImageUrl(item.image, item.en),
      audio: resolveAudioUrl(item.audio, item.en),
      vi: resolveVietnameseText(item.en, item.vi),
    })),
  }
}

export async function getAllGameData(params: {
  slug: string
  level: string
  week: string
  game: string
}): Promise<GameAllResponse> {
  const data = await getJson<GameAllResponse>('/game/all', params)
  return normalizeGameData(data)
}

export async function getPronunciationQuestions(params: {
  slug: string
  level: string
  week: string
  game: string
}): Promise<PronunciationQuestion[]> {
  const data = await getJson<PronunciationQuestion[]>('/game/pronunciation', params)
  return normalizeGameData({ listenchoose: [], lookchoose: [], pronunciation: data }).pronunciation
}

export async function assessPronunciation(audio: Blob, request: {
  targetText: string
  unitSlug: string
  levelKey: string
  weekKey: string
  gameSessionId?: number
}): Promise<SpeechAssessment> {
  const form = new FormData()
  form.append('targetText', request.targetText)
  form.append('unitSlug', request.unitSlug)
  form.append('levelKey', request.levelKey)
  form.append('weekKey', request.weekKey)
  if (request.gameSessionId) form.append('gameSessionId', String(request.gameSessionId))
  form.append('audio', audio, `speech.${getAudioExtension(audio.type)}`)

  const response = await fetch(`${API_BASE_URL}/speech/pronunciation`, {
    method: 'POST',
    body: form,
  })
  const payload = (await response.json()) as ApiEnvelope<SpeechAssessment>

  if (!response.ok || !payload.success || !payload.data) {
    throw new Error(payload.message || 'Không chấm được phát âm.')
  }

  return payload.data
}

function getAudioExtension(mimeType: string) {
  if (mimeType.includes('wav')) return 'wav'
  if (mimeType.includes('ogg')) return 'ogg'
  if (mimeType.includes('webm')) return 'webm'
  return 'webm'
}
