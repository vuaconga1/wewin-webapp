namespace WeWin.Api.Data;

public sealed class UserAccount
{
    public int Id { get; set; }
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public string DisplayName { get; set; } = string.Empty;
    public string Role { get; set; } = "student";
    public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.UtcNow;
}

public sealed class LevelEntity
{
    public int Id { get; set; }
    public string Key { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string AgeLabel { get; set; } = string.Empty;
    public int SortOrder { get; set; }
}

public sealed class WeekEntity
{
    public int Id { get; set; }
    public string Key { get; set; } = string.Empty;
    public string Label { get; set; } = string.Empty;
    public int SortOrder { get; set; }
}

public sealed class UnitEntity
{
    public int Id { get; set; }
    public int Order { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string Icon { get; set; } = "📘";
    public string Status { get; set; } = "Active";
    public string LevelKeys { get; set; } = string.Empty;
    public string GameKeys { get; set; } = string.Empty;
}

public sealed class GameItem
{
    public int Id { get; set; }
    public string SourceKey { get; set; } = string.Empty;
    public string GameType { get; set; } = string.Empty;
    public string UnitSlug { get; set; } = string.Empty;
    public string ImageValue { get; set; } = string.Empty;
    public string AudioValue { get; set; } = string.Empty;
    public string EnglishText { get; set; } = string.Empty;
    public string VietnameseText { get; set; } = string.Empty;
    public string WeekKeys { get; set; } = string.Empty;
    public string LevelKeys { get; set; } = string.Empty;
    public string GameKeys { get; set; } = string.Empty;
    public int SortOrder { get; set; }
}

public sealed class MediaAsset
{
    public int Id { get; set; }
    public string SourceKey { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string NormalizedName { get; set; } = string.Empty;
    public string OriginalUrl { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
    public string StoragePath { get; set; } = string.Empty;
    public string MimeType { get; set; } = string.Empty;
    public string Checksum { get; set; } = string.Empty;
    public string DownloadStatus { get; set; } = "pending";
    public string UnitSlug { get; set; } = string.Empty;
    public string WeekKeys { get; set; } = string.Empty;
    public string LevelKeys { get; set; } = string.Empty;
    public string GameKeys { get; set; } = string.Empty;
}

public sealed class GameSession
{
    public long Id { get; set; }
    public int? UserId { get; set; }
    public string GameType { get; set; } = string.Empty;
    public string UnitSlug { get; set; } = string.Empty;
    public string LevelKey { get; set; } = string.Empty;
    public string WeekKey { get; set; } = string.Empty;
    public int Score { get; set; }
    public int CorrectCount { get; set; }
    public int TotalQuestions { get; set; }
    public DateTimeOffset StartedAt { get; set; } = DateTimeOffset.UtcNow;
    public DateTimeOffset? CompletedAt { get; set; }
}

public sealed class ScoreRecord
{
    public long Id { get; set; }
    public long GameSessionId { get; set; }
    public string QuestionText { get; set; } = string.Empty;
    public bool Correct { get; set; }
    public int Points { get; set; }
    public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.UtcNow;
}

public sealed class SpeechAttempt
{
    public long Id { get; set; }
    public long? GameSessionId { get; set; }
    public string UnitSlug { get; set; } = string.Empty;
    public string LevelKey { get; set; } = string.Empty;
    public string WeekKey { get; set; } = string.Empty;
    public string TargetText { get; set; } = string.Empty;
    public string Transcript { get; set; } = string.Empty;
    public double PronunciationScore { get; set; }
    public double AccuracyScore { get; set; }
    public double Threshold { get; set; }
    public bool Matched { get; set; }
    public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.UtcNow;
}
