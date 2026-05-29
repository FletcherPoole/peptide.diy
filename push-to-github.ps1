# One-time: logs into GitHub, creates repo "peptide-diy", and pushes.
# Run in PowerShell:  cd c:\Users\Fletcher\Downloads\Hi  ;  .\push-to-github.ps1

$ErrorActionPreference = "Stop"
$git = "C:\Program Files\Git\bin\git.exe"
$gh  = "C:\Program Files\GitHub CLI\gh.exe"
$root = $PSScriptRoot

Set-Location $root

$auth = & $gh auth status 2>&1 | Out-String
if ($auth -notmatch "Logged in") {
    Write-Host "`n=== Sign in to GitHub (browser will open) ===`n"
    & $gh auth login -h github.com -p https -w
}

$repo = "peptide.diy"
$exists = & $gh repo view $repo 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "`nCreating github.com/$repo and pushing...`n"
    & $gh repo create $repo --public --source=. --remote=origin --push `
        --description "peptide.diy: peptide research protocols and guides"
} else {
    Write-Host "`nRepo exists. Pushing to origin main...`n"
    $remote = & $git remote get-url origin 2>$null
    if (-not $remote) {
        $user = (& $gh api user -q .login)
        & $git remote add origin "https://github.com/$user/$repo.git"
    }
    & $git push -u origin main
}

$user = (& $gh api user -q .login)
Write-Host "`nDone. Enable Pages: https://github.com/$user/$repo/settings/pages"
Write-Host "Site URL: https://www.peptide.diy/"
Write-Host "Custom domain configured in _config.yml and CNAME.`n"
