using System.Text.Json;
using System.Text.RegularExpressions;

namespace WeWin.Api;

public static partial class VietnameseTextHelper
{
    private static readonly Lazy<Dictionary<string, string>> StaticDictionary = new(LoadStaticDictionary);

    [GeneratedRegex(@"^[\d\s.,]+$")]
    private static partial Regex NumericPlaceholderPattern();

    [GeneratedRegex(@"^\d+\.\d+$")]
    private static partial Regex LessonMarkerPattern();

    public static string NormalizeEnglishKey(string? value) => GameRules.NormalizeLookupKey(value);

    public static bool IsPlaceholder(string? value)
    {
        var text = (value ?? string.Empty).Trim();
        if (string.IsNullOrWhiteSpace(text)) return true;
        if (NumericPlaceholderPattern().IsMatch(text)) return true;
        if (LessonMarkerPattern().IsMatch(text)) return true;
        return false;
    }

    public static string Resolve(string englishText, string currentValue, IReadOnlyDictionary<string, string> lookup)
    {
        if (!IsPlaceholder(currentValue)) return currentValue.Trim();

        var key = NormalizeEnglishKey(englishText);
        if (string.IsNullOrWhiteSpace(key)) return string.Empty;
        if (lookup.TryGetValue(key, out var resolved)) return resolved;
        if (StaticDictionary.Value.TryGetValue(key, out var manual)) return manual;
        return string.Empty;
    }

    public static Dictionary<string, string> BuildLookup(IEnumerable<(string EnglishText, string VietnameseText)> items)
    {
        var lookup = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        foreach (var (englishText, vietnameseText) in StaticDictionary.Value)
        {
            lookup[englishText] = vietnameseText;
        }

        foreach (var (englishText, vietnameseText) in items)
        {
            if (IsPlaceholder(vietnameseText)) continue;

            var key = NormalizeEnglishKey(englishText);
            if (string.IsNullOrWhiteSpace(key)) continue;
            lookup[key] = vietnameseText.Trim();
        }

        return lookup;
    }

    private static Dictionary<string, string> LoadStaticDictionary()
    {
        var candidates = new[]
        {
            Path.Combine(AppContext.BaseDirectory, "Data", "vietnamese-dictionary.json"),
            Path.Combine(Directory.GetCurrentDirectory(), "Data", "vietnamese-dictionary.json"),
        };

        foreach (var path in candidates)
        {
            if (!File.Exists(path)) continue;

            try
            {
                var json = File.ReadAllText(path);
                var parsed = JsonSerializer.Deserialize<Dictionary<string, string>>(json);
                if (parsed is { Count: > 0 })
                {
                    return new Dictionary<string, string>(parsed, StringComparer.OrdinalIgnoreCase);
                }
            }
            catch
            {
                // Fall through to empty dictionary.
            }
        }

        return new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
    }
}
