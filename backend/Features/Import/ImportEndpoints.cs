using WeWin.Api.Features.Media;

namespace WeWin.Api.Features.Import;

public static class ImportEndpoints
{
    public static IEndpointRouteBuilder MapImportEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapPost("/api/admin/import/excel", async (ExcelWorkbookImporter importer, MediaImportService media, IConfiguration config, bool downloadMedia = false) =>
        {
            var defaultPath = Path.GetFullPath(Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "GameWewin.xlsx"));
            var workbookPath = config["Seed:ExcelPath"] ?? defaultPath;
            var importResult = await importer.ImportAsync(workbookPath);
            object? mediaResult = null;
            if (downloadMedia)
            {
                mediaResult = await media.DownloadPendingAsync();
            }

            return Results.Ok(ApiResponse.Ok(new { import = importResult, media = mediaResult }));
        });

        return app;
    }
}
