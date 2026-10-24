@echo off
echo ==========================================
echo    MENJALANKAN NEXT.JS PORTOFOLIO DEV
echo ==========================================
echo.
cd /d "%~dp0"
echo Membuka server di http://localhost:3000 ...
pnpm.cmd dev
pause
