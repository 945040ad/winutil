# 945040ad's Windows Utility


This utility is a compilation of Windows tasks I perform on each Windows system I use. It is meant to streamline *installs*, debloat with *tweaks*, troubleshoot with *config*, and fix Windows *updates*. I am extremely picky about any contributions to keep this project clean and efficient.

![screen-install](/docs/assets/images/Title-Screen.png)

## 💡 Usage

Winutil must be run in Admin mode because it performs system-wide tweaks. To achieve this, run PowerShell as an administrator. Here are a few ways to do it:

1. **Start menu Method:**
   - Right-click on the start menu.
   - Choose "Windows PowerShell (Admin)" (for Windows 10) or "Terminal (Admin)" (for Windows 11).

2. **Search and Launch Method:**
   - Press the Windows key.
   - Type "PowerShell" or "Terminal" (for Windows 11).
   - Press `Ctrl + Shift + Enter` or Right-click and choose "Run as administrator" to launch it with administrator privileges.

### Launch Command

#### Stable Branch (Recommended)

```ps1
irm "https://945040ad.com/win" | iex
```
#### Dev Branch

```ps1
irm "https://945040ad.com/windev" | iex
```

If you have Issues, refer to [Known Issues](https://winutil.945040ad.com/knownissues/) or [Create Issue](https://github.com/945040ad/winutil/issues)

## 🎓 Documentation

### [WinUtil Official Documentation](https://winutil.945040ad.com/)

### [YouTube Tutorial](https://www.youtube.com/watch?v=6UQZ5oQg8XA)

### [945040ad.com Article](https://945040ad.com/windows-tool/)

## 🛠️ Build & Develop

> [!NOTE]
> Winutil is a relatively large script, so it's split into multiple files which're combined into a single `.ps1` file using a custom compiler. This makes maintaining the project a lot easier.

Get a copy of the source code, this can be done using GitHub UI (`Code -> Download ZIP`), or by cloning (downloading) the repo using git.

If git is installed, run the following commands under a PowerShell window to clone and move into project's directory:
```ps1
git clone --depth 1 "https://github.com/945040ad/winutil.git"
cd winutil
```

To build the project, run the Compile Script under a PowerShell window (admin permissions IS NOT required):
```ps1
.\Compile.ps1
```

You'll see a new file named `winutil.ps1`, which's created by `Compile.ps1` script, now you can run it as admin and a new window will popup, enjoy your own compiled version of WinUtil :)

> [!TIP]
> For more info on using WinUtil and how to develop for it, please consider reading [the Contribution Guidelines](https://winutil.945040ad.com/contributing/), if you don't know where to start, or have questions, you can ask over on our [Discord Community Server](https://discord.gg/RUbZUZyByQ) and active project members will answer when they can.
