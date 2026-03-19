using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using SwiftlyApp.Services;
using SwiftlyApp.Models;
using System.Collections.Generic;

namespace SwiftlyApp.ViewModels
{
    public partial class UpdatesViewModel : ObservableObject
    {
        [RelayCommand]
        private void ApplyDefault()
        {
            // Reset policies
            var ops = new List<RegistryOp>
            {
                new RegistryOp { Path = @"HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate", Name = "DeferFeatureUpdates", Value = "<RemoveEntry>" },
                new RegistryOp { Path = @"HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate", Name = "DeferFeatureUpdatesPeriodInDays", Value = "<RemoveEntry>" },
                new RegistryOp { Path = @"HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU", Name = "NoAutoUpdate", Value = "<RemoveEntry>" }
            };
            RegistryService.ApplyRegistryOps(ops);
        }

        [RelayCommand]
        private void ApplySecurity()
        {
            // Defer Feature updates, allow security
            var ops = new List<RegistryOp>
            {
                new RegistryOp { Path = @"HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate", Name = "DeferFeatureUpdates", Value = "1", Type = "Dword" },
                new RegistryOp { Path = @"HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate", Name = "DeferFeatureUpdatesPeriodInDays", Value = "730", Type = "Dword" }, // 2 years
                new RegistryOp { Path = @"HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU", Name = "NoAutoUpdate", Value = "0", Type = "Dword" }
            };
            RegistryService.ApplyRegistryOps(ops);
        }

        [RelayCommand]
        private void DisableUpdates()
        {
            // Block everything
            var ops = new List<RegistryOp>
            {
                new RegistryOp { Path = @"HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU", Name = "NoAutoUpdate", Value = "1", Type = "Dword" }
            };
            RegistryService.ApplyRegistryOps(ops);
        }
    }
}
