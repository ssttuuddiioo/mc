@echo off
REM Michigan Central Map - Stop Server Script
REM Double-click this file to stop all running servers

echo ========================================
echo  Stopping Michigan Central Map Server
echo ========================================
echo.

echo Stopping all servers on port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000 ^| findstr LISTENING') do (
    echo Stopping server (PID: %%a)
    taskkill /F /PID %%a
)

echo.
echo All servers stopped!
echo.
pause

