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
builder.Configuration.AddJsonFile("appsettings.Local.json", optional: true, reloadOnChange: true);

builder.Services.AddOpenApi();
builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        var configured = builder.Configuration.GetSection("Cors:Origins").Get<string[]>() ?? [];
        var extra = (builder.Configuration["CORS_ORIGINS"] ?? string.Empty)
            .Split(',', StringSplitOptions.RemoveEmptyEntries);
        // Browsers send Origin without a trailing slash; a stray "/" or space in env vars silently breaks CORS.
        var origins = configured.Concat(extra)
            .Select(x => x.Trim().TrimEnd('/'))
            .Where(x => x.Length > 0)
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .ToArray();
        if (origins.Length == 0) origins = ["http://localhost:5173", "https://localhost:5173"];
        policy.WithOrigins(origins)
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddDbContext<WeWinDbContext>(options =>
{
    var connectionString = NormalizePostgresConnectionString(
        builder.Configuration.GetConnectionString("DefaultConnection")
        ?? "Host=localhost;Port=5432;Database=wewin;Username=postgres;Password=postgres");
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

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<WeWinDbContext>();
    try
    {
        await db.Database.MigrateAsync();
    }
    catch (Exception ex)
    {
        var logger = scope.ServiceProvider.GetRequiredService<ILoggerFactory>().CreateLogger("Startup");
        logger.LogCritical(ex, "Database migrate failed. Check ConnectionStrings__DefaultConnection format (use Host=...; not postgresql://).");
        throw;
    }
}

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
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        var feature = context.Features.Get<Microsoft.AspNetCore.Diagnostics.IExceptionHandlerFeature>();
        var message = feature?.Error?.GetBaseException().Message ?? "Unhandled server error";
        context.Response.StatusCode = StatusCodes.Status500InternalServerError;
        context.Response.ContentType = "application/json";
        await context.Response.WriteAsJsonAsync(ApiResponse.Fail(message));
    });
});
app.UseRateLimiter();
app.UseStaticFiles();

app.MapGet("/api/health", () => Results.Ok(ApiResponse.Ok(new { ok = true, message = "WeWIN .NET API is ready" })));
app.MapGet("/api/health/db", async (WeWinDbContext db) =>
{
    var canConnect = await db.Database.CanConnectAsync();
    var units = canConnect ? await db.Units.AsNoTracking().CountAsync() : -1;
    return Results.Ok(ApiResponse.Ok(new { ok = canConnect, units }));
});
app.MapGameEndpoints();
app.MapImportEndpoints();
app.MapMediaEndpoints();
app.MapSpeechEndpoints();

app.Run();

static string NormalizePostgresConnectionString(string raw)
{
    var value = (raw ?? string.Empty).Trim().Trim('"').Trim('\'');
    if (value.Length == 0)
    {
        return "Host=localhost;Port=5432;Database=wewin;Username=postgres;Password=postgres";
    }

    // Neon dashboard copies postgresql://... — convert to Npgsql key=value form.
    if (value.StartsWith("postgres://", StringComparison.OrdinalIgnoreCase)
        || value.StartsWith("postgresql://", StringComparison.OrdinalIgnoreCase))
    {
        var uri = new Uri(value);
        var userInfo = uri.UserInfo.Split(':', 2);
        var user = Uri.UnescapeDataString(userInfo.ElementAtOrDefault(0) ?? string.Empty);
        var password = Uri.UnescapeDataString(userInfo.ElementAtOrDefault(1) ?? string.Empty);
        var database = uri.AbsolutePath.Trim('/');
        return string.Join(';',
            $"Host={uri.Host}",
            $"Port={(uri.Port > 0 ? uri.Port : 5432)}",
            $"Database={database}",
            $"Username={user}",
            $"Password={password}",
            "SSL Mode=Require",
            "Trust Server Certificate=true");
    }

    // Strip libpq-only options that can break Npgsql on some hosts.
    return value
        .Replace("channel_binding=require", string.Empty, StringComparison.OrdinalIgnoreCase)
        .Replace("Channel Binding=Require", string.Empty, StringComparison.OrdinalIgnoreCase)
        .Replace(";;", ";")
        .Trim(';')
        .Trim();
}
