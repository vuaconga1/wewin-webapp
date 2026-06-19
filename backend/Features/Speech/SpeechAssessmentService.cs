using Microsoft.CognitiveServices.Speech;
using Microsoft.CognitiveServices.Speech.Audio;
using Microsoft.CognitiveServices.Speech.PronunciationAssessment;
using WeWin.Api.Data;

namespace WeWin.Api.Features.Speech;

public sealed class SpeechAssessmentService(IConfiguration config, WeWinDbContext db)
{
    public async Task<SpeechAssessmentDto> AssessAsync(IFormFile audio, SpeechAssessmentRequest request)
    {
        var threshold = GetThreshold(request.LevelKey);
        var key = config["AzureSpeech:Key"];
        var region = config["AzureSpeech:Region"];

        if (string.IsNullOrWhiteSpace(key) || string.IsNullOrWhiteSpace(region))
        {
            var fallback = new SpeechAssessmentDto(false, string.Empty, 0, 0, threshold, "Azure Speech chưa được cấu hình. Thêm AzureSpeech:Key và AzureSpeech:Region.");
            await SaveAttemptAsync(request, fallback);
            return fallback;
        }

        var extension = Path.GetExtension(audio.FileName);
        var tempFile = Path.Combine(Path.GetTempPath(), $"wewin-speech-{Guid.NewGuid():N}{extension}");

        await using (var stream = File.Create(tempFile))
        {
            await audio.CopyToAsync(stream);
        }

        try
        {
            if (!string.Equals(extension, ".wav", StringComparison.OrdinalIgnoreCase))
            {
                var unsupported = new SpeechAssessmentDto(false, string.Empty, 0, 0, threshold, "Audio đã upload nhưng backend cần WAV để Azure chấm ổn định. Frontend mới sẽ ghi WAV bằng WebAudio.");
                await SaveAttemptAsync(request, unsupported);
                return unsupported;
            }

            var speechConfig = SpeechConfig.FromSubscription(key, region);
            speechConfig.SpeechRecognitionLanguage = "en-US";
            using var audioConfig = AudioConfig.FromWavFileInput(tempFile);
            using var recognizer = new SpeechRecognizer(speechConfig, audioConfig);

            var pronunciationConfig = new PronunciationAssessmentConfig(
                request.TargetText,
                GradingSystem.HundredMark,
                Granularity.Phoneme,
                enableMiscue: true);
            pronunciationConfig.ApplyTo(recognizer);

            var result = await recognizer.RecognizeOnceAsync();
            var pronunciation = PronunciationAssessmentResult.FromResult(result);
            var matched = pronunciation.AccuracyScore >= threshold;
            var dto = new SpeechAssessmentDto(
                matched,
                result.Text ?? string.Empty,
                pronunciation.PronunciationScore,
                pronunciation.AccuracyScore,
                threshold,
                matched ? "Bé phát âm tốt!" : "Bé thử đọc lại chậm và rõ hơn nhé.");

            await SaveAttemptAsync(request, dto);
            return dto;
        }
        finally
        {
            try { File.Delete(tempFile); } catch { }
        }
    }

    private double GetThreshold(string? levelKey)
    {
        var normalized = GameRules.NormalizeLevelKey(levelKey);
        return normalized switch
        {
            "pre11" => 55,
            "pre12" => 60,
            "pre2" => 65,
            "pre3" => 70,
            _ => config.GetValue("AzureSpeech:DefaultThreshold", 65d)
        };
    }

    private async Task SaveAttemptAsync(SpeechAssessmentRequest request, SpeechAssessmentDto dto)
    {
        db.SpeechAttempts.Add(new SpeechAttempt
        {
            GameSessionId = request.GameSessionId,
            UnitSlug = request.UnitSlug ?? string.Empty,
            LevelKey = request.LevelKey ?? string.Empty,
            WeekKey = request.WeekKey ?? string.Empty,
            TargetText = request.TargetText,
            Transcript = dto.Transcript,
            PronunciationScore = dto.PronunciationScore,
            AccuracyScore = dto.AccuracyScore,
            Threshold = dto.Threshold,
            Matched = dto.Matched
        });
        await db.SaveChangesAsync();
    }
}

public sealed record SpeechAssessmentRequest(
    string TargetText,
    string? UnitSlug,
    string? LevelKey,
    string? WeekKey,
    long? GameSessionId);
