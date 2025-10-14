@echo off
REM Michigan Central Map - Windows Auto-Update & Launch Script
REM Double-click this file to pull latest changes and start the app

echo ========================================
echo  Michigan Central Map - Auto Launcher
echo ========================================
echo.

REM Change to the script's directory
cd /d "%~dp0"

echo [1/4] Pulling latest changes from Git...
git pull origin main
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Git pull failed!
    echo Please check your internet connection and try again.
    pause
    exit /b 1
)
echo     Done!
echo.

echo [2/4] Checking for running servers on port 8081...
REM Kill any existing Python servers on port 8081
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8081 ^| findstr LISTENING') do (
    echo     Stopping existing server (PID: %%a)
    taskkill /F /PID %%a >nul 2>&1
)
echo     Done!
echo.

echo [3/4] Starting local development server...
start /min cmd /c "python -m http.server 8081 || py -m http.server 8081"
timeout /t 2 /nobreak >nul
echo     Server started on port 8081
echo.

echo [4/4] Opening browser...
start http://localhost:8081
echo     Done!
echo.

echo ========================================
echo  Server is running at:
echo  http://localhost:8081
echo ========================================
echo.
echo Press Ctrl+C to stop the server
echo Or simply close this window
echo.

REM Keep the window open to show server logs
python -m http.server 8081 2>nul || py -m http.server 8081

