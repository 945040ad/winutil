using System.Collections.ObjectModel;
using System.Linq;
using System.Windows.Input;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using SwiftlyApp.Models;
using SwiftlyApp.Services;

namespace SwiftlyApp.ViewModels
{
    public partial class InstallViewModel : ObservableObject
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
                    FilterApps();
                }
            }
        }

        [ObservableProperty]
        private ObservableCollection<AppEntry> _filteredApps = new();

        private readonly Dictionary<string, AppEntry> _allApps;

        public InstallViewModel()
        {
            _allApps = ConfigLoader.LoadApplications();

            var distinctCategories = _allApps.Values
                .Select(a => a.Category)
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

        private void FilterApps()
        {
            FilteredApps.Clear();
            if (string.IsNullOrEmpty(SelectedCategory)) return;

            var filtered = _allApps.Values
                .Where(a => a.Category == SelectedCategory)
                .OrderBy(a => a.Content);

            foreach (var app in filtered)
            {
                FilteredApps.Add(app);
            }
        }

        [RelayCommand]
        private void InstallSelected()
        {
            var selected = _allApps.Values.Where(a => a.IsSelected).ToList();
            PackageManagerService.InstallApps(selected);
        }

        [RelayCommand]
        private void UninstallSelected()
        {
            var selected = _allApps.Values.Where(a => a.IsSelected).ToList();
            PackageManagerService.UninstallApps(selected);
        }
    }
}
