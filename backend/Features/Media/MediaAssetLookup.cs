using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using WeWin.Api.Data;

namespace WeWin.Api.Features.Media;

public sealed class MediaAssetLookup(IMemoryCache cache, IServiceScopeFactory scopeFactory)
{
    private const string CacheKey = "wewin:media-assets-index:v1";
    private static readonly TimeSpan CacheDuration = TimeSpan.FromMinutes(10);

    public async Task<MediaAssetIndex> GetIndexAsync(CancellationToken cancellationToken = default)
    {
        if (cache.TryGetValue(CacheKey, out MediaAssetIndex? cached) && cached is not null)
        {
            return cached;
        }

        using var scope = scopeFactory.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<WeWinDbContext>();
        var assets = await db.MediaAssets.AsNoTracking().ToListAsync(cancellationToken);
        var index = MediaAssetIndex.Build(assets);
        cache.Set(CacheKey, index, CacheDuration);
        return index;
    }

    public void Invalidate() => cache.Remove(CacheKey);
}

public sealed class MediaAssetIndex
{
    private readonly Dictionary<string, List<MediaAsset>> _byNormalizedName = new(StringComparer.OrdinalIgnoreCase);
    private readonly Dictionary<string, List<MediaAsset>> _byOriginalUrl = new(StringComparer.OrdinalIgnoreCase);

    public static MediaAssetIndex Empty { get; } = new();

    public static MediaAssetIndex Build(IEnumerable<MediaAsset> assets)
    {
        var index = new MediaAssetIndex();
        foreach (var asset in assets)
        {
            if (!string.IsNullOrWhiteSpace(asset.NormalizedName))
            {
                var typeKey = BuildTypeKey(asset.Type, asset.NormalizedName);
                Add(index._byNormalizedName, typeKey, asset);
            }

            if (!string.IsNullOrWhiteSpace(asset.OriginalUrl))
            {
                var urlKey = BuildTypeKey(asset.Type, asset.OriginalUrl);
                Add(index._byOriginalUrl, urlKey, asset);
            }
        }

        return index;
    }

    public IReadOnlyList<MediaAsset> FindByNormalizedName(string type, string normalizedName)
    {
        return _byNormalizedName.TryGetValue(BuildTypeKey(type, normalizedName), out var list)
            ? list
            : [];
    }

    public IReadOnlyList<MediaAsset> FindByOriginalUrl(string type, string originalUrl)
    {
        return _byOriginalUrl.TryGetValue(BuildTypeKey(type, originalUrl), out var list)
            ? list
            : [];
    }

    private static string BuildTypeKey(string type, string key)
        => $"{type.Trim().ToLowerInvariant()}::{key.Trim().ToLowerInvariant()}";

    private static void Add(Dictionary<string, List<MediaAsset>> map, string key, MediaAsset asset)
    {
        if (!map.TryGetValue(key, out var list))
        {
            list = [];
            map[key] = list;
        }

        list.Add(asset);
    }
}
