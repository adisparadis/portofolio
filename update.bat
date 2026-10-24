@echo off
echo ==========================================
echo    MEMPERBARUI PORTOFOLIO KE GITHUB
echo ==========================================
echo.
cd /d "%~dp0"

git add -A
set /p commit_msg="Catatan perubahan (atau tekan Enter untuk default): "
if "%commit_msg%"=="" set commit_msg=chore: update data portofolio

git commit -m "%commit_msg%"
git push origin main

echo.
echo ==========================================
echo  BERHASIL! Website di GitHub Pages akan
echo  otomatis ter-update dalam 30-60 detik:
echo  https://adisparadis.github.io/portofolio/
echo ==========================================
pause
