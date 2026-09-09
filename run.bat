@echo off
title AIADMK Gummidipoondi Constituency Web Portal
echo =======================================================
echo Starting AIADMK Gummidipoondi Web Portal Server...
echo =======================================================

:: Navigate to the directory of this batch file
cd /d "%~dp0"

:: Check if Python is installed
where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo Python is installed. Starting web server at http://localhost:8000...
    
    :: Wait 1 second and open default browser to localhost
    timeout /t 1 /nobreak >nul
    start http://localhost:8000
    
    :: Launch Python local server
    python -m http.server 8000
) else (
    echo Python is not detected on your system.
    echo Opening index.html directly in your default browser...
    echo (Note: Running a server is recommended for full features).
    
    timeout /t 1 /nobreak >nul
    start index.html
)
