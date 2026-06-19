using Microsoft.EntityFrameworkCore;
using WeWin.Api.Data;
using WeWin.Api.Features.Media;

namespace WeWin.Api.Features.Games;

public sealed class GameQueryService(WeWinDbContext db, MediaAssetLookup mediaLookup)
{
    public async Task<IReadOnlyList<LevelDto>> GetLevelsAsync()
    {
        var levels = await db.Levels.AsNoTracking().OrderBy(x => x.SortOrder).ToListAsync();
        if (levels.Count == 0) return GameRules.DefaultLevels;
        return levels.Select(x => new LevelDto(x.Key, x.Title, x.AgeLabel, $"{x.Title}: {x.AgeLabel}")).ToList();
    }

    public async Task<IReadOnlyList<WeekDto>> GetWeeksAsync()
    {
        var weeks = await db.Weeks.AsNoTracking().OrderBy(x => x.SortOrder).ToListAsync();
        if (weeks.Count == 0) return [new("1", "Tuần 1"), new("2", "Tuần 2")];
        return weeks.Select(x => new WeekDto(x.Key, x.Label)).ToList();
    }

    public async Task<IReadOnlyList<UnitDto>> GetUnitsAsync(string? level, string? game)
    {
        var units = await db.Units.AsNoTracking()
            .Where(x => x.Status == "Active")
            .OrderBy(x => x.Order)
            .ToListAsync();

        return units
            .Where(x => GameRules.MatchesLevel(x.LevelKeys, level))
            .Where(x => GameRules.MatchesGame(x.GameKeys, game))
            .Select(x => new UnitDto(x.Order, x.Name, x.Slug, string.IsNullOrWhiteSpace(x.Icon) ? "📘" : x.Icon, GameRules.SplitScope(x.LevelKeys)))
            .ToList();
    }

    public async Task<GameAllDto> GetAllGameDataAsync(string slug, string? level, string? week, string? game)
    {
        var context = await BuildGameContextAsync(slug, level, week, game);
        var vietnameseLookup = await BuildVietnameseLookupAsync();
        return new GameAllDto(
            BuildListenChoose(context, "listenchoose"),
            BuildLookChoose(context, "lookchoose"),
            BuildPronunciation(context, "pronunciation", vietnameseLookup));
    }

    public async Task<IReadOnlyList<ListenChooseDto>> GetListenChooseAsync(string slug, string? level, string? week, string? game)
        => BuildListenChoose(await BuildGameContextAsync(slug, level, week, game), "listenchoose");

    public async Task<IReadOnlyList<LookChooseDto>> GetLookChooseAsync(string slug, string? level, string? week, string? game)
        => BuildLookChoose(await BuildGameContextAsync(slug, level, week, game), "lookchoose");

    public async Task<IReadOnlyList<PronunciationDto>> GetPronunciationAsync(string slug, string? level, string? week, string? game)
    {
        var context = await BuildGameContextAsync(slug, level, week, game);
        var vietnameseLookup = await BuildVietnameseLookupAsync();
        return BuildPronunciation(context, "pronunciation", vietnameseLookup);
    }

    public async Task<GameSession> CreateSessionAsync(GameSessionRequest request)
    {
        var session = new GameSession
        {
            GameType = request.GameType ?? string.Empty,
            UnitSlug = request.UnitSlug ?? string.Empty,
            LevelKey = request.LevelKey ?? string.Empty,
            WeekKey = request.WeekKey ?? string.Empty,
            TotalQuestions = request.TotalQuestions
        };
        db.GameSessions.Add(session);
        await db.SaveChangesAsync();
        return session;
    }

    public async Task<ScoreRecord> AddScoreAsync(ScoreRequest request)
    {
        var score = new ScoreRecord
        {
            GameSessionId = request.GameSessionId,
            QuestionText = request.QuestionText,
            Correct = request.Correct,
            Points = request.Points
        };
        db.Scores.Add(score);

        var session = await db.GameSessions.FindAsync(request.GameSessionId);
        if (session is not null)
        {
            session.Score += request.Points;
            if (request.Correct) session.CorrectCount += 1;
        }

        await db.SaveChangesAsync();
        return score;
    }

    private async Task<GameBuildContext> BuildGameContextAsync(string slug, string? level, string? week, string? game)
    {
        var normalizedSlug = (slug ?? string.Empty).Trim();
        var mediaIndex = await mediaLookup.GetIndexAsync();
        var unitItems = await db.GameItems.AsNoTracking()
            .Where(x => x.UnitSlug == normalizedSlug)
            .OrderBy(x => x.SortOrder)
            .ToListAsync();

        var scopedItems = unitItems
            .Where(x => GameRules.MatchesLevel(x.LevelKeys, level))
            .Where(x => GameRules.MatchesWeek(x.WeekKeys, week))
            .Where(x => GameRules.MatchesGame(x.GameKeys, game))
            .ToList();

        var mediaImages = await db.MediaAssets.AsNoTracking()
            .Where(x => x.Type == "image" && x.UnitSlug == normalizedSlug)
            .ToListAsync();

        var imagePool = scopedItems
            .Select(x => ResolveImage(mediaIndex, x.ImageValue, x.EnglishText, normalizedSlug, level, week, game))
            .Concat(mediaImages
                .Where(x => GameRules.MatchesLevel(x.LevelKeys, level) && GameRules.MatchesWeek(x.WeekKeys, week) && GameRules.MatchesGame(x.GameKeys, game))
                .Select(PublicMediaUrl))
            .Where(x => !string.IsNullOrWhiteSpace(x))
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .ToArray();

        return new GameBuildContext(normalizedSlug, level, week, game, mediaIndex, scopedItems, imagePool);
    }

