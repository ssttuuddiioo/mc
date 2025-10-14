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

echo [2/4] Checking for running servers on port 3000...
REM Kill any existing servers on port 3000
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000 ^| findstr LISTENING') do (
    echo     Stopping existing server (PID: %%a)
    taskkill /F /PID %%a >nul 2>&1
)
echo     Done!
echo.

echo [3/4] Starting local development server...
start /min cmd /c "npx serve . -p 3000"
timeout /t 3 /nobreak >nul
echo     Server started on port 3000
echo.

echo [4/4] Opening browser...
start http://localhost:3000
echo     Done!
echo.

echo ========================================
echo  Server is running at:
echo  http://localhost:3000
echo ========================================
echo.
echo Press Ctrl+C to stop the server
echo Or simply close this window
echo.

REM Keep the window open to show server logs
npx serve . -p 3000

