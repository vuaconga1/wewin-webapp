import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '../..')
const outputPath = path.join(rootDir, 'VOCABULARY_INVENTORY.md')

const connectionString = process.env.DATABASE_URL
  || 'postgresql://postgres:123123@localhost:5432/wewin'

const GAME_LABELS = {
  kindergarten: 'Kindergarten',
  starters: 'Starters',
}

const LEVEL_LABELS = {
  pre11: 'Pre 1.1 (2 tuổi)',
  pre12: 'Pre 1.2 (3 tuổi)',
  pre2: 'Pre 2 (4-5 tuổi)',
  pre3: 'Pre 3 (6 tuổi)',
}

function splitScope(value) {
  return String(value || '')
    .split(/[,;|/\n:&]/)
    .map((x) => x.trim())
    .filter(Boolean)
}

function normalizeLookupKey(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '')
}

function normalizeLevelKey(value) {
  const map = { '1': 'pre11', '2': 'pre12', '3': 'pre2', '4': 'pre3' }
  const normalized = normalizeLookupKey(value)
  if (map[normalized]) return map[normalized]
  const aliases = {
    pre11: 'pre11', pre12: 'pre12', pre2: 'pre2', pre3: 'pre3',
    pre11: 'pre11', pre12: 'pre12', pre21: 'pre2', pre31: 'pre3',
    '2tuoi': 'pre11', '3tuoi': 'pre12', '45tuoi': 'pre2', '4to5': 'pre2', '6tuoi': 'pre3',
  }
  return aliases[normalized] || normalized
}

function normalizeGameKey(value) {
  const normalized = normalizeLookupKey(value)
  if (!normalized || normalized === 'all') return 'kindergarten'
  if (['kindergarten', 'kindergarden', 'kg', 'kinder', 'kindy'].includes(normalized)) return 'kindergarten'
  if (['starter', 'starters'].includes(normalized)) return 'starters'
  return null
}

function resolveAudioFileName(name) {
  const cleaned = String(name || '').trim()
  if (!cleaned) return ''

  const aliases = {
    labybug: 'ladybug',
    caterpilla: 'caterpillar',
    televison: 'television',
  }

  const lower = cleaned.toLowerCase()
  if (aliases[lower]) return aliases[lower]
  if (lower.endsWith(' zodiac')) return cleaned.slice(0, -' zodiac'.length).trim()
  return cleaned
}

function normalizeAssetFileName(name) {
  const cleaned = String(name || '').trim()
  if (!cleaned) return ''
  const letters = [...cleaned].filter((ch) => /[a-zA-Z]/.test(ch))
  if (letters.length > 0 && letters.every((ch) => ch === ch.toUpperCase() && ch !== ch.toLowerCase())) {
    return cleaned.toLowerCase()
  }
  return cleaned
}

function buildLocalAudioPath(name) {
  const cleaned = normalizeAssetFileName(resolveAudioFileName(name))
  if (!cleaned) return null
  return path.join(rootDir, 'frontend/public/assets/audios', `${cleaned}.mp3`)
}

function buildLocalAudioUrl(name) {
  const cleaned = normalizeAssetFileName(resolveAudioFileName(name))
  if (!cleaned) return ''
  return `/assets/audios/${encodeURIComponent(cleaned)}.mp3`
}

function publicMediaPath(asset) {
  if (asset.StoragePath) {
    return '/' + String(asset.StoragePath).replace(/\\/g, '/').replace(/^\/+/, '')
  }
  const local = buildLocalAudioUrl(resolveAudioFileName(asset.Name))
  if (local) return local
  return asset.Url || ''
}

function fileExistsForUrl(urlPath) {
  if (!urlPath) return false
  if (urlPath.startsWith('http://') || urlPath.startsWith('https://') || urlPath.startsWith('data:')) {
    return 'remote'
  }
  let relative = urlPath.replace(/^\//, '')
  try {
    relative = decodeURIComponent(relative)
  } catch {
    // keep encoded
  }
  const candidates = [
    path.join(rootDir, 'frontend/public', relative),
    path.join(rootDir, 'backend/wwwroot', relative),
    path.join(rootDir, 'frontend/dist', relative),
  ]
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate
  }
  return false
}

