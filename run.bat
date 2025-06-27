@echo off
cd code_guard_ai
call npm i
start "Frontend Server" cmd /k "title Frontend Server && npm run dev"
cd ..\Server
start "Flask API Server" cmd /k "title Flask API Server && flask run"