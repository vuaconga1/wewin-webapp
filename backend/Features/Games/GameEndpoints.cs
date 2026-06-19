namespace WeWin.Api.Features.Games;

public static class GameEndpoints
{
    public static IEndpointRouteBuilder MapGameEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet("/api/app/bootstrap", async (string? game, GameQueryService games) =>
        {
            var gameKey = GameRules.NormalizeGameKey(game) ?? "kindergarten";
            var payload = new
            {
                units = await games.GetUnitsAsync(null, gameKey),
                levels = await games.GetLevelsAsync(),
                weeks = await games.GetWeeksAsync(),
                gameBgImageUrl = string.Empty,
                gameMenuBackgroundMap = new Dictionary<string, string>()
            };
            return Results.Ok(ApiResponse.Ok(payload, new Dictionary<string, object?>
            {
                ["units"] = payload.units,
                ["levels"] = payload.levels,
                ["weeks"] = payload.weeks,
                ["gameBgImageUrl"] = payload.gameBgImageUrl,
                ["gameMenuBackgroundMap"] = payload.gameMenuBackgroundMap
            }));
        });

        app.MapGet("/api/units", async (string? level, string? game, GameQueryService games) =>
        {
            var units = await games.GetUnitsAsync(level, game);
            return Results.Ok(ApiResponse.Ok(units, new Dictionary<string, object?> { ["units"] = units }));
        });

        app.MapGet("/api/game/all", async (string slug, string? level, string? week, string? game, GameQueryService games) =>
        {
            var data = await games.GetAllGameDataAsync(slug, level, week, game);
            return Results.Ok(ApiResponse.Ok(new
            {
                listenchoose = data.Listenchoose,
                lookchoose = data.Lookchoose,
                pronunciation = data.Pronunciation
            }));
        });

        app.MapGet("/api/game/listenchoose", async (string slug, string? level, string? week, string? game, GameQueryService games) =>
        {
            return Results.Ok(ApiResponse.Ok(await games.GetListenChooseAsync(slug, level, week, game)));
        });

        app.MapGet("/api/game/lookchoose", async (string slug, string? level, string? week, string? game, GameQueryService games) =>
        {
            return Results.Ok(ApiResponse.Ok(await games.GetLookChooseAsync(slug, level, week, game)));
        });

        app.MapGet("/api/game/pronunciation", async (string slug, string? level, string? week, string? game, GameQueryService games) =>
        {
            return Results.Ok(ApiResponse.Ok(await games.GetPronunciationAsync(slug, level, week, game)));
        });

        app.MapPost("/api/game/session", async (GameSessionRequest request, GameQueryService games) =>
        {
            return Results.Ok(ApiResponse.Ok(await games.CreateSessionAsync(request)));
        });

        app.MapPost("/api/game/score", async (ScoreRequest request, GameQueryService games) =>
        {
            return Results.Ok(ApiResponse.Ok(await games.AddScoreAsync(request)));
        });

        return app;
    }
}
