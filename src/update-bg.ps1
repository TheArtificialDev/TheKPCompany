
$files = Get-ChildItem -Path "src" -Recurse -Include "*.tsx"
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName
    $updated = $content -replace "bg-white", "bg-[#f8f7f3]"
    if ($content -ne $updated) {
        Write-Host "Updating $($file.FullName)"
        Set-Content -Path $file.FullName -Value $updated
    }
}

