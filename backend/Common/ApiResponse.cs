using System.Text.Json.Serialization;

namespace WeWin.Api;

public sealed class ApiResponse
{
    public bool Success { get; init; }
    public string? Message { get; init; }
    public object? Data { get; init; }

    [JsonExtensionData]
    public Dictionary<string, object?> Extra { get; init; } = [];

    public static ApiResponse Ok(object? data, Dictionary<string, object?>? extra = null)
    {
        return new ApiResponse { Success = true, Data = data, Extra = extra ?? [] };
    }

    public static ApiResponse Fail(string message)
    {
        return new ApiResponse { Success = false, Message = message };
    }
}
