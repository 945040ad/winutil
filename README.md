# Swiftly — Premium Windows Optimization Tool

![Swiftly](https://via.placeholder.com/800x200.png?text=Swiftly+-+Premium+Windows+Optimization)

Swiftly is a premium, lightweight Windows utility designed to streamline installs, debloat your system with safe tweaks, troubleshoot common issues, and boost overall speed.

Built with a focus on beautiful modern design, ease of use, and maximum performance without the bloat.

## 💡 How to Launch

Swiftly requires Administrator privileges to perform system-wide tweaks.

### The Easy Way (Terminal)
1. Right-click your Start button and open **Terminal (Admin)** or **Windows PowerShell (Admin)**.
2. Paste the following command and press Enter:
   ```powershell
   irm "https://raw.githubusercontent.com/945040ad/swiftly/main/swiftly.ps1" | iex
   ```

### Download the Standalone Executable
You can also download the pre-compiled `.exe` from our [Releases page](https://github.com/945040ad/swiftly/releases).
*Note: Due to how compilation works, you may need to add an exception in Windows Defender.*

---

## 🛠️ Build & Develop

Swiftly is a native C# WPF application designed for maximum performance and a premium user experience.

### Prerequisites
- Windows 10 or 11
- [.NET 8.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- Git (optional, for cloning)

### Local Setup & Development
1. Clone the repository:
   ```powershell
   git clone https://github.com/945040ad/swiftly.git
   cd swiftly\SwiftlyApp
   ```
2. Restore dependencies and build the project:
   ```powershell
   dotnet build
   ```
3. Run the application locally:
   ```powershell
   dotnet run
   ```

You can also open `SwiftlyApp.csproj` in Visual Studio 2022 or JetBrains Rider to develop, run, and debug the application seamlessly.

### Web Landing Page
The repository also includes the modern landing page for Swiftly.
To run it locally:
1. Navigate to the landing page directory:
```bash
cd LandingPage/swiftly-landing
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

---

## ⚖️ Credits & License

Swiftly is built upon the incredible foundational work of [Chris Titus's WinUtil project](https://github.com/ChrisTitusTech/winutil). This project aims to take that rock-solid foundation and elevate it with a new premium UI, expanded features, AI-optimization (coming soon), and a new direction.

Code is licensed under the MIT License.
