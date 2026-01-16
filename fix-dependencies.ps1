# ¡EJECUTA ESTE SCRIPT DESDE LA CARPETA RAÍZ (prueba2)!
$backendPath = "backend"
$frontendPath = "my-react-app"

Write-Host "🔧 Limpiando backend..." -ForegroundColor Cyan
Set-Location $backendPath
Remove-Item -Path "node_modules" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "package-lock.json" -Force -ErrorAction SilentlyContinue
npm install
Write-Host "✅ Backend reparado" -ForegroundColor Green

Write-Host "🔧 Limpiando frontend..." -ForegroundColor Cyan
Set-Location "..\$frontendPath"
Remove-Item -Path "node_modules" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "package-lock.json" -Force -ErrorAction SilentlyContinue
npm install
Write-Host "✅ Frontend reparado" -ForegroundColor Green

Write-Host "🎉 ¡Listo! Ejecuta:" -ForegroundColor Magenta
Write-Host "   cd backend && npm run dev" -ForegroundColor Yellow
Write-Host "   cd my-react-app && npm run dev" -ForegroundColor Yellow