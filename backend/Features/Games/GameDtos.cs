namespace WeWin.Api.Features.Games;

public sealed record UnitDto(int Order, string Name, string Slug, string Icon, string[] Levels);
public sealed record LevelDto(string Key, string Title, string AgeLabel, string Label);
public sealed record WeekDto(string Key, string Label);
public sealed record ListenChooseDto(string Audio, string Correct, string[] Options, string Text);
public sealed record LookChooseDto(string Image, string Correct, string[] Options, string Audio);
public sealed record PronunciationDto(string Image, string Audio, string En, string Vi);
public sealed record GameAllDto(
    IReadOnlyList<ListenChooseDto> Listenchoose,
    IReadOnlyList<LookChooseDto> Lookchoose,
    IReadOnlyList<PronunciationDto> Pronunciation);
public sealed record GameSessionRequest(string? GameType, string? UnitSlug, string? LevelKey, string? WeekKey, int TotalQuestions);
public sealed record ScoreRequest(long GameSessionId, string QuestionText, bool Correct, int Points);
