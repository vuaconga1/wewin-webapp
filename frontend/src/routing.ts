import type { Unit } from './api'
import type { GameType } from './legacyUi'

export type AppRoute = 'chooseGame' | 'chooseWeek' | 'chooseLevel' | 'home' | 'play' | 'summary'

export type AppLocationState = {
  route: AppRoute
  game: string
  week: string
  level: string
  unitParam: string
  activeGame: GameType
}

const PAGE_PATHS: Record<AppRoute, string> = {
  chooseGame: '/choosegame.html',
  chooseWeek: '/chooseweek.html',
  chooseLevel: '/chooselevel.html',
  home: '/home.html',
  play: '/home.html',
  summary: '/home.html',
}

export function parseAppLocation(): AppLocationState {
  const params = new URLSearchParams(window.location.search)
  const file = window.location.pathname.split('/').pop()?.toLowerCase() || 'index.html'
  const play = params.get('play') as GameType | null
  const view = params.get('view')

  let route: AppRoute = 'chooseGame'
  if (file === 'home.html') {
    if (view === 'summary') route = 'summary'
    else if (play) route = 'play'
    else route = 'home'
  } else if (file === 'chooseweek.html') {
    route = 'chooseWeek'
  } else if (file === 'chooselevel.html') {
    route = 'chooseLevel'
  } else if (file === 'choosegame.html' || file === 'index.html' || file === '') {
    route = 'chooseGame'
  }

  return {
    route,
    game: params.get('game') || 'kindergarten',
    week: params.get('week') || '1',
    level: params.get('level') || 'pre11',
    unitParam: params.get('unit') || '',
    activeGame: (play || 'listenchoose') as GameType,
  }
}

export function resolveUnitSlug(units: Unit[], unitParam: string, currentSlug = ''): string {
  if (!units.length) return currentSlug

  const normalizedParam = String(unitParam || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '')
  if (normalizedParam) {
    const matched = units.find((unit, index) => {
      if (String(unit.order) === unitParam) return true
      if (String(index + 1) === unitParam) return true
      return unit.slug.toLowerCase().replace(/[^a-z0-9]/g, '') === normalizedParam
    })
    if (matched) return matched.slug
  }

  if (currentSlug && units.some((unit) => unit.slug === currentSlug)) return currentSlug
  return units[0]?.slug || ''
}

export function unitParamFromSlug(units: Unit[], slug: string): string {
  const unit = units.find((item) => item.slug === slug)
  return unit ? String(unit.order) : ''
}

export function buildAppUrl(state: {
  route: AppRoute
  game: string
  week: string
  level: string
  unitParam?: string
  activeGame?: GameType
}): string {
  const params = new URLSearchParams()
  const game = state.game || 'kindergarten'
  params.set('game', game)

  if (state.route !== 'chooseGame') {
    params.set('week', state.week || '1')
  }

  if (state.route === 'chooseLevel' || state.route === 'home' || state.route === 'play' || state.route === 'summary') {
    params.set('level', state.level || 'pre11')
  }

  if ((state.route === 'home' || state.route === 'play' || state.route === 'summary') && state.unitParam) {
    params.set('unit', state.unitParam)
  }

  if (state.route === 'play' && state.activeGame) {
    params.set('play', state.activeGame)
  }

  if (state.route === 'summary') {
    params.set('view', 'summary')
  }

  const query = params.toString()
  const path = PAGE_PATHS[state.route]
  return query ? `${path}?${query}` : path
}

export function pushAppUrl(state: Parameters<typeof buildAppUrl>[0]) {
  const next = buildAppUrl(state)
  if (`${window.location.pathname}${window.location.search}` !== next) {
    window.history.pushState(null, '', next)
  }
}

export function replaceAppUrl(state: Parameters<typeof buildAppUrl>[0]) {
  const next = buildAppUrl(state)
  if (`${window.location.pathname}${window.location.search}` !== next) {
    window.history.replaceState(null, '', next)
  }
}
