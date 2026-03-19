using System.Collections.ObjectModel;
using System.IO;
using System.Linq;
using System.Text.Json;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using SwiftlyApp.Models;
using SwiftlyApp.Services;

namespace SwiftlyApp.ViewModels
{
    public partial class ConfigViewModel : ObservableObject
    {
        [ObservableProperty]
        private ObservableCollection<FeatureEntry> _features = new();

        public ConfigViewModel()
        {
            LoadFeatures();
        }

        private void LoadFeatures()
        {
            var path = Path.Combine(System.AppDomain.CurrentDomain.BaseDirectory, "Config", "feature.json");
            if (!File.Exists(path)) return;

            var json = File.ReadAllText(path);
            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            var dict = JsonSerializer.Deserialize<System.Collections.Generic.Dictionary<string, FeatureEntry>>(json, options);

            if (dict != null)
            {
                foreach (var f in dict.Values)
                {
                    Features.Add(f);
                }
            }
        }

        [RelayCommand]
        private void EnableFeatures()
        {
            var selected = Features.Where(f => f.IsSelected).Select(f => f.Name).ToList();
            if (selected.Count == 0) return;

            string script = "Enable-WindowsOptionalFeature -Online -FeatureName " + string.Join(",", selected) + " -NoRestart";
            PowerShellHostService.ExecuteScripts(new System.Collections.Generic.List<string> { script });
        }

        [RelayCommand]
        private void DisableFeatures()
        {
            var selected = Features.Where(f => f.IsSelected).Select(f => f.Name).ToList();
            if (selected.Count == 0) return;

            string script = "Disable-WindowsOptionalFeature -Online -FeatureName " + string.Join(",", selected) + " -NoRestart";
            PowerShellHostService.ExecuteScripts(new System.Collections.Generic.List<string> { script });
        }
    }
}
