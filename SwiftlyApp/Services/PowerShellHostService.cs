using System.Collections.Generic;
using System.Diagnostics;
using System.IO;

namespace SwiftlyApp.Services
{
    public static class PowerShellHostService
    {
        public static void ExecuteScripts(List<string> scripts)
        {
            if (scripts == null || scripts.Count == 0) return;

            string fullScript = string.Join("\n", scripts);
            
            // Create a temp file to hold the script
            string tempFile = Path.GetTempFileName() + ".ps1";
            File.WriteAllText(tempFile, fullScript);

            var processInfo = new ProcessStartInfo("powershell.exe", $"-NoProfile -ExecutionPolicy Bypass -File \"{tempFile}\"")
            {
                CreateNoWindow = true,
                WindowStyle = ProcessWindowStyle.Hidden
            };

            var process = Process.Start(processInfo);
            process?.WaitForExit();

            // Cleanup
            if (File.Exists(tempFile))
            {
                try { File.Delete(tempFile); } catch { }
            }
        }
    }
}
