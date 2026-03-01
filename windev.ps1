<#
.SYNOPSIS
    This Script is used as a target for the https://945040ad.com/windev alias.
.DESCRIPTION
    This Script provides a simple way to start the bleeding edge release of winutil.
.EXAMPLE
    irm https://945040ad.com/windev | iex
    OR
    Run in Admin Powershell >  ./windev.ps1
#>

$latestTag = (Invoke-RestMethod "https://api.github.com/repos/945040ad/winutil/tags")[0].name
Invoke-RestMethod "https://github.com/945040ad/winutil/releases/download/$latestTag/winutil.ps1" | Invoke-Expression
