using System.Text.Json.Serialization;

namespace SwiftlyApp.Models
{
    public class FeatureEntry
    {
        [JsonPropertyName("Name")]
        public string Name { get; set; } = string.Empty;

        [JsonPropertyName("Content")]
        public string Content { get; set; } = string.Empty;
        
        [JsonPropertyName("Description")]
        public string Description { get; set; } = string.Empty;

        // UI Binding state
        [JsonIgnore]
        public bool IsSelected { get; set; }
    }
}