    private static IReadOnlyList<ListenChooseDto> BuildListenChoose(GameBuildContext context, string gameType)
    {
        var items = FilterAndShuffle(context, gameType);
        return items
            .Select(item =>
            {
                var correct = ResolveImage(context, item.ImageValue, item.EnglishText);
                var wrong = context.ImagePool.Where(x => !string.Equals(x, correct, StringComparison.OrdinalIgnoreCase))
                    .Distinct(StringComparer.OrdinalIgnoreCase)
                    .OrderBy(_ => Random.Shared.Next())
                    .Take(3)
                    .ToArray();
                return new ListenChooseDto(
                    ResolveAudio(context, item.AudioValue, item.EnglishText),
                    correct,
                    [.. wrong.Append(correct).OrderBy(_ => Random.Shared.Next())],
                    item.EnglishText);
            })
            .Where(x => !string.IsNullOrWhiteSpace(x.Correct))
            .ToList();
    }

    private static IReadOnlyList<LookChooseDto> BuildLookChoose(GameBuildContext context, string gameType)
    {
        var items = FilterAndShuffle(context, gameType);
        var words = items.Select(x => FormatLookChooseText(x.EnglishText))
            .Where(x => !string.IsNullOrWhiteSpace(x))
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .ToArray();

        return items
            .Select(item =>
            {
                var correct = FormatLookChooseText(item.EnglishText);
                var wrong = words.Where(x => !string.Equals(x, correct, StringComparison.OrdinalIgnoreCase))
                    .OrderBy(_ => Random.Shared.Next())
                    .Take(3)
                    .ToArray();
                return new LookChooseDto(
                    ResolveImage(context, item.ImageValue, correct),
                    correct,
                    [.. wrong.Append(correct).OrderBy(_ => Random.Shared.Next())],
                    ResolveAudio(context, item.AudioValue, correct));
            })
            .Where(x => !string.IsNullOrWhiteSpace(x.Correct))
            .ToList();
    }

    private static IReadOnlyList<PronunciationDto> BuildPronunciation(
        GameBuildContext context,
        string gameType,
        IReadOnlyDictionary<string, string> vietnameseLookup)
    {
        var items = FilterAndShuffle(context, gameType);
        return items.Select(item => new PronunciationDto(
                ResolveImage(context, item.ImageValue, item.EnglishText),
                ResolveAudio(context, item.AudioValue, item.EnglishText),
                item.EnglishText,
                VietnameseTextHelper.Resolve(item.EnglishText, item.VietnameseText, vietnameseLookup)))
            .Where(x => !string.IsNullOrWhiteSpace(x.En))
            .ToList();
    }

    private async Task<IReadOnlyDictionary<string, string>> BuildVietnameseLookupAsync()
    {
        var rows = await db.GameItems.AsNoTracking()
            .Where(x => x.VietnameseText != "")
            .Select(x => new { x.EnglishText, x.VietnameseText })
            .ToListAsync();

        return VietnameseTextHelper.BuildLookup(rows.Select(x => (x.EnglishText, x.VietnameseText)));
    }

    private static List<GameItem> FilterAndShuffle(GameBuildContext context, string gameType)
        => context.ScopedItems
            .Where(x => string.Equals(x.GameType, gameType, StringComparison.OrdinalIgnoreCase))
            .OrderBy(_ => Random.Shared.Next())
            .ToList();

    private static string ResolveImage(GameBuildContext context, string value, string fallbackName)
        => ResolveMedia(context.MediaIndex, "image", value, fallbackName, context.UnitSlug, context.Level, context.Week, context.Game);

    private static string ResolveAudio(GameBuildContext context, string value, string fallbackName)
        => ResolveMedia(context.MediaIndex, "audio", value, fallbackName, context.UnitSlug, context.Level, context.Week, context.Game);

    private static string ResolveImage(MediaAssetIndex mediaIndex, string value, string fallbackName, string unitSlug, string? level, string? week, string? game)
        => ResolveMedia(mediaIndex, "image", value, fallbackName, unitSlug, level, week, game);

