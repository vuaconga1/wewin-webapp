using ClosedXML.Excel;
using Microsoft.EntityFrameworkCore;
using WeWin.Api.Data;

namespace WeWin.Api.Features.Import;

public sealed class ExcelWorkbookImporter(WeWinDbContext db)
{
    public async Task<object> ImportAsync(string workbookPath)
    {
        if (!File.Exists(workbookPath))
        {
            throw new FileNotFoundException("Workbook not found.", workbookPath);
        }

        await db.Database.MigrateAsync();
        using var workbook = new XLWorkbook(workbookPath);

        await UpsertDefaultsAsync();
        var users = await UpsertUsersAsync(workbook);
        var units = await UpsertUnitsAsync(workbook);
        var media = await UpsertMediaAsync(workbook);
        var gameItems = await UpsertGameItemsAsync(workbook);
        await db.SaveChangesAsync();

        return new
        {
            workbookPath,
            users,
            units,
            media,
            gameItems
        };
    }

    private async Task UpsertDefaultsAsync()
    {
        foreach (var level in GameRules.DefaultLevels.Select((level, index) => new LevelEntity
        {
            Key = level.Key,
            Title = level.Title,
            AgeLabel = level.AgeLabel,
            SortOrder = index + 1
        }))
        {
            var existing = await db.Levels.FirstOrDefaultAsync(x => x.Key == level.Key);
            if (existing is null) db.Levels.Add(level);
            else
            {
                existing.Title = level.Title;
                existing.AgeLabel = level.AgeLabel;
                existing.SortOrder = level.SortOrder;
            }
        }

        foreach (var week in new[] { new WeekEntity { Key = "1", Label = "Tuần 1", SortOrder = 1 }, new WeekEntity { Key = "2", Label = "Tuần 2", SortOrder = 2 } })
        {
            var existing = await db.Weeks.FirstOrDefaultAsync(x => x.Key == week.Key);
            if (existing is null) db.Weeks.Add(week);
            else
            {
                existing.Label = week.Label;
                existing.SortOrder = week.SortOrder;
            }
        }
    }

    private async Task<int> UpsertUnitsAsync(XLWorkbook workbook)
    {
        var count = 0;
        foreach (var incoming in ReadSheet(workbook, "Units").Select((row, index) => new UnitEntity
        {
            Order = ToInt(Cell(row, 0), index + 1),
            Name = Cell(row, 1),
            Slug = Cell(row, 2),
            Status = string.IsNullOrWhiteSpace(Cell(row, 3)) ? "Active" : Cell(row, 3),
            Icon = string.IsNullOrWhiteSpace(Cell(row, 4)) ? "📘" : Cell(row, 4),
            LevelKeys = GameRules.ExtractLevelKeys(HeaderValue(row, "levels", "level", "class", "classes")),
            GameKeys = GameRules.ExtractGameKeys(HeaderValue(row, "game", "program", "bundle", "track", "dataset"))
        }).Where(x => !string.IsNullOrWhiteSpace(x.Name) && !string.IsNullOrWhiteSpace(x.Slug)))
        {
            var existing = await db.Units.FirstOrDefaultAsync(x => x.Slug == incoming.Slug);
            if (existing is null) db.Units.Add(incoming);
            else
            {
                existing.Order = incoming.Order;
                existing.Name = incoming.Name;
                existing.Icon = incoming.Icon;
                existing.Status = incoming.Status;
                existing.LevelKeys = incoming.LevelKeys;
                existing.GameKeys = incoming.GameKeys;
            }
            count++;
        }

        return count;
    }

    private async Task<int> UpsertUsersAsync(XLWorkbook workbook)
    {
        var count = 0;
        foreach (var incoming in ReadSheet(workbook, "Users").Select(row => new UserAccount
        {
            Email = Cell(row, 0).Trim(),
            PasswordHash = PasswordHasher.Hash(Cell(row, 1)),
            DisplayName = string.IsNullOrWhiteSpace(Cell(row, 2)) ? Cell(row, 0) : Cell(row, 2),
            Role = string.IsNullOrWhiteSpace(HeaderValue(row, "role")) ? "student" : HeaderValue(row, "role")
        }).Where(x => !string.IsNullOrWhiteSpace(x.Email)))
        {
            var existing = await db.Users.FirstOrDefaultAsync(x => x.Email == incoming.Email);
            if (existing is null) db.Users.Add(incoming);
            else
            {
                existing.PasswordHash = incoming.PasswordHash;
                existing.DisplayName = incoming.DisplayName;
                existing.Role = incoming.Role;
            }
            count++;
        }

        return count;
    }

    private async Task<int> UpsertMediaAsync(XLWorkbook workbook)
    {
        var media = ImportMedia(workbook, "Images", "image").Concat(ImportMedia(workbook, "Audios", "audio")).ToList();
        foreach (var incoming in media)
        {
            var existing = await db.MediaAssets.FirstOrDefaultAsync(x => x.SourceKey == incoming.SourceKey);
            if (existing is null) db.MediaAssets.Add(incoming);
            else
            {
                existing.Name = incoming.Name;
                existing.NormalizedName = incoming.NormalizedName;
                existing.OriginalUrl = incoming.OriginalUrl;
                existing.Url = incoming.Url;
                existing.UnitSlug = incoming.UnitSlug;
                existing.LevelKeys = incoming.LevelKeys;
                existing.WeekKeys = incoming.WeekKeys;
                existing.GameKeys = incoming.GameKeys;
            }
        }

        return media.Count;
    }

