import { useCallback, useEffect, useRef, useState } from 'react'
import {
  SPEECH_MAX_RECORD_MS,
  SPEECH_NETWORK_COOLDOWN_MS,
  SPEECH_RECORD_BUTTON_LOCK_MS,
  SPEECH_RESTART_COOLDOWN_MS,
  SPEECH_START_DELAY_MS,
  collectSpeechAlternatives,
  getSafariSpeechHint,
  getSpeechRecognitionCtor,
  isPronunciationSupported,
  isSafariBrowser,
  isSpeechRecognitionAvailable,
  mergeSpeechAlternatives,
  speechWordsLooselyMatch,
  type BrowserSpeechRecognitionErrorEvent,
  type BrowserSpeechRecognitionEvent,
  type MicPanelState,
  type SpeechRecognitionInstance,
} from './speechRecognition'

type UsePronunciationSpeechOptions = {
  targetText: string
  questionLocked: boolean
  onMatch: () => void
  successMessage: string
}

export function usePronunciationSpeech({
  targetText,
  questionLocked,
  onMatch,
  successMessage,
}: UsePronunciationSpeechOptions) {
  const [status, setStatus] = useState('🔊 Bấm Nghe → Ghi âm → đọc to từ tiếng Anh.')
  const [recording, setRecording] = useState(false)
  const [recordButtonLocked, setRecordButtonLocked] = useState(false)
  const [micPanelState, setMicPanelState] = useState<MicPanelState>('prompt')

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null)
  const collectedRef = useRef<string[]>([])
  const hadResponseRef = useRef(false)
  const evaluateOnEndRef = useRef(false)
  const matchStopPendingRef = useRef(false)
  const sessionClosingRef = useRef(false)
  const engineNeedsResetRef = useRef(false)
  const micReadyRef = useRef(false)
  const micPermissionRef = useRef<'unknown' | 'granted' | 'denied' | 'prompt' | 'unsupported'>('unknown')
  const cooldownRef = useRef(false)
  const activeRef = useRef(false)
  const startTimerRef = useRef<number | null>(null)
  const watchdogRef = useRef<number | null>(null)
  const cooldownTimerRef = useRef<number | null>(null)
  const lockTimerRef = useRef<number | null>(null)

  const targetTextRef = useRef(targetText)
  const questionLockedRef = useRef(questionLocked)
  const onMatchRef = useRef(onMatch)
  const successMessageRef = useRef(successMessage)

  targetTextRef.current = targetText
  questionLockedRef.current = questionLocked
  onMatchRef.current = onMatch
  successMessageRef.current = successMessage

  const clearStartTimer = useCallback(() => {
    if (startTimerRef.current !== null) {
      window.clearTimeout(startTimerRef.current)
      startTimerRef.current = null
    }
  }, [])

  const clearWatchdog = useCallback(() => {
    if (watchdogRef.current !== null) {
      window.clearTimeout(watchdogRef.current)
      watchdogRef.current = null
    }
  }, [])

  const lockRecordButton = useCallback((ms: number) => {
    const delayMs = Math.max(0, Number(ms) || SPEECH_RECORD_BUTTON_LOCK_MS)
    if (lockTimerRef.current !== null) {
      window.clearTimeout(lockTimerRef.current)
      lockTimerRef.current = null
    }
    setRecordButtonLocked(true)
    lockTimerRef.current = window.setTimeout(() => {
      lockTimerRef.current = null
      if (!activeRef.current && !questionLockedRef.current) {
        setRecordButtonLocked(false)
      }
    }, delayMs)
  }, [])

  const scheduleCooldown = useCallback((delayMs = SPEECH_RESTART_COOLDOWN_MS) => {
    const cooldownMs = Math.max(0, Number(delayMs) || SPEECH_RESTART_COOLDOWN_MS)
    cooldownRef.current = true
    lockRecordButton(cooldownMs)

    if (cooldownTimerRef.current !== null) {
      window.clearTimeout(cooldownTimerRef.current)
      cooldownTimerRef.current = null
    }

    cooldownTimerRef.current = window.setTimeout(() => {
      cooldownTimerRef.current = null
      cooldownRef.current = false
      if (!questionLockedRef.current) {
        setRecordButtonLocked(false)
      }
    }, cooldownMs)
  }, [lockRecordButton])

  const resetRecordingUi = useCallback(() => {
    activeRef.current = false
    setRecording(false)
    clearWatchdog()
  }, [clearWatchdog])

  const markEngineForReset = useCallback(() => {
    engineNeedsResetRef.current = true
  }, [])

  const releaseEngine = useCallback((forceAbort: boolean) => {
    clearStartTimer()
    const instance = recognitionRef.current
    if (!instance) return

    if (forceAbort) {
      try {
        instance.abort()
      } catch {
        // ignore
      }
      recognitionRef.current = null
      markEngineForReset()
    } else if (activeRef.current) {
      sessionClosingRef.current = true
      try {
        instance.stop()
      } catch {
        try {
          instance.abort()
        } catch {
          // ignore
        }
        recognitionRef.current = null
        markEngineForReset()
        sessionClosingRef.current = false
      }
    }
  }, [clearStartTimer, markEngineForReset])

  const evaluateTranscripts = useCallback((alternatives: string[], target: string) => {
    const uniqueAlternatives = [...new Set((alternatives || []).filter(Boolean))]
    let matched = false

    for (let i = 0; i < uniqueAlternatives.length; i++) {
      if (speechWordsLooselyMatch(uniqueAlternatives[i], target)) {
        matched = true
        break
      }
    }

    if (!uniqueAlternatives.length) {
      setStatus('⚠️ Chưa nghe rõ từ nào. Bấm Ghi âm và đọc to lại nhé!')
      return
    }

    if (matched) {
      setStatus(`🎉 Bé phát âm rất tốt! ${successMessageRef.current}`)
      onMatchRef.current()
      return
    }

    const displayTarget = String(target || '').trim() || 'từ mẫu'
    setStatus(`👂 Chưa khớp với "${displayTarget}" — thử đọc lại nhé!`)
    scheduleCooldown()
  }, [scheduleCooldown])

  const abortRecognition = useCallback((silent: boolean) => {
    clearStartTimer()

    if (cooldownTimerRef.current !== null) {
      window.clearTimeout(cooldownTimerRef.current)
      cooldownTimerRef.current = null
    }

    if (lockTimerRef.current !== null) {
      window.clearTimeout(lockTimerRef.current)
      lockTimerRef.current = null
    }

    cooldownRef.current = false
    evaluateOnEndRef.current = false
    matchStopPendingRef.current = false
    sessionClosingRef.current = false
    collectedRef.current = []
    hadResponseRef.current = false
    releaseEngine(true)
    resetRecordingUi()

    if (silent) {
      scheduleCooldown()
    } else {
      setRecordButtonLocked(false)
    }
  }, [clearStartTimer, releaseEngine, resetRecordingUi, scheduleCooldown])

  const stopRecording = useCallback((silentAbort: boolean) => {
    clearWatchdog()

    if (recognitionRef.current && activeRef.current) {
      if (silentAbort) {
        abortRecognition(true)
        return
      }

      evaluateOnEndRef.current = true
      sessionClosingRef.current = true
      try {
        recognitionRef.current.stop()
      } catch {
        evaluateOnEndRef.current = false
        sessionClosingRef.current = false
        try {
          recognitionRef.current?.abort()
        } catch {
          // ignore
        }
        recognitionRef.current = null
        markEngineForReset()
        resetRecordingUi()
        scheduleCooldown()
      }
      return
    }

    evaluateOnEndRef.current = false
    resetRecordingUi()
  }, [abortRecognition, clearWatchdog, markEngineForReset, resetRecordingUi, scheduleCooldown])

  const tryAutoStopOnMatch = useCallback((rec: SpeechRecognitionInstance, event: BrowserSpeechRecognitionEvent) => {
    if (matchStopPendingRef.current || recognitionRef.current !== rec || questionLockedRef.current || !activeRef.current) {
      return false
    }

    const target = targetTextRef.current.trim()
    if (!target) return false

    const collected = collectSpeechAlternatives(event)
    if (!collected.length) return false

    hadResponseRef.current = true
    collectedRef.current = mergeSpeechAlternatives(collectedRef.current, collected)

    for (let i = 0; i < collected.length; i++) {
      if (speechWordsLooselyMatch(collected[i], target)) {
        matchStopPendingRef.current = true
        setStatus('✅ Nghe đúng rồi — đang kiểm tra...')
        stopRecording(false)
        return true
      }
    }

    return false
  }, [stopRecording])

  const buildEngine = useCallback(() => {
    const SpeechRecognitionCtor = getSpeechRecognitionCtor()
    if (!SpeechRecognitionCtor) return null

    const rec = new SpeechRecognitionCtor()
    rec.continuous = isSafariBrowser()
    rec.lang = 'en-US'
    rec.interimResults = true
    rec.maxAlternatives = 1

    rec.onstart = () => {
      if (recognitionRef.current !== rec) return

      if (questionLockedRef.current) {
        sessionClosingRef.current = false
        try {
          rec.abort()
        } catch {
          // ignore
        }
        return
      }

      activeRef.current = true
      setRecording(true)
      sessionClosingRef.current = false
      hadResponseRef.current = false
      collectedRef.current = []
      matchStopPendingRef.current = false
      setStatus('🔴 Đang ghi âm... Đọc to từ tiếng Anh trong 4 giây.')
    }

    rec.onspeechstart = () => {
      if (recognitionRef.current !== rec || questionLockedRef.current) return
      hadResponseRef.current = true
      setStatus('👂 Đã nghe thấy giọng nói — tiếp tục đọc nhé!')
    }

    rec.onresult = (event: BrowserSpeechRecognitionEvent) => {
      if (recognitionRef.current !== rec || questionLockedRef.current) return
      if (tryAutoStopOnMatch(rec, event)) return

      const collected = collectSpeechAlternatives(event)
      if (collected.length) {
        hadResponseRef.current = true
        collectedRef.current = mergeSpeechAlternatives(collectedRef.current, collected)
      }
    }

    rec.onnomatch = () => {
      if (recognitionRef.current !== rec || questionLockedRef.current) return
      hadResponseRef.current = true
    }

    rec.onerror = (event: BrowserSpeechRecognitionErrorEvent) => {
      if (event.error === 'aborted') return
      if (recognitionRef.current !== rec) return

      if (event.error === 'network') {
        evaluateOnEndRef.current = false
        matchStopPendingRef.current = false
        sessionClosingRef.current = false
        try {
          rec.abort()
        } catch {
          // ignore
        }
        recognitionRef.current = null
        markEngineForReset()
        resetRecordingUi()
        scheduleCooldown(SPEECH_NETWORK_COOLDOWN_MS)
        setStatus('⚠️ Mạng nhận dạng giọng nói tạm lỗi. Đợi 5 giây rồi bấm Ghi âm lại (thử tắt VPN).')
        return
      }

      hadResponseRef.current = event.error !== 'no-speech'
      evaluateOnEndRef.current = false
      sessionClosingRef.current = false
      try {
        rec.abort()
      } catch {
        // ignore
      }
      recognitionRef.current = null
      markEngineForReset()
      resetRecordingUi()
      scheduleCooldown()

      if (event.error === 'not-allowed') {
        micReadyRef.current = false
        micPermissionRef.current = 'denied'
        setMicPanelState('denied')
        setStatus('⚠️ Hãy cho phép quyền micro rồi bấm Ghi âm lại nhé!')
      } else if (event.error === 'no-speech') {
        setStatus('⚠️ Chưa nghe thấy tiếng nào. Bấm Ghi âm và đọc to lại nhé!')
      } else if (event.error === 'service-not-allowed') {
        setStatus('⚠️ Trình duyệt chưa bật nhận diện giọng nói. Hãy dùng Chrome hoặc Edge.')
      } else {
        setStatus(`⚠️ Không ghi âm được (${event.error}). Bấm Ghi âm thử lại nhé!`)
      }
    }

    rec.onend = () => {
      if (recognitionRef.current !== rec) return

      const target = targetTextRef.current.trim()
      const alternatives = collectedRef.current.slice()
      const hadResponse = hadResponseRef.current
      const shouldEvaluate = evaluateOnEndRef.current
      recognitionRef.current = null
      engineNeedsResetRef.current = false
      evaluateOnEndRef.current = false
      sessionClosingRef.current = false
      resetRecordingUi()

      if (questionLockedRef.current || !shouldEvaluate) {
        if (!questionLockedRef.current) {
          scheduleCooldown()
        }
        return
      }

      if (!hadResponse || !alternatives.length) {
        scheduleCooldown()
        const safariHint = isSafariBrowser() ? ` ${getSafariSpeechHint()}` : ''
        setStatus(`⚠️ Chưa nghe rõ từ nào. Bấm Ghi âm và đọc to lại nhé!${safariHint}`)
        return
      }

      evaluateTranscripts(alternatives, target)
    }

    return rec
  }, [evaluateTranscripts, markEngineForReset, resetRecordingUi, scheduleCooldown, tryAutoStopOnMatch])

  const getEngine = useCallback(() => {
    if (recognitionRef.current && !engineNeedsResetRef.current) {
      return recognitionRef.current
    }

    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort()
      } catch {
        // ignore
      }
      recognitionRef.current = null
    }

    recognitionRef.current = buildEngine()
    engineNeedsResetRef.current = false
    return recognitionRef.current
  }, [buildEngine])

  const beginSession = useCallback(() => {
    if (questionLockedRef.current || cooldownRef.current || recordButtonLocked) return
    if (activeRef.current || sessionClosingRef.current || startTimerRef.current !== null) return

    try {
      const rec = getEngine()
      if (!rec) return

      hadResponseRef.current = false
      collectedRef.current = []
      evaluateOnEndRef.current = false
      matchStopPendingRef.current = false
      sessionClosingRef.current = true
      rec.start()

      clearWatchdog()
      watchdogRef.current = window.setTimeout(() => {
        if (!activeRef.current) return
        setStatus('⏱ Hết 4 giây — đang kiểm tra...')
        stopRecording(false)
      }, SPEECH_MAX_RECORD_MS)
    } catch (error) {
      sessionClosingRef.current = false
      markEngineForReset()
      recognitionRef.current = null
      resetRecordingUi()
      scheduleCooldown()

      if (error instanceof Error && error.name === 'InvalidStateError') {
        setStatus('⚠️ Micro đang reset... thử lại sau 2 giây.')
        return
      }

      setStatus('Không thể bật ghi âm. Hãy thử lại sau.')
    }
  }, [clearWatchdog, getEngine, markEngineForReset, recordButtonLocked, resetRecordingUi, scheduleCooldown, stopRecording])

  const refreshMicState = useCallback(async (requestAccess: boolean) => {
    if (!isPronunciationSupported()) {
      micReadyRef.current = false
      micPermissionRef.current = 'unsupported'
      setMicPanelState('unsupported')
      setStatus(
        isSpeechRecognitionAvailable()
          ? 'Trình duyệt chưa hỗ trợ micro. Hãy dùng Chrome hoặc Edge.'
          : 'Trình duyệt chưa hỗ trợ nhận diện phát âm. Hãy dùng Chrome hoặc Edge.',
      )
      return false
    }

    if (!navigator.mediaDevices?.getUserMedia) {
      micReadyRef.current = false
      micPermissionRef.current = 'unsupported'
      setMicPanelState('unsupported')
      setStatus('Trình duyệt chưa hỗ trợ kiểm tra micro. Hãy dùng Chrome hoặc Edge.')
      return false
    }

    if (micReadyRef.current) {
      setMicPanelState('granted')
      setStatus('✅ Micro sẵn sàng. Bấm Nghe → Ghi âm → đọc to.')
      return true
    }

    if (!requestAccess && navigator.permissions?.query) {
      try {
        const permissionStatus = await navigator.permissions.query({ name: 'microphone' as PermissionName })
        micPermissionRef.current = (permissionStatus.state || 'prompt') as typeof micPermissionRef.current
        micReadyRef.current = micPermissionRef.current === 'granted'

        permissionStatus.onchange = () => {
          void refreshMicState(false)
        }

        if (micReadyRef.current) {
          setMicPanelState('granted')
          setStatus('✅ Micro sẵn sàng. Bấm Nghe → Ghi âm → đọc to.')
          return true
        }

        micPermissionRef.current = micPermissionRef.current || 'prompt'
        setMicPanelState('prompt')
        return false
      } catch {
        micPermissionRef.current = 'prompt'
        micReadyRef.current = false
        setMicPanelState('prompt')
        return false
      }
    }

    setMicPanelState('checking')
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      stream.getTracks().forEach((track) => track.stop())
      micReadyRef.current = true
      micPermissionRef.current = 'granted'
      setMicPanelState('granted')
      setStatus('✅ Micro sẵn sàng. Bấm Nghe → Ghi âm → đọc to.')
      return true
    } catch (error) {
      micReadyRef.current = false
      const err = error as Error
      if (err?.name === 'NotAllowedError' || err?.name === 'PermissionDeniedError' || err?.name === 'SecurityError') {
        micPermissionRef.current = 'denied'
        setMicPanelState('denied')
        setStatus('⚠️ Chưa cấp quyền micro. Bấm Cấp quyền micro để mở quyền.')
      } else if (err?.name === 'NotFoundError' || err?.name === 'DevicesNotFoundError') {
        micPermissionRef.current = 'prompt'
        setMicPanelState('prompt')
        setStatus('⚠️ Không tìm thấy micro trên thiết bị này.')
      } else {
        micPermissionRef.current = 'prompt'
        setMicPanelState('prompt')
        setStatus('⚠️ Không thể mở micro. Hãy thử lại sau khi kiểm tra quyền và thiết bị.')
      }
      return false
    }
  }, [])

  const startRecording = useCallback(async () => {
    if (questionLockedRef.current) return
    if (cooldownRef.current) {
      setStatus('⏳ Micro đang reset... thử lại sau vài giây.')
      return
    }
    if (recordButtonLocked || activeRef.current || sessionClosingRef.current || startTimerRef.current !== null) return

    if (!isSpeechRecognitionAvailable()) {
      setMicPanelState('unsupported')
      setStatus('Trình duyệt chưa hỗ trợ nhận diện phát âm. Hãy dùng Chrome hoặc Edge.')
      return
    }

    if (!micReadyRef.current) {
      const micReady = await refreshMicState(true)
      if (!micReady) {
        setStatus('⚠️ Cần cấp quyền micro trước khi ghi âm.')
        return
      }
    }

    clearStartTimer()
    setStatus('🎙 Đang mở micro...')
    startTimerRef.current = window.setTimeout(() => {
      startTimerRef.current = null
      beginSession()
    }, SPEECH_START_DELAY_MS)
  }, [beginSession, clearStartTimer, recordButtonLocked, refreshMicState])

  const resetForQuestion = useCallback(() => {
    clearWatchdog()
    clearStartTimer()
    releaseEngine(true)
    evaluateOnEndRef.current = false
    collectedRef.current = []
    hadResponseRef.current = false
    sessionClosingRef.current = false
    matchStopPendingRef.current = false
    cooldownRef.current = false

    if (cooldownTimerRef.current !== null) {
      window.clearTimeout(cooldownTimerRef.current)
      cooldownTimerRef.current = null
    }
    if (lockTimerRef.current !== null) {
      window.clearTimeout(lockTimerRef.current)
      lockTimerRef.current = null
    }

    setRecordButtonLocked(false)
    resetRecordingUi()
    setStatus('🔊 Bấm Nghe → Ghi âm → đọc to từ tiếng Anh.')
  }, [clearStartTimer, clearWatchdog, releaseEngine, resetRecordingUi])

  useEffect(() => {
    void refreshMicState(false)
  }, [refreshMicState])

  useEffect(() => () => {
    abortRecognition(true)
  }, [abortRecognition])

  const recordDisabled = !isPronunciationSupported()
    || recordButtonLocked
    || questionLocked
    || cooldownRef.current

  return {
    status,
    recording,
    recordButtonLocked,
    recordDisabled,
    micPanelState,
    startRecording,
    requestMicAccess: () => refreshMicState(true),
    abortRecognition,
    resetForQuestion,
  }
}
