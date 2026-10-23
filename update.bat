@echo off
echo ==========================================
echo    MEMPERBARUI PORTOFOLIO KE GITHUB
echo ==========================================
echo.
cd /d "%~dp0"
git add .
set /p commit_msg="Tuliskan catatan perubahan (atau tekan Enter untuk default): "
if "%commit_msg%"=="" set commit_msg=Update konten portofolio

git commit -m "%commit_msg%"
git push origin main
echo.
echo ==========================================
echo  BERHASIL! Website sedang di-update otomatis.
echo  Cek perubahannya dalam 1 menit di:
echo  https://adisparadis.github.io/portofolio/
echo ==========================================
pause
