namespace WeWin.Api.Features.Speech;

public static class SpeechEndpoints
{
    public static IEndpointRouteBuilder MapSpeechEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapPost("/api/speech/pronunciation", async (HttpRequest request, SpeechAssessmentService speech) =>
        {
            if (!request.HasFormContentType)
            {
                return Results.BadRequest(ApiResponse.Fail("Audio upload must be multipart/form-data."));
            }

            var form = await request.ReadFormAsync();
            var audio = form.Files.GetFile("audio");
            var targetText = form["targetText"].ToString();

            if (audio is null || audio.Length == 0)
            {
                return Results.BadRequest(ApiResponse.Fail("Missing audio file."));
            }

            if (audio.Length > 10 * 1024 * 1024)
            {
                return Results.BadRequest(ApiResponse.Fail("Audio file is too large."));
            }

            if (string.IsNullOrWhiteSpace(targetText))
            {
                return Results.BadRequest(ApiResponse.Fail("Missing targetText."));
            }

            var result = await speech.AssessAsync(audio, new SpeechAssessmentRequest(
                targetText,
                form["unitSlug"].ToString(),
                form["levelKey"].ToString(),
                form["weekKey"].ToString(),
                long.TryParse(form["gameSessionId"].ToString(), out var sessionId) ? sessionId : null));

            return Results.Ok(ApiResponse.Ok(result));
        }).RequireRateLimiting("speech");

        return app;
    }
}
