using Microsoft.EntityFrameworkCore;

namespace WeWin.Api.Data;

public sealed class WeWinDbContext(DbContextOptions<WeWinDbContext> options) : DbContext(options)
{
    public DbSet<UserAccount> Users => Set<UserAccount>();
    public DbSet<UnitEntity> Units => Set<UnitEntity>();
    public DbSet<LevelEntity> Levels => Set<LevelEntity>();
    public DbSet<WeekEntity> Weeks => Set<WeekEntity>();
    public DbSet<GameItem> GameItems => Set<GameItem>();
    public DbSet<MediaAsset> MediaAssets => Set<MediaAsset>();
    public DbSet<GameSession> GameSessions => Set<GameSession>();
    public DbSet<ScoreRecord> Scores => Set<ScoreRecord>();
    public DbSet<SpeechAttempt> SpeechAttempts => Set<SpeechAttempt>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<UserAccount>().HasIndex(x => x.Email).IsUnique();
        modelBuilder.Entity<UnitEntity>().HasIndex(x => x.Slug).IsUnique();
        modelBuilder.Entity<LevelEntity>().HasIndex(x => x.Key).IsUnique();
        modelBuilder.Entity<WeekEntity>().HasIndex(x => x.Key).IsUnique();
        modelBuilder.Entity<GameItem>().HasIndex(x => new { x.GameType, x.UnitSlug, x.SortOrder });
        modelBuilder.Entity<GameItem>().HasIndex(x => x.SourceKey).IsUnique();
        modelBuilder.Entity<MediaAsset>().HasIndex(x => new { x.Type, x.NormalizedName, x.UnitSlug });
        modelBuilder.Entity<MediaAsset>().HasIndex(x => x.SourceKey).IsUnique();
        modelBuilder.Entity<GameSession>().HasIndex(x => new { x.UserId, x.GameType, x.StartedAt });
        modelBuilder.Entity<ScoreRecord>().HasIndex(x => new { x.GameSessionId, x.CreatedAt });
        modelBuilder.Entity<SpeechAttempt>().HasIndex(x => new { x.GameSessionId, x.CreatedAt });
    }
}
