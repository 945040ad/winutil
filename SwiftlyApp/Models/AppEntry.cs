using System.Text.Json.Serialization;

namespace SwiftlyApp.Models
{
    public class AppEntry
    {
        [JsonPropertyName("category")]
        public string Category { get; set; } = string.Empty;

        [JsonPropertyName("choco")]
        public string Choco { get; set; } = string.Empty;

        [JsonPropertyName("content")]
        public string Content { get; set; } = string.Empty;

        [JsonPropertyName("description")]
        public string Description { get; set; } = string.Empty;

        [JsonPropertyName("link")]
        public string Link { get; set; } = string.Empty;

        [JsonPropertyName("winget")]
        public string Winget { get; set; } = string.Empty;

        [JsonPropertyName("foss")]
        public bool Foss { get; set; }

        // Added for UI state tracking
        [JsonIgnore]
        public bool IsSelected { get; set; }
    }
}