function resolveAudio(item, mediaAssets, unitSlug) {
  const direct = String(item.AudioValue || '').trim()
  const fallbackName = resolveAudioFileName(item.EnglishText)
  const resolvedDirect = resolveAudioFileName(direct)

  if (direct.startsWith('http') || direct.startsWith('data:')) {
    const migrated = mediaAssets.find((m) =>
      m.Type === 'audio'
      && m.OriginalUrl === direct
      && (!m.UnitSlug || m.UnitSlug.toLowerCase() === unitSlug.toLowerCase()),
    )
    if (migrated) {
      const url = publicMediaPath(migrated)
      const exists = fileExistsForUrl(url)
      return { url, source: 'media-migrated', exists, mediaId: migrated.Id, downloadStatus: migrated.DownloadStatus }
    }

    const localFromName = buildLocalAudioPath(fallbackName)
    if (localFromName && fs.existsSync(localFromName)) {
      return { url: buildLocalAudioUrl(fallbackName), source: 'local-filename', exists: localFromName }
    }

    return { url: direct, source: 'remote-url', exists: 'remote' }
  }

  if (direct.startsWith('/assets/')) {
    const exists = fileExistsForUrl(direct)
    return { url: direct, source: 'assets-path', exists }
  }

  const key = normalizeLookupKey(resolvedDirect || fallbackName)
  const candidates = mediaAssets.filter((m) => m.Type === 'audio' && m.NormalizedName === key)
  const unitMatch = candidates.find((m) => m.UnitSlug?.toLowerCase() === unitSlug.toLowerCase())
    || candidates[0]

  if (unitMatch) {
    const url = publicMediaPath(unitMatch)
    const exists = fileExistsForUrl(url)
    return {
      url,
      source: 'media-db',
      exists,
      mediaId: unitMatch.Id,
      downloadStatus: unitMatch.DownloadStatus,
      audioValue: direct,
    }
  }

  const localPath = buildLocalAudioPath(resolvedDirect || fallbackName)
  if (localPath && fs.existsSync(localPath)) {
    return { url: buildLocalAudioUrl(resolvedDirect || fallbackName), source: 'local-fallback', exists: localPath }
  }

  const expectedUrl = buildLocalAudioUrl(resolvedDirect || fallbackName)
  return {
    url: expectedUrl,
    source: 'missing',
    exists: false,
    audioValue: direct,
    expectedFile: localPath,
  }
}

function audioStatusLabel(resolved) {
  if (resolved.exists && resolved.exists !== 'remote') {
    return '✅ Có file'
  }
  if (resolved.exists === 'remote') {
    if (resolved.downloadStatus === 'failed') return '❌ Remote failed'
    if (resolved.downloadStatus === 'pending') return '🔗 Remote URL (chưa tải)'
    return '🔗 Remote URL'
  }
  return '❌ Thiếu audio'
}

function countLocalMp3() {
  const dir = path.join(rootDir, 'frontend/public/assets/audios')
  if (!fs.existsSync(dir)) return 0
  return fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.mp3')).length
}

