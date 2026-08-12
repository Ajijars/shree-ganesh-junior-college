# Shree Ganesh Junior College — GitHub + Vercel auto-deploy setup
# Run once after: gh auth login

$ErrorActionPreference = "Stop"
$RepoName = "shree-ganesh-junior-college"
$ProjectDir = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)

Set-Location $ProjectDir

Write-Host "`n=== Step 1: Check GitHub login ===" -ForegroundColor Cyan
gh auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host "`nPlease log in first:" -ForegroundColor Yellow
    Write-Host "  gh auth login" -ForegroundColor White
    Write-Host "Then run this script again.`n"
    exit 1
}

$username = gh api user -q .login
Write-Host "Logged in as: $username" -ForegroundColor Green

Write-Host "`n=== Step 2: Create GitHub repo & push ===" -ForegroundColor Cyan
$remoteExists = git remote get-url origin 2>$null
if (-not $remoteExists) {
    gh repo create $RepoName --public --source=. --remote=origin --push
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Repo may already exist — adding remote and pushing..." -ForegroundColor Yellow
        git remote add origin "https://github.com/$username/$RepoName.git" 2>$null
        git push -u origin main
    }
} else {
    Write-Host "Remote already set: $remoteExists"
    git push -u origin main
}

$GitUrl = "https://github.com/$username/$RepoName"
Write-Host "GitHub repo: $GitUrl" -ForegroundColor Green

Write-Host "`n=== Step 3: Connect Vercel to GitHub (auto-deploy on push) ===" -ForegroundColor Cyan
npx vercel git connect $GitUrl --yes
if ($LASTEXITCODE -ne 0) {
    Write-Host "`nIf git connect fails, connect manually:" -ForegroundColor Yellow
    Write-Host "  1. https://vercel.com/dashboard -> shree-ganesh-junior-college -> Settings -> Git"
    Write-Host "  2. Connect repository: $GitUrl"
}

Write-Host "`n=== Done! ===" -ForegroundColor Green
Write-Host "Live site:  https://shree-ganesh-junior-college.vercel.app"
Write-Host "GitHub:     $GitUrl"
Write-Host "`nEvery push to 'main' will auto-deploy to Vercel.`n"
