#!/bin/bash
set -e
echo "🚀 Starting setup..."
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
    source "$NVM_DIR/nvm.sh"
else
    echo "❌ NVM not found. Installing..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    source "$NVM_DIR/nvm.sh"
fi
echo "📦 Installing Node.js 20 with NVM..."
nvm install 20
nvm use 20
nvm alias default 20
echo "🐍 Installing Python requirements..."
pip install -r Server/requirements.txt
echo "📁 Moving into frontend directory: code_guard_ai"
cd code_guard_ai || exit
echo "📦 Installing frontend npm packages..."
npm install
echo "🌐 Launching Frontend Server..."
gnome-terminal --title="Frontend Server" -- bash -c "npm run dev; exec bash"
echo "📁 Moving into backend directory: ../Server"
cd ../Server || exit
echo "🔌 Launching Flask API Server..."
gnome-terminal --title="Flask API Server" -- bash -c "flask run; exec bash"
echo "✅ Setup complete. Both servers are now running in separate terminals."