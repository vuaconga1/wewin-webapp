using System.Security.Cryptography;
using Microsoft.EntityFrameworkCore;
using WeWin.Api.Data;

namespace WeWin.Api.Features.Media;

public sealed class MediaImportService(WeWinDbContext db, IHttpClientFactory httpClientFactory, IWebHostEnvironment env)
{
    public async Task<object> DownloadPendingAsync(CancellationToken cancellationToken = default)
    {
        var assets = await db.MediaAssets
            .Where(x => !string.IsNullOrWhiteSpace(x.OriginalUrl))
            .Where(x => string.IsNullOrWhiteSpace(x.StoragePath) || x.DownloadStatus != "downloaded")
            .OrderBy(x => x.Id)
            .ToListAsync(cancellationToken);

        var downloaded = 0;
        var failed = new List<object>();
        foreach (var asset in assets)
        {
            try
            {
                await DownloadAsync(asset, cancellationToken);
                downloaded++;
            }
            catch (Exception ex)
            {
                asset.DownloadStatus = "failed";
                failed.Add(new { asset.Id, asset.Name, error = ex.Message });
            }
        }

        await db.SaveChangesAsync(cancellationToken);
        return new { scanned = assets.Count, downloaded, failed };
    }

    private async Task DownloadAsync(MediaAsset asset, CancellationToken cancellationToken)
    {
        var client = httpClientFactory.CreateClient();
        client.Timeout = TimeSpan.FromSeconds(45);

        using var response = await client.GetAsync(asset.OriginalUrl, HttpCompletionOption.ResponseHeadersRead, cancellationToken);
        response.EnsureSuccessStatusCode();

        var bytes = await response.Content.ReadAsByteArrayAsync(cancellationToken);
        var checksum = Convert.ToHexString(SHA256.HashData(bytes)).ToLowerInvariant();
        var mimeType = response.Content.Headers.ContentType?.MediaType ?? GuessMimeType(asset.Type, asset.OriginalUrl);
        var extension = GuessExtension(mimeType, asset.OriginalUrl);
        var folder = Path.Combine(env.WebRootPath ?? Path.Combine(env.ContentRootPath, "wwwroot"), "media", asset.Type);
        Directory.CreateDirectory(folder);

        var fileName = $"{asset.Id}-{checksum[..12]}{extension}";
        var filePath = Path.Combine(folder, fileName);
        await File.WriteAllBytesAsync(filePath, bytes, cancellationToken);

        asset.Checksum = checksum;
        asset.MimeType = mimeType;
        asset.StoragePath = $"media/{asset.Type}/{fileName}";
        asset.Url = "/" + asset.StoragePath.Replace('\\', '/');
        asset.DownloadStatus = "downloaded";
    }

    private static string GuessMimeType(string type, string url)
    {
        var ext = Path.GetExtension(new Uri(url, UriKind.RelativeOrAbsolute).GetComponents(UriComponents.Path, UriFormat.Unescaped)).ToLowerInvariant();
        return ext switch
        {
            ".png" => "image/png",
            ".webp" => "image/webp",
            ".gif" => "image/gif",
            ".mp3" => "audio/mpeg",
            ".wav" => "audio/wav",
            ".ogg" => "audio/ogg",
            _ => type == "audio" ? "audio/mpeg" : "image/jpeg"
        };
    }

    private static string GuessExtension(string mimeType, string url)
    {
        var urlExt = Path.GetExtension(url.Split('?')[0]);
        if (!string.IsNullOrWhiteSpace(urlExt) && urlExt.Length <= 6) return urlExt;
        return mimeType.ToLowerInvariant() switch
        {
            "image/png" => ".png",
            "image/webp" => ".webp",
            "image/gif" => ".gif",
            "audio/mpeg" => ".mp3",
            "audio/wav" => ".wav",
            "audio/ogg" => ".ogg",
            _ => ".bin"
        };
    }
}
