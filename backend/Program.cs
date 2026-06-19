using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.EntityFrameworkCore;
using WeWin.Api;
using WeWin.Api.Data;
using WeWin.Api.Features.Games;
using WeWin.Api.Features.Import;
using WeWin.Api.Features.Media;
using WeWin.Api.Features.Speech;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        var origins = builder.Configuration.GetSection("Cors:Origins").Get<string[]>()
            ?? ["http://localhost:5173", "https://localhost:5173"];
        policy.WithOrigins(origins)
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddDbContext<WeWinDbContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
        ?? "Host=localhost;Port=5432;Database=wewin;Username=postgres;Password=postgres";
    options.UseNpgsql(connectionString);
});

builder.Services.Configure<FormOptions>(options =>
{
    options.MultipartBodyLengthLimit = 10 * 1024 * 1024;
});
builder.Services.AddRateLimiter(options =>
{
    options.AddFixedWindowLimiter("speech", limiter =>
    {
        limiter.PermitLimit = 20;
        limiter.Window = TimeSpan.FromMinutes(1);
        limiter.QueueLimit = 0;
    });
});
builder.Services.AddHttpClient();
builder.Services.AddMemoryCache();
builder.Services.AddSingleton<MediaAssetLookup>();
builder.Services.AddScoped<GameQueryService>();
builder.Services.AddScoped<ExcelWorkbookImporter>();
builder.Services.AddScoped<MediaImportService>();
builder.Services.AddScoped<SpeechAssessmentService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
else
{
    app.UseForwardedHeaders(new ForwardedHeadersOptions
    {
        ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto,
    });
}

if (app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}
app.UseCors("Frontend");
app.UseRateLimiter();
app.UseStaticFiles();

app.MapGet("/api/health", () => Results.Ok(ApiResponse.Ok(new { ok = true, message = "WeWIN .NET API is ready" })));
app.MapGameEndpoints();
app.MapImportEndpoints();
app.MapMediaEndpoints();
app.MapSpeechEndpoints();

app.Run();