    private async Task<int> UpsertGameItemsAsync(XLWorkbook workbook)
    {
        var items = ImportGameSheet(workbook, "GameData", "listenchoose")
            .Concat(ImportGameSheet(workbook, "Game_LookChoose", "lookchoose"))
            .Concat(ImportGameSheet(workbook, "Game_Pronunciation", "pronunciation"))
            .ToList();

        foreach (var incoming in items)
        {
            var existing = await db.GameItems.FirstOrDefaultAsync(x => x.SourceKey == incoming.SourceKey);
            if (existing is null) db.GameItems.Add(incoming);
            else
            {
                existing.UnitSlug = incoming.UnitSlug;
                existing.ImageValue = incoming.ImageValue;
                existing.AudioValue = incoming.AudioValue;
                existing.EnglishText = incoming.EnglishText;
                existing.VietnameseText = incoming.VietnameseText;
                existing.WeekKeys = incoming.WeekKeys;
                existing.LevelKeys = incoming.LevelKeys;
                existing.GameKeys = incoming.GameKeys;
                existing.SortOrder = incoming.SortOrder;
            }
        }

        return items.Count;
    }

    private static List<MediaAsset> ImportMedia(XLWorkbook workbook, string sheetName, string type)
    {
        return ReadSheet(workbook, sheetName).Select((row, index) =>
        {
            var name = Cell(row, 0);
            var url = Cell(row, 1);
            var unitSlug = Cell(row, 2);
            return new MediaAsset
            {
                SourceKey = $"{sheetName}:{index}:{GameRules.NormalizeLookupKey(name)}:{GameRules.NormalizeLookupKey(unitSlug)}",
                Type = type,
                Name = name,
                NormalizedName = GameRules.NormalizeLookupKey(name),
                OriginalUrl = url,
                Url = url,
                UnitSlug = unitSlug,
                LevelKeys = GameRules.ExtractLevelKeys(HeaderValue(row, "levels", "level", "class", "classes")),
                WeekKeys = HeaderValue(row, "week", "weeks", "tuan", "tuần"),
                GameKeys = GameRules.ExtractGameKeys(HeaderValue(row, "game", "program", "bundle", "track", "dataset"))
            };
        }).Where(x => !string.IsNullOrWhiteSpace(x.Name) && !string.IsNullOrWhiteSpace(x.Url)).ToList();
    }

    private static List<GameItem> ImportGameSheet(XLWorkbook workbook, string sheetName, string gameType)
    {
        return ReadSheet(workbook, sheetName).Select((row, index) => new GameItem
        {
            SourceKey = $"{sheetName}:{index}:{GameRules.NormalizeLookupKey(Cell(row, 0))}:{GameRules.NormalizeLookupKey(Cell(row, 2))}",
            GameType = gameType,
            UnitSlug = Cell(row, 0),
            ImageValue = Cell(row, 1),
            EnglishText = Cell(row, 2),
            VietnameseText = Cell(row, 3),
            AudioValue = HeaderValue(row, "audio", "audio_url", "audio url"),
            LevelKeys = GameRules.ExtractLevelKeys(HeaderValue(row, "levels", "level", "class", "classes")),
            WeekKeys = HeaderValue(row, "week", "weeks", "tuan", "tuần"),
            GameKeys = GameRules.ExtractGameKeys(HeaderValue(row, "game", "program", "bundle", "track", "dataset")),
            SortOrder = index
        }).Where(x => !string.IsNullOrWhiteSpace(x.UnitSlug) && !string.IsNullOrWhiteSpace(x.EnglishText)).ToList();
    }

    private static List<Dictionary<string, string>> ReadSheet(XLWorkbook workbook, string sheetName)
    {
        if (!workbook.TryGetWorksheet(sheetName, out var sheet)) return [];
        var used = sheet.RangeUsed();
        if (used is null || used.RowCount() < 2) return [];

        var headers = used.FirstRow().Cells().Select(x => GameRules.NormalizeLookupKey(x.GetString())).ToArray();
        var rows = new List<Dictionary<string, string>>();

        foreach (var row in used.RowsUsed().Skip(1))
        {
            var values = row.Cells(1, headers.Length).Select(x => x.GetString().Trim()).ToArray();
            if (values.All(string.IsNullOrWhiteSpace)) continue;

            var item = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            for (var i = 0; i < headers.Length; i++)
            {
                item[$"col{i}"] = i < values.Length ? values[i] : string.Empty;
                if (!string.IsNullOrWhiteSpace(headers[i])) item[headers[i]] = i < values.Length ? values[i] : string.Empty;
            }
            rows.Add(item);
        }

        return rows;
    }

    private static string Cell(Dictionary<string, string> row, int index) => row.TryGetValue($"col{index}", out var value) ? value : string.Empty;

    private static string HeaderValue(Dictionary<string, string> row, params string[] names)
    {
        foreach (var name in names.Select(GameRules.NormalizeLookupKey))
        {
            if (row.TryGetValue(name, out var value)) return value;
        }
        return string.Empty;
    }

    private static int ToInt(string value, int fallback) => int.TryParse(value, out var parsed) ? parsed : fallback;
}
