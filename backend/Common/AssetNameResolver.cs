namespace WeWin.Api;

public static class AssetNameResolver
{
    private static readonly Dictionary<string, string> AudioAliases = new(StringComparer.OrdinalIgnoreCase)
    {
        ["labybug"] = "ladybug",
        ["caterpilla"] = "caterpillar",
        ["televison"] = "television",
    };

    public static IEnumerable<string> GetImageNameCandidates(string? name)
    {
        var cleaned = (name ?? string.Empty).Trim();
        if (string.IsNullOrWhiteSpace(cleaned)) yield break;

        yield return cleaned;

        if (!cleaned.Contains("zodiac", StringComparison.OrdinalIgnoreCase))
        {
            yield return $"{cleaned} zodiac";
        }
    }

    public static string ResolveAudioFileName(string? name)
    {
        var cleaned = (name ?? string.Empty).Trim();
        if (string.IsNullOrWhiteSpace(cleaned)) return string.Empty;

        if (AudioAliases.TryGetValue(cleaned, out var alias)) return alias;

        const string zodiacSuffix = " zodiac";
        if (cleaned.EndsWith(zodiacSuffix, StringComparison.OrdinalIgnoreCase))
        {
            return cleaned[..^zodiacSuffix.Length].Trim();
        }

        return cleaned;
    }
}
