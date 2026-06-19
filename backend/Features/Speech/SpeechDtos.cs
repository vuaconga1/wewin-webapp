namespace WeWin.Api.Features.Speech;

public sealed record SpeechAssessmentDto(
    bool Matched,
    string Transcript,
    double PronunciationScore,
    double AccuracyScore,
    double Threshold,
    string Feedback);
