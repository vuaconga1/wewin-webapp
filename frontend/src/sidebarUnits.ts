import type { Unit } from './api'

export type SidebarUnitItem = {
  unit: Unit
  gameKey: string
  levelKey: string
  unitValue: string
  weekKey: string
  weekLabel: string
  fixed: boolean
  sidebarKey: string
}

function normalizeUnitKey(value: string): string {
  return String(value || '').trim().toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')
}

function normalizeWeekKey(value: string): string {
  const raw = String(value || '').trim()
  if (!raw) return ''
  const digits = raw.replace(/[^0-9]/g, '')
  return digits || raw
}

export function getUnitOrderValue(unit: Unit, fallbackIndex?: number): string {
  const orderValue = unit?.order != null ? String(unit.order).trim() : ''
  if (orderValue) return orderValue
  const indexValue = Number(fallbackIndex)
  return Number.isFinite(indexValue) ? String(indexValue + 1) : ''
}

function getDefaultWeekKeyForUnit(unitValue: string): string {
  return normalizeUnitKey(unitValue) === '5' ? '2' : '1'
}

function getPreferredWeekKeyForUnit(unitValue: string): string {
  return getDefaultWeekKeyForUnit(unitValue)
}

export function filterUnitsForCurrentLevel(units: Unit[], level: string, game: string): Unit[] {
  const source = Array.isArray(units) ? units : []
  if (!level) return source
  if (game === 'starters') return source

  return source.filter((unit) => {
    const unitLevels = Array.isArray(unit.levels) ? unit.levels : []
    if (!unitLevels.length) return true
    return unitLevels.includes(level)
  })
}

function createSidebarUnitItem(
  unit: Unit,
  options: {
    gameKey: string
    levelKey: string
    unitValue: string
    weekKey: string
    weekLabel?: string
    fixed?: boolean
    fallbackIndex?: number
  },
): SidebarUnitItem | null {
  if (!unit) return null

  const gameKey = options.gameKey || 'kindergarten'
  const levelKey = options.levelKey || (unit.levels?.[0] ?? '')
  const unitValue = String(options.unitValue || getUnitOrderValue(unit, options.fallbackIndex) || '').trim()
  const weekKey = normalizeWeekKey(options.weekKey) || getPreferredWeekKeyForUnit(unitValue) || '1'
  const weekLabel = options.weekLabel || `Tuần ${weekKey}`

  return {
    unit,
    gameKey,
    levelKey,
    unitValue,
    weekKey,
    weekLabel,
    fixed: !!options.fixed,
    sidebarKey: `${gameKey}|${normalizeUnitKey(unit.slug || unitValue)}|${unitValue}|${weekKey}|${levelKey}`,
  }
}

export function createFixedKindergartenSidebarItem(unit: Unit, unitValue: string): SidebarUnitItem | null {
  const weekKey = getDefaultWeekKeyForUnit(unitValue)
  return createSidebarUnitItem(unit, {
    gameKey: 'kindergarten',
    levelKey: 'pre3',
    unitValue,
    weekKey,
    weekLabel: `Tuần ${weekKey}`,
    fixed: true,
  })
}

export function createFixedKindergartenSidebarUnit(unit: Unit): SidebarUnitItem | null {
  return createFixedKindergartenSidebarItem(unit, '1')
}

export function buildFixedKindergartenSidebarItems(units: Unit[]): SidebarUnitItem[] {
  const source = Array.isArray(units) ? units : []
  const items: SidebarUnitItem[] = []

  const unitOne = source.find((unit, index) => getUnitOrderValue(unit, index) === '1')
    || source.find((unit) => normalizeUnitKey(unit.slug) === '1')
    || null
  const unitFive = source.find((unit, index) => getUnitOrderValue(unit, index) === '5')
    || source.find((unit) => normalizeUnitKey(unit.slug) === '5')
    || null

  const unitOneItem = unitOne ? createFixedKindergartenSidebarItem(unitOne, '1') : null
  const unitFiveItem = unitFive ? createFixedKindergartenSidebarItem(unitFive, '5') : null

  if (unitOneItem) items.push(unitOneItem)
  if (unitFiveItem) items.push(unitFiveItem)

  return items
}

function getStarterSidebarCurrentUnit(
  source: Unit[],
  queryUnitValue: string,
  currentUnitSlug: string,
  currentUnitOrder: string,
): Unit | null {
  const normalizedQueryUnit = normalizeUnitKey(queryUnitValue)
  if (normalizedQueryUnit) {
    const matched = source.find((unit, index) => {
      if (!unit) return false
      return normalizeUnitKey(unit.slug) === normalizedQueryUnit
        || normalizeUnitKey(getUnitOrderValue(unit, index)) === normalizedQueryUnit
    })
    if (matched) return matched
  }

  if (currentUnitSlug) {
    const matchedBySlug = source.find((unit) => unit?.slug === currentUnitSlug)
    if (matchedBySlug) return matchedBySlug
  }

  if (currentUnitOrder) {
    const normalizedCurrentOrder = normalizeUnitKey(currentUnitOrder)
    const matchedByOrder = source.find((unit, index) => {
      if (!unit) return false
      return normalizeUnitKey(getUnitOrderValue(unit, index)) === normalizedCurrentOrder
    })
    if (matchedByOrder) return matchedByOrder
  }

  return source[0] || null
}

