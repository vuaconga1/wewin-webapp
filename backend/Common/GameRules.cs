using System.Globalization;
using System.Text;
using WeWin.Api.Features.Games;

namespace WeWin.Api;

public static class GameRules
{
    public static readonly LevelDto[] DefaultLevels =
    [
        new("pre11", "Pre 1.1", "2 tuổi", "Pre 1.1: 2 tuổi"),
        new("pre12", "Pre 1.2", "3 tuổi", "Pre 1.2: 3 tuổi"),
        new("pre2", "Pre 2", "4-5 tuổi", "Pre 2: 4-5 tuổi"),
        new("pre3", "Pre 3", "6 tuổi", "Pre 3: 6 tuổi")
    ];

    private static readonly Dictionary<string, string> ClassLevelMap = new(StringComparer.OrdinalIgnoreCase)
    {
        ["1"] = "pre11",
        ["2"] = "pre12",
        ["3"] = "pre2",
        ["4"] = "pre3"
    };

    public static string[] SplitScope(string value)
    {
        return (value ?? string.Empty)
            .Split([',', ';', '|', '/', '&', '\n', ':'], StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
            .ToArray();
    }

    public static bool MatchesLevel(string rowValue, string? selected)
    {
        var normalizedSelected = NormalizeLevelKey(selected);
        if (string.IsNullOrWhiteSpace(normalizedSelected) || normalizedSelected == "all") return true;
        var rowKeys = SplitScope(rowValue).Select(NormalizeLevelKey).Where(x => !string.IsNullOrWhiteSpace(x)).ToArray();
        return rowKeys.Length == 0 || rowKeys.Contains(normalizedSelected);
    }

    public static bool MatchesWeek(string rowValue, string? selected)
    {
        var normalizedSelected = (selected ?? string.Empty).Trim();
        if (string.IsNullOrWhiteSpace(normalizedSelected) || normalizedSelected == "all") return true;
        var rowKeys = SplitScope(rowValue);
        return rowKeys.Length == 0 || rowKeys.Contains(normalizedSelected, StringComparer.OrdinalIgnoreCase);
    }

    public static bool MatchesGame(string rowValue, string? selected)
    {
        var normalizedSelected = NormalizeGameKey(selected) ?? "kindergarten";
        if (normalizedSelected == "all") return true;
        var rowKeys = SplitScope(rowValue).Select(NormalizeGameKey).Where(x => !string.IsNullOrWhiteSpace(x)).ToArray();
        return rowKeys.Length == 0 ? normalizedSelected == "kindergarten" : rowKeys.Contains(normalizedSelected);
    }

    public static string ExtractLevelKeys(string value)
    {
        return string.Join(",", SplitScope(value).Select(NormalizeLevelKey).Where(x => !string.IsNullOrWhiteSpace(x)).Distinct());
    }

    public static string ExtractGameKeys(string value)
    {
        return string.Join(",", SplitScope(value).Select(NormalizeGameKey).Where(x => !string.IsNullOrWhiteSpace(x)).Distinct());
    }

    public static string NormalizeLevelKey(string? value)
    {
        var normalized = NormalizeLookupKey(value);
        if (string.IsNullOrWhiteSpace(normalized)) return string.Empty;
        if (ClassLevelMap.TryGetValue(normalized, out var mapped)) return mapped;

        var aliases = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
        {
            ["pre11"] = "pre11",
            ["pre1.1"] = "pre11",
            ["pre12"] = "pre12",
            ["pre1.2"] = "pre12",
            ["pre2"] = "pre2",
            ["pre3"] = "pre3",
            ["2tuoi"] = "pre11",
            ["3tuoi"] = "pre12",
            ["45tuoi"] = "pre2",
            ["4to5"] = "pre2",
            ["6tuoi"] = "pre3"
        };

        return aliases.TryGetValue(normalized, out var key) ? key : string.Empty;
    }

    public static string? NormalizeGameKey(string? value)
    {
        var normalized = NormalizeLookupKey(value);
        if (string.IsNullOrWhiteSpace(normalized)) return null;
        if (normalized is "kindergarten" or "kindergarden" or "kg" or "kinder" or "kindy") return "kindergarten";
        if (normalized is "starter" or "starters") return "starters";
        if (normalized == "all") return "all";
        return null;
    }

    public static string NormalizeLookupKey(string? value)
    {
        var normalized = (value ?? string.Empty).Trim().ToLowerInvariant().Normalize(NormalizationForm.FormD);
        var builder = new StringBuilder();
        foreach (var ch in normalized)
        {
            var category = CharUnicodeInfo.GetUnicodeCategory(ch);
            if (category == UnicodeCategory.NonSpacingMark) continue;
            if (char.IsLetterOrDigit(ch)) builder.Append(ch);
        }

        return builder.ToString();
    }
}
