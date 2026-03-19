using System.Collections.Generic;
using System.Diagnostics;
using SwiftlyApp.Models;

namespace SwiftlyApp.Services
{
    public static class ServiceManagerService
    {
        public static void ApplyServiceOps(List<ServiceOp> ops, bool isUndo = false)
        {
            foreach (var op in ops)
            {
                var targetType = isUndo ? op.OriginalType : op.StartupType;
                
                string startMode = targetType.ToLower() switch
                {
                    "disabled" => "disabled",
                    "manual" => "demand",
                    "automatic" => "auto",
                    "automaticdelayedstart" => "delayed-auto",
                    _ => "demand"
                };

                // Due to cross-platform compatibility limits of ServiceController in .NET core without specific packages
                // We use sc.exe to modify service states cleanly
                var processInfo = new ProcessStartInfo("sc.exe", $"config \"{op.Name}\" start= {startMode}")
                {
                    CreateNoWindow = true,
                    WindowStyle = ProcessWindowStyle.Hidden
                };

                Process.Start(processInfo)?.WaitForExit();
            }
        }
    }
}
