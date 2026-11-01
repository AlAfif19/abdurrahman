# Jalankan dari folder proyek: D:\project\portofolioabdurrahman
# Hasil: batch1.zip dan batch2.zip di folder yang sama

$root = (Get-Location).Path

# Jenis file yang diambil dan yang dilewati
$ext  = '.js','.jsx','.ts','.tsx','.vue','.svelte','.html','.css','.scss','.json','.md','.mjs','.cjs'
$skip = 'node_modules|\\dist\\|\\build\\|\\\.next\\|\\\.git\\|package-lock\.json|yarn\.lock|pnpm-lock\.yaml|\\\.env'

# Kumpulkan file frontend, docs, dan .md di root
$files  = @()
foreach ($p in 'frontend','docs') {
  if (Test-Path $p) { $files += Get-ChildItem -Recurse -File -Path $p }
}
$files += Get-ChildItem -File -Path . -Filter *.md
$files  = $files | Where-Object { $ext -contains $_.Extension.ToLower() -and $_.FullName -notmatch $skip }

# Bagi dua: komponen section vs sisanya
# Ubah pola ini jika folder komponenmu bernama lain (mis. src\app atau src\ui)
$compPattern = '\\src\\(components|sections|pages|views)\\'
$batch2 = $files | Where-Object { $_.FullName -match $compPattern }
$batch1 = $files | Where-Object { $_.FullName -notmatch $compPattern }

function Make-Zip($list, $name) {
  $stage = Join-Path $env:TEMP $name
  if (Test-Path $stage) { Remove-Item $stage -Recurse -Force }
  foreach ($f in $list) {
    $rel  = $f.FullName.Substring($root.Length).TrimStart('\')
    $dest = Join-Path $stage $rel
    New-Item -ItemType Directory -Path (Split-Path $dest) -Force | Out-Null
    Copy-Item $f.FullName $dest
  }
  $zip = Join-Path $root "$name.zip"
  if (Test-Path $zip) { Remove-Item $zip -Force }
  Compress-Archive -Path "$stage\*" -DestinationPath $zip
  Remove-Item $stage -Recurse -Force
  "$name.zip : " + [math]::Round((Get-Item $zip).Length/1KB) + " KB, " + @($list).Count + " file"
}

Make-Zip $batch1 'batch1'
Make-Zip $batch2 'batch2'
