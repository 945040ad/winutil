using System.Collections.Generic;
using System.Diagnostics;
using SwiftlyApp.Models;

namespace SwiftlyApp.Services
{
    public static class PackageManagerService
    {
        public static void InstallApps(List<AppEntry> apps)
        {
            if (apps.Count == 0) return;

            foreach (var app in apps)
            {
                if (!string.IsNullOrEmpty(app.Winget))
                {
                    ExecuteCommand($"winget install --id {app.Winget} --accept-source-agreements --accept-package-agreements");
                }
                else if (!string.IsNullOrEmpty(app.Choco) && app.Choco != "na")
                {
                    ExecuteCommand($"choco install {app.Choco} -y");
                }
            }
        }

        public static void UninstallApps(List<AppEntry> apps)
        {
            if (apps.Count == 0) return;

            foreach (var app in apps)
            {
                if (!string.IsNullOrEmpty(app.Winget))
                {
                    ExecuteCommand($"winget uninstall --id {app.Winget}");
                }
                else if (!string.IsNullOrEmpty(app.Choco) && app.Choco != "na")
                {
                    ExecuteCommand($"choco uninstall {app.Choco} -y");
                }
            }
        }

        private static void ExecuteCommand(string command)
        {
            var processInfo = new ProcessStartInfo("cmd.exe", $"/c {command}")
            {
                CreateNoWindow = false, // Keep false for now so user can see winget progress
                UseShellExecute = true
            };

            var process = Process.Start(processInfo);
            process?.WaitForExit();
        }
    }
}