async function main() {
  const client = new pg.Client({ connectionString })
  await client.connect()

  const [levelsRes, weeksRes, unitsRes, itemsRes, mediaRes] = await Promise.all([
    client.query('SELECT "Key", "Title", "AgeLabel", "SortOrder" FROM "Levels" ORDER BY "SortOrder"'),
    client.query('SELECT "Key", "Label", "SortOrder" FROM "Weeks" ORDER BY "SortOrder"'),
    client.query('SELECT "Order", "Name", "Slug", "LevelKeys", "GameKeys", "Status" FROM "Units" ORDER BY "Order"'),
    client.query(`SELECT "GameType", "UnitSlug", "ImageValue", "AudioValue", "EnglishText", "VietnameseText", "WeekKeys", "LevelKeys", "GameKeys", "SortOrder" FROM "GameItems" ORDER BY "UnitSlug", "SortOrder"`),
    client.query(`SELECT "Id", "Type", "Name", "NormalizedName", "OriginalUrl", "Url", "StoragePath", "DownloadStatus", "UnitSlug", "LevelKeys", "WeekKeys", "GameKeys" FROM "MediaAssets" WHERE "Type" = 'audio'`),
  ])

  await client.end()

  const levels = levelsRes.rows.length
    ? levelsRes.rows
    : [
      { Key: 'pre11', Title: 'Pre 1.1', AgeLabel: '2 tuổi' },
      { Key: 'pre12', Title: 'Pre 1.2', AgeLabel: '3 tuổi' },
      { Key: 'pre2', Title: 'Pre 2', AgeLabel: '4-5 tuổi' },
      { Key: 'pre3', Title: 'Pre 3', AgeLabel: '6 tuổi' },
    ]

  const weeks = weeksRes.rows.length
    ? weeksRes.rows
    : [{ Key: '1', Label: 'Tuần 1' }, { Key: '2', Label: 'Tuần 2' }]

  const units = unitsRes.rows.filter((u) => u.Status === 'Active')
  const items = itemsRes.rows
  const mediaAssets = mediaRes.rows

  const missingAudio = []
  const missingUnique = new Map()
  const lines = []
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ')

  lines.push('# Danh mục từ vựng WeWin (theo database)')
  lines.push('')
  lines.push(`> Tạo lúc: ${now}`)
  lines.push(`> Nguồn: PostgreSQL \`wewin\` — bảng Levels, Weeks, Units, GameItems, MediaAssets`)
  lines.push('')

  lines.push('## Tổng quan')
  lines.push('')
  lines.push(`| Chỉ số | Giá trị |`)
  lines.push(`| --- | --- |`)
  lines.push(`| Số cấp độ (Level) | ${levels.length} |`)
  lines.push(`| Số tuần (Week) | ${weeks.length} |`)
  lines.push(`| Số Unit active | ${units.length} |`)
  lines.push(`| Tổng GameItems | ${items.length} |`)
  lines.push(`| Media audio trong DB | ${mediaAssets.length} |`)
  lines.push(`| File mp3 local (\`frontend/public/assets/audios\`) | ${countLocalMp3()} |`)
  const overviewMissingIndex = lines.length
  lines.push(`| **Từ thiếu audio (unique)** | _đang tính..._ |`)
  lines.push('')

  lines.push('## Cấp độ (Level)')
  lines.push('')
  for (const level of levels) {
    lines.push(`- **${level.Key}** — ${level.Title}: ${level.AgeLabel}`)
  }
  lines.push('')

  lines.push('## Tuần (Week)')
  lines.push('')
  for (const week of weeks) {
    lines.push(`- **Tuần ${week.Key}** — ${week.Label}`)
  }
  lines.push('')

  const games = ['kindergarten', 'starters']

  for (const game of games) {
    lines.push(`---`)
    lines.push('')
    lines.push(`## Cấp bậc game: ${GAME_LABELS[game] || game}`)
    lines.push('')

    const gameUnits = units.filter((unit) => {
      const keys = splitScope(unit.GameKeys).map(normalizeGameKey).filter(Boolean)
      return keys.length === 0 ? game === 'kindergarten' : keys.includes(game)
    })

    if (!gameUnits.length) {
      lines.push('_Không có unit nào cho cấp bậc này._')
      lines.push('')
      continue
    }

    for (const unit of gameUnits) {
      const unitLevels = splitScope(unit.LevelKeys).map(normalizeLevelKey).filter(Boolean)
      const applicableLevels = unitLevels.length
        ? levels.filter((l) => unitLevels.includes(l.Key))
        : levels

      lines.push(`### ${unit.Name} (\`${unit.Slug}\`)`)
      lines.push('')
      lines.push(`- Unit order: ${unit.Order}`)
      lines.push(`- Level áp dụng: ${applicableLevels.map((l) => l.Key).join(', ') || 'tất cả'}`)
      lines.push('')

      for (const level of applicableLevels) {
        lines.push(`#### Level: ${LEVEL_LABELS[level.Key] || level.Key}`)
        lines.push('')

        const unitItems = items.filter((item) => {
          if (item.UnitSlug !== unit.Slug) return false
          const itemLevels = splitScope(item.LevelKeys).map(normalizeLevelKey).filter(Boolean)
          if (itemLevels.length && !itemLevels.includes(level.Key)) return false
          const itemGames = splitScope(item.GameKeys).map(normalizeGameKey).filter(Boolean)
          if (itemGames.length && !itemGames.includes(game)) return false
          return true
        })

        if (!unitItems.length) {
          lines.push('_Không có từ vựng._')
          lines.push('')
          continue
        }

        const vocabMap = new Map()
        for (const item of unitItems) {
          const en = String(item.EnglishText || '').trim()
          if (!en) continue
          const key = en.toLowerCase()
          if (!vocabMap.has(key)) {
            vocabMap.set(key, {
              en,
              vi: String(item.VietnameseText || '').trim(),
              gameTypes: new Set(),
              weeks: new Set(),
              audioChecks: [],
            })
          }
          const entry = vocabMap.get(key)
          entry.gameTypes.add(item.GameType)
          splitScope(item.WeekKeys).forEach((w) => entry.weeks.add(w))
          const audio = resolveAudio(item, mediaAssets, unit.Slug)
          entry.audioChecks.push({ gameType: item.GameType, ...audio })
        }

        lines.push('| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |')
        lines.push('| --- | --- | --- | --- | --- | --- | --- |')

        let idx = 1
        const sortedVocab = [...vocabMap.values()].sort((a, b) => a.en.localeCompare(b.en))

        for (const vocab of sortedVocab) {
          const bestAudio = vocab.audioChecks.find((a) => a.exists && a.exists !== 'remote')
            || vocab.audioChecks.find((a) => a.exists === 'remote')
            || vocab.audioChecks[0]

          const status = audioStatusLabel(bestAudio)
          const noteParts = []
          if (!bestAudio.exists || bestAudio.exists === false) {
            noteParts.push(`Thiếu file`)
            if (bestAudio.expectedFile) noteParts.push(`Kỳ vọng: \`${bestAudio.expectedFile}\``)
            if (bestAudio.audioValue) noteParts.push(`AudioValue: \`${bestAudio.audioValue}\``)
            const missingRow = {
              game,
              unit: unit.Name,
              unitSlug: unit.Slug,
              level: level.Key,
              en: vocab.en,
              vi: vocab.vi,
              url: bestAudio.url,
              source: bestAudio.source,
              expectedFile: bestAudio.expectedFile || '',
            }
            missingAudio.push(missingRow)
            const uniqueKey = `${unit.Slug}::${vocab.en.toLowerCase()}::${bestAudio.url || bestAudio.expectedFile}`
            if (!missingUnique.has(uniqueKey)) missingUnique.set(uniqueKey, missingRow)
          } else if (bestAudio.exists === 'remote') {
            noteParts.push(`URL: ${String(bestAudio.url || '').slice(0, 80)}`)
            if (bestAudio.downloadStatus && bestAudio.downloadStatus !== 'done' && bestAudio.downloadStatus !== 'completed') {
              noteParts.push(`Download: ${bestAudio.downloadStatus}`)
            }
          } else if (typeof bestAudio.exists === 'string') {
            noteParts.push(path.relative(rootDir, bestAudio.exists))
          }

          const weekLabel = [...vocab.weeks].sort().join(', ') || '—'
          const gameLabel = [...vocab.gameTypes].sort().join(', ')

          lines.push(`| ${idx} | ${vocab.en} | ${vocab.vi || '—'} | ${gameLabel} | ${weekLabel} | ${status} | ${noteParts.join('; ') || '—'} |`)
          idx += 1
        }

        lines.push('')
      }
    }
  }

  lines.push('---')
  lines.push('')
  lines.push('## Từ vựng thiếu file audio (local)')
  lines.push('')

  if (!missingUnique.size) {
    lines.push('_Không phát hiện từ nào thiếu file audio local._')
  } else {
    lines.push(`**Tổng: ${missingUnique.size} từ duy nhất** (liệt kê theo unit + từ, bỏ trùng level)`)
    lines.push('')
    lines.push('| Cấp bậc | Unit | Tiếng Anh | Tiếng Việt | Nguồn audio | URL/Path kỳ vọng |')
    lines.push('| --- | --- | --- | --- | --- | --- |')
    for (const row of [...missingUnique.values()].sort((a, b) => a.unit.localeCompare(b.unit) || a.en.localeCompare(b.en))) {
      lines.push(`| ${row.game} | ${row.unit} | ${row.en} | ${row.vi || '—'} | ${row.source} | \`${row.url || row.expectedFile}\` |`)
    }
  }

  lines.push('')
  lines.push('### Chi tiết thiếu audio theo level (đầy đủ)')
  lines.push('')
  if (!missingAudio.length) {
    lines.push('_Không có._')
  } else {
    lines.push(`**${missingAudio.length} dòng** (cùng từ có thể lặp ở nhiều level)`)
    lines.push('')
    lines.push('| Cấp bậc | Unit | Level | Tiếng Anh | Tiếng Việt | Nguồn audio | URL/Path kỳ vọng |')
    lines.push('| --- | --- | --- | --- | --- | --- | --- |')
    for (const row of missingAudio) {
      lines.push(`| ${row.game} | ${row.unit} | ${row.level} | ${row.en} | ${row.vi || '—'} | ${row.source} | \`${row.url || row.expectedFile}\` |`)
    }
  }

  lines.push('')
  lines.push('---')
  lines.push('')
  lines.push('## Ghi chú kiểm tra audio')
  lines.push('')
  lines.push('- ✅ **Có file**: tìm thấy file `.mp3` trong `frontend/public`, `backend/wwwroot`, hoặc `frontend/dist`.')
  lines.push('- 🔗 **Remote URL**: audio trỏ Google Drive / URL ngoài — không kiểm tra tải được hay không trong script này.')
  lines.push('- ❌ **Thiếu audio**: không có bản ghi MediaAssets phù hợp và không có file local theo quy tắc `/assets/audios/{tên}.mp3`.')
  lines.push('')

  lines[overviewMissingIndex] = `| **Từ thiếu audio (unique)** | **${missingUnique.size}** |`

  fs.writeFileSync(outputPath, lines.join('\n'), 'utf8')
  console.log(`Wrote ${outputPath}`)
  console.log(`Missing local audio (unique): ${missingUnique.size}`)
  console.log(`Missing local audio (rows): ${missingAudio.length}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
