using Microsoft.Win32;
using System.Collections.Generic;

namespace SwiftlyApp.Services
{
    public static class RegistryService
    {
        public static void ApplyRegistryOps(List<Models.RegistryOp> ops, bool isUndo = false)
        {
            foreach (var op in ops)
            {
                var valueStr = isUndo ? op.OriginalValue : op.Value;

                // Handle <RemoveEntry> specially
                if (valueStr == "<RemoveEntry>")
                {
                    DeleteValue(op.Path, op.Name);
                    continue;
                }

                object valueToSet = valueStr;
                RegistryValueKind kind = RegistryValueKind.String;

                if (op.Type.Equals("DWord", System.StringComparison.OrdinalIgnoreCase))
                {
                    kind = RegistryValueKind.DWord;
                    if (int.TryParse(valueStr, out int num))
                        valueToSet = num;
                }
                else if (op.Type.Equals("QWord", System.StringComparison.OrdinalIgnoreCase))
                {
                    kind = RegistryValueKind.QWord;
                    if (long.TryParse(valueStr, out long num))
                        valueToSet = num;
                }

                SetValue(op.Path, op.Name, valueToSet, kind);
            }
        }

        private static void SetValue(string path, string name, object value, RegistryValueKind kind)
        {
            try
            {
                var hive = GetHive(path);
                var subKey = GetSubKey(path);
                using var key = hive?.CreateSubKey(subKey);
                key?.SetValue(name, value, kind);
            }
            catch { /* Ignore access denied in this port for now */ }
        }

        private static void DeleteValue(string path, string name)
        {
            try
            {
                var hive = GetHive(path);
                var subKey = GetSubKey(path);
                using var key = hive?.OpenSubKey(subKey, true);
                key?.DeleteValue(name, false);
            }
            catch { }
        }

        private static RegistryKey? GetHive(string path)
        {
            if (path.StartsWith("HKLM")) return Registry.LocalMachine;
            if (path.StartsWith("HKCU")) return Registry.CurrentUser;
            if (path.StartsWith("HKCR")) return Registry.ClassesRoot;
            if (path.StartsWith("HKU")) return Registry.Users;
            return null;
        }

        private static string GetSubKey(string path)
        {
            var parts = path.Split(new[] { ":\\" }, 2, System.StringSplitOptions.None);
            return parts.Length > 1 ? parts[1] : string.Empty;
        }
    }
}