function appendFixedKindergartenSidebarItems(
  items: SidebarUnitItem[],
  fixedKindergartenSidebarUnits?: SidebarUnitItem[],
) {
  fixedKindergartenSidebarUnits?.forEach((item) => {
    items.push(item)
  })
}

function appendCurrentSidebarUnitItem(
  items: SidebarUnitItem[],
  unit: Unit,
  options: {
    gameKey: string
    levelKey: string
    unitValue: string
    weekKey: string
    weekLabel?: string
  },
) {
  const unitItem = createSidebarUnitItem(unit, {
    gameKey: options.gameKey,
    levelKey: options.levelKey,
    unitValue: options.unitValue,
    weekKey: options.weekKey,
    weekLabel: options.weekLabel || `Tuần ${options.weekKey}`,
    fixed: false,
  })
  if (unitItem) items.push(unitItem)
}

function dedupeSidebarItems(items: SidebarUnitItem[]): SidebarUnitItem[] {
  const uniqueItems: SidebarUnitItem[] = []
  const seen: Record<string, boolean> = {}
  items.forEach((item) => {
    const key = item.fixed
      ? `fixed|${item.gameKey}|${normalizeUnitKey(item.unitValue)}|${item.weekKey}`
      : item.sidebarKey
    if (seen[key]) return
    seen[key] = true
    uniqueItems.push(item)
  })
  return uniqueItems
}

export function buildSidebarUnitItems(params: {
  units: Unit[]
  game: string
  level: string
  week: string
  unitSlug: string
  unitParam: string
  fixedKindergartenSidebarUnits?: SidebarUnitItem[]
}): SidebarUnitItem[] {
  const { game, level, week, unitSlug, unitParam, fixedKindergartenSidebarUnits } = params
  const source = filterUnitsForCurrentLevel(params.units, level, game)
  const queryUnitValue = normalizeUnitKey(unitParam)
  const queryWeekValue = normalizeWeekKey(week)
  const items: SidebarUnitItem[] = []
  const currentUnitOrder = unitParam || (source.find((u) => u.slug === unitSlug) ? getUnitOrderValue(source.find((u) => u.slug === unitSlug)!, source.findIndex((u) => u.slug === unitSlug)) : '')

  if (game === 'starters') {
    appendFixedKindergartenSidebarItems(items, fixedKindergartenSidebarUnits)

    const currentUnit = getStarterSidebarCurrentUnit(source, queryUnitValue, unitSlug, currentUnitOrder)
    if (currentUnit) {
      const currentUnitValue = queryUnitValue || getUnitOrderValue(currentUnit, source.indexOf(currentUnit))
      const currentUnitWeekKey = normalizeWeekKey(queryWeekValue || week || '1') || '1'
      appendCurrentSidebarUnitItem(items, currentUnit, {
        gameKey: 'starters',
        levelKey: level,
        unitValue: currentUnitValue,
        weekKey: currentUnitWeekKey,
        weekLabel: `Tuần ${currentUnitWeekKey}`,
      })
    }
  } else {
    appendFixedKindergartenSidebarItems(items, fixedKindergartenSidebarUnits)

    const currentUnit = source.find((unit, index) => {
      if (!unit) return false
      const unitOrderKey = normalizeUnitKey(getUnitOrderValue(unit, index))
      return queryUnitValue && (normalizeUnitKey(unit.slug) === queryUnitValue || unitOrderKey === queryUnitValue)
    }) || source.find((unit) => unit?.slug === unitSlug) || source[0] || null

    const selectedUnitValue = normalizeUnitKey(queryUnitValue || currentUnitOrder)
    const currentUnitWeekKey = queryWeekValue
      || getPreferredWeekKeyForUnit(selectedUnitValue || (currentUnit ? getUnitOrderValue(currentUnit, source.indexOf(currentUnit)) : ''))
      || '1'

    if (currentUnit) {
      appendCurrentSidebarUnitItem(items, currentUnit, {
        gameKey: game,
        levelKey: level,
        unitValue: queryUnitValue || getUnitOrderValue(currentUnit, source.indexOf(currentUnit)),
        weekKey: currentUnitWeekKey,
        weekLabel: `Tuần ${currentUnitWeekKey}`,
      })
    }
  }

  return dedupeSidebarItems(items)
}
