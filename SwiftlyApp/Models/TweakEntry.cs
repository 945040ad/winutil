using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace SwiftlyApp.Models
{
    public class RegistryOp
    {
        [JsonPropertyName("Path")]
        public string Path { get; set; } = string.Empty;
        
        [JsonPropertyName("Name")]
        public string Name { get; set; } = string.Empty;
        
        [JsonPropertyName("Value")]
        public string Value { get; set; } = string.Empty;
        
        [JsonPropertyName("Type")]
        public string Type { get; set; } = string.Empty;
        
        [JsonPropertyName("OriginalValue")]
        public string OriginalValue { get; set; } = string.Empty;
    }

    public class ServiceOp
    {
        [JsonPropertyName("Name")]
        public string Name { get; set; } = string.Empty;
        
        [JsonPropertyName("StartupType")]
        public string StartupType { get; set; } = string.Empty;
        
        [JsonPropertyName("OriginalType")]
        public string OriginalType { get; set; } = string.Empty;
    }

    public class TweakEntry
    {
        [JsonPropertyName("Content")]
        public string Content { get; set; } = string.Empty;

        [JsonPropertyName("Description")]
        public string Description { get; set; } = string.Empty;

        [JsonPropertyName("category")]
        public string Category { get; set; } = string.Empty;

        [JsonPropertyName("panel")]
        public string Panel { get; set; } = string.Empty;

        [JsonPropertyName("registry")]
        public List<RegistryOp> Registry { get; set; } = new();

        [JsonPropertyName("service")]
        public List<ServiceOp> Service { get; set; } = new();

        [JsonPropertyName("InvokeScript")]
        public List<string> InvokeScript { get; set; } = new();

        [JsonPropertyName("UndoScript")]
        public List<string> UndoScript { get; set; } = new();

        [JsonPropertyName("link")]
        public string Link { get; set; } = string.Empty;

        // UI Binding state
        [JsonIgnore]
        public bool IsSelected { get; set; }
    }
}
