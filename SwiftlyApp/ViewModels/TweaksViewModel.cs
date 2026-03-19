using System.Collections.ObjectModel;
using System.Linq;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using SwiftlyApp.Models;
using SwiftlyApp.Services;

namespace SwiftlyApp.ViewModels
{
    public partial class TweaksViewModel : ObservableObject
    {
        [ObservableProperty]
        private ObservableCollection<string> _categories = new();

        private string? _selectedCategory;
        public string? SelectedCategory
        {
            get => _selectedCategory;
            set
            {
                if (SetProperty(ref _selectedCategory, value))
                {
                    FilterTweaks();
                }
            }
        }

        [ObservableProperty]
        private ObservableCollection<TweakEntry> _filteredTweaks = new();

        private readonly Dictionary<string, TweakEntry> _allTweaks;

        public TweaksViewModel()
        {
            _allTweaks = ConfigLoader.LoadTweaks();

            var distinctCategories = _allTweaks.Values
                .Select(t => t.Category)
                .Where(c => !string.IsNullOrEmpty(c))
                .Distinct()
                .OrderBy(c => c)
                .ToList();

            foreach (var cat in distinctCategories)
            {
                Categories.Add(cat);
            }

            if (Categories.Any())
            {
                SelectedCategory = Categories.First();
            }
        }

        private void FilterTweaks()
        {
            FilteredTweaks.Clear();
            if (string.IsNullOrEmpty(SelectedCategory)) return;

            var filtered = _allTweaks.Values
                .Where(t => t.Category == SelectedCategory)
                .OrderBy(t => t.Content);

            foreach (var tweak in filtered)
            {
                FilteredTweaks.Add(tweak);
            }
        }

        [RelayCommand]
        private void RunTweaks()
        {
            var selected = _allTweaks.Values.Where(t => t.IsSelected).ToList();
            foreach(var tweak in selected)
            {
                RegistryService.ApplyRegistryOps(tweak.Registry, isUndo: false);
                ServiceManagerService.ApplyServiceOps(tweak.Service, isUndo: false);
                PowerShellHostService.ExecuteScripts(tweak.InvokeScript);
            }
        }

        [RelayCommand]
        private void UndoSelected()
        {
            var selected = _allTweaks.Values.Where(t => t.IsSelected).ToList();
            foreach(var tweak in selected)
            {
                RegistryService.ApplyRegistryOps(tweak.Registry, isUndo: true);
                ServiceManagerService.ApplyServiceOps(tweak.Service, isUndo: true);
                PowerShellHostService.ExecuteScripts(tweak.UndoScript);
            }
        }
    }
}
