@echo off
REM
setlocal enabledelayedexpansion
echo 🚀 Starting setup...
REM
set NVM_DIR=%USERPROFILE%\.nvm
REM
if exist "%NVM_DIR%\nvm.sh" (
    call "%NVM_DIR%\nvm.sh"
) else (
    echo ❌ NVM not found. Installing...
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    call "%NVM_DIR%\nvm.sh"
)
REM
echo 📦 Installing Node.js 20 with NVM...
nvm install 20
nvm use 20
nvm alias default 20
REM
echo 🐍 Installing Python requirements...
pip install -r Server\requirements.txt
REM
echo 📁 Moving into frontend directory: code_guard_ai
cd code_guard_ai || exit
echo 📦 Installing frontend npm packages...
npm install
REM
echo 🌐 Launching Frontend Server...
start "Frontend Server" bash -c "npm run dev && exec bash"
REM
echo 📁 Moving into backend directory: ..\Server
cd ..\Server || exit
REM
echo 🔌 Launching Flask API Server...
start "Flask API Server" bash -c "flask run && exec bash"
echo ✅ Setup complete. Both servers are now running in separate terminals.
endlocal