    private static string ResolveMedia(MediaAssetIndex mediaIndex, string type, string value, string fallbackName, string unitSlug, string? level, string? week, string? game)
    {
        var direct = (value ?? string.Empty).Trim();
        var sourceName = string.IsNullOrWhiteSpace(direct) ? fallbackName : direct;
        if (string.Equals(type, "audio", StringComparison.OrdinalIgnoreCase))
        {
            sourceName = AssetNameResolver.ResolveAudioFileName(sourceName);
        }

        if (direct.StartsWith("http", StringComparison.OrdinalIgnoreCase) || direct.StartsWith("data:", StringComparison.OrdinalIgnoreCase))
        {
            var migrated = FindMigratedMedia(mediaIndex, type, direct, unitSlug, level, week, game);
            if (!string.IsNullOrWhiteSpace(migrated)) return migrated;

            var localFromName = BuildLocalAssetUrl(type, sourceName);
            if (!string.IsNullOrWhiteSpace(localFromName)) return localFromName;

            return direct;
        }

        if (direct.StartsWith("/assets/", StringComparison.OrdinalIgnoreCase)) return direct;

        foreach (var candidate in AssetNameResolver.GetImageNameCandidates(sourceName))
        {
            var key = GameRules.NormalizeLookupKey(candidate);
            var candidates = mediaIndex.FindByNormalizedName(type, key);

            var resolved = candidates
                .Where(x => string.Equals(x.UnitSlug, unitSlug, StringComparison.OrdinalIgnoreCase))
                .Where(x => GameRules.MatchesLevel(x.LevelKeys, level) && GameRules.MatchesWeek(x.WeekKeys, week) && GameRules.MatchesGame(x.GameKeys, game))
                .Select(PublicMediaUrl)
                .FirstOrDefault()
                ?? candidates.Select(PublicMediaUrl).FirstOrDefault();
            if (!string.IsNullOrWhiteSpace(resolved)) return resolved;

            var local = BuildLocalAssetUrl(type, candidate);
            if (!string.IsNullOrWhiteSpace(local)) return local;
        }

        var fallbackKey = GameRules.NormalizeLookupKey(sourceName);
        var fallbackCandidates = mediaIndex.FindByNormalizedName(type, fallbackKey);

        return fallbackCandidates
            .Where(x => string.Equals(x.UnitSlug, unitSlug, StringComparison.OrdinalIgnoreCase))
            .Where(x => GameRules.MatchesLevel(x.LevelKeys, level) && GameRules.MatchesWeek(x.WeekKeys, week) && GameRules.MatchesGame(x.GameKeys, game))
            .Select(PublicMediaUrl)
            .FirstOrDefault()
            ?? fallbackCandidates.Select(PublicMediaUrl).FirstOrDefault()
            ?? BuildLocalAssetUrl(type, sourceName)
            ?? string.Empty;
    }

    private static string? FindMigratedMedia(MediaAssetIndex mediaIndex, string type, string originalUrl, string unitSlug, string? level, string? week, string? game)
        => mediaIndex.FindByOriginalUrl(type, originalUrl)
            .Where(x => string.IsNullOrWhiteSpace(x.UnitSlug) || string.Equals(x.UnitSlug, unitSlug, StringComparison.OrdinalIgnoreCase))
            .Where(x => GameRules.MatchesLevel(x.LevelKeys, level) && GameRules.MatchesWeek(x.WeekKeys, week) && GameRules.MatchesGame(x.GameKeys, game))
            .Select(PublicMediaUrl)
            .FirstOrDefault();

    private static string PublicMediaUrl(MediaAsset asset)
    {
        if (!string.IsNullOrWhiteSpace(asset.StoragePath))
        {
            return "/" + asset.StoragePath.Replace('\\', '/').TrimStart('/');
        }

        var local = BuildLocalAssetUrl(asset.Type, asset.Name);
        if (!string.IsNullOrWhiteSpace(local)) return local;

        return asset.Url;
    }

    private static string? BuildLocalAssetUrl(string type, string? name)
    {
        if (string.Equals(type, "audio", StringComparison.OrdinalIgnoreCase))
        {
            name = AssetNameResolver.ResolveAudioFileName(name);
        }

        var cleaned = NormalizeAssetFileName(name);
        if (string.IsNullOrWhiteSpace(cleaned)) return null;

        var folder = type == "audio" ? "audios" : "images";
        var ext = type == "audio" ? "mp3" : "jpg";
        return $"/assets/{folder}/{Uri.EscapeDataString(cleaned)}.{ext}";
    }

    private static string NormalizeAssetFileName(string? name)
    {
        var cleaned = (name ?? string.Empty).Trim();
        if (string.IsNullOrWhiteSpace(cleaned)) return string.Empty;

        var letters = cleaned.Where(char.IsLetter).ToArray();
        if (letters.Length > 0 && letters.All(char.IsUpper))
        {
            return cleaned.ToLowerInvariant();
        }

        return cleaned;
    }

    private static string FormatLookChooseText(string value) => (value ?? string.Empty).Trim();

    private sealed record GameBuildContext(
        string UnitSlug,
        string? Level,
        string? Week,
        string? Game,
        MediaAssetIndex MediaIndex,
        IReadOnlyList<GameItem> ScopedItems,
        string[] ImagePool);
}
