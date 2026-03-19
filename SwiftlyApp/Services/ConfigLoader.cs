using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using SwiftlyApp.Models;

namespace SwiftlyApp.Services
{
    public class ConfigLoader
    {
        private static readonly JsonSerializerOptions _options = new()
        {
            PropertyNameCaseInsensitive = true
        };

        public static Dictionary<string, AppEntry> LoadApplications()
        {
            var path = Path.Combine(System.AppDomain.CurrentDomain.BaseDirectory, "Config", "applications.json");
            if (!File.Exists(path)) return new Dictionary<string, AppEntry>();

            var json = File.ReadAllText(path);
            return JsonSerializer.Deserialize<Dictionary<string, AppEntry>>(json, _options) ?? new Dictionary<string, AppEntry>();
        }

        public static Dictionary<string, TweakEntry> LoadTweaks()
        {
            var path = Path.Combine(System.AppDomain.CurrentDomain.BaseDirectory, "Config", "tweaks.json");
            if (!File.Exists(path)) return new Dictionary<string, TweakEntry>();

            var json = File.ReadAllText(path);
            return JsonSerializer.Deserialize<Dictionary<string, TweakEntry>>(json, _options) ?? new Dictionary<string, TweakEntry>();
        }
    }
}
