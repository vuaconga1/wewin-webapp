using Microsoft.EntityFrameworkCore;
using WeWin.Api.Data;

namespace WeWin.Api.Features.Media;

public static class MediaEndpoints
{
    public static IEndpointRouteBuilder MapMediaEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapPost("/api/admin/import/media", async (MediaImportService media) =>
        {
            return Results.Ok(ApiResponse.Ok(await media.DownloadPendingAsync()));
        });

        app.MapGet("/api/media/assets", async (WeWinDbContext db, string? type, string? status) =>
        {
            var query = db.MediaAssets.AsNoTracking();
            if (!string.IsNullOrWhiteSpace(type)) query = query.Where(x => x.Type == type);
            if (!string.IsNullOrWhiteSpace(status)) query = query.Where(x => x.DownloadStatus == status);
            var assets = await query.OrderBy(x => x.Type).ThenBy(x => x.Name).ToListAsync();
            return Results.Ok(ApiResponse.Ok(assets));
        });

        app.MapGet("/api/media/{id:int}", async (int id, WeWinDbContext db, IWebHostEnvironment env) =>
        {
            var asset = await db.MediaAssets.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
            if (asset is null) return Results.NotFound(ApiResponse.Fail("Media not found."));
            if (!string.IsNullOrWhiteSpace(asset.StoragePath))
            {
                var path = Path.Combine(env.WebRootPath ?? Path.Combine(env.ContentRootPath, "wwwroot"), asset.StoragePath);
                if (File.Exists(path)) return Results.File(path, asset.MimeType);
            }
            return Results.Redirect(asset.OriginalUrl);
        });

        return app;
    }
}
