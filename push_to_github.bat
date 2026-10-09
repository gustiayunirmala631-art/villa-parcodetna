@echo off
title Push to GitHub - Villa Parcodetna
echo ========================================================
echo   Mengupload Villa Parcodetna ke GitHub...
echo ========================================================
echo.
"%LOCALAPPDATA%\Programs\Git\cmd\git.exe" push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo   [BERHASIL] Kode sudah terupload ke GitHub!
    echo   Langkah selanjutnya: Buka Cloudflare Pages dan deploy.
    echo ========================================================
) else (
    echo ========================================================
    echo   [CATATAN] Jika muncul jendela login, silakan pilih 
    echo   "Sign in with your browser" untuk mengizinkan GitHub.
    echo ========================================================
)
echo.
pause
