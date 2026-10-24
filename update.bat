@echo off
echo ==========================================
echo    MEMPERBARUI PORTOFOLIO KE GITHUB
echo    Arsitektur: Next.js Monorepo (pnpm)
echo ==========================================
echo.
cd /d "%~dp0"

git add -A
set /p commit_msg="Catatan perubahan (atau tekan Enter untuk default): "
if "%commit_msg%"=="" set commit_msg=chore: update konten portofolio

git commit -m "%commit_msg%"
git push origin main

echo.
echo ==========================================
echo  BERHASIL! Vercel akan otomatis deploy
echo  dalam 30-60 detik.
echo  Cek: https://adisparadis.github.io/portofolio/
echo ==========================================
pause
