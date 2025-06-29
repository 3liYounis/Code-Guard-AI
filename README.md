# Code-Guard-AI

> ⚡ AI-powered code review and quality analysis tool.

Code-Guard-AI is a full-stack developer tool that allows users to submit source code and receive structured feedback, quality scoring, and improvement recommendations — all powered by artificial intelligence and modern frontend frameworks.

---

## ✨ Features

- 🔍 **AI-Powered Static Analysis**: Get real-time suggestions and issue detection for your code.
- 🎯 **Quality Scoring System**: Evaluate code quality based on industry-standard metrics.
- 💡 **Improvement Suggestions**: Practical, contextual tips to improve your code.
- 🧠 **Flask-based Python Backend**: Integrates smart logic and AI models.
- ⚛️ **Beautiful React + Chakra UI Frontend**: User-friendly, fast, and responsive interface.
- 🖱️ **One-click Startup Script**: Easily launch the entire system via a `run.bat` file.

---

## 📁 Project Structure

```bash
Code-Guard-AI/
├── code_guard_ai/      # Frontend (React + Chakra UI + Vite)
├── Server/             # Backend (Flask API with Python)
├── run.bat             # Script to start both servers
├── README.md           # Project documentation
└── .git/               # Version control
📦 Tech Stack
Layer	Technology
Frontend	React 19, Chakra UI, React Router, Vite, TypeScript
Backend	Python 3, Flask, OpenAI API
Analysis	Static + AI-based code analysis
Styling	Emotion, Framer Motion
Visualization	Recharts, Chakra Charts
Dev Tools	ESLint, TypeScript, Zod

🔧 Setup Instructions
✅ Prerequisites
Node.js v18+

Python 3.9+

(Optional but recommended) virtualenv

▶️ Run the Project (Windows)
To launch the application with one command:

bash
Always show details

run.bat
This will:

Navigate to the frontend directory

Install all npm dependencies

Start the React development server

Start the Python Flask API server in a new terminal window

📁 Dependencies Overview
🔹 Frontend (package.json)
Core packages:

react, react-dom, react-router-dom

@chakra-ui/react, @chakra-ui/icons, @chakra-ui/charts

react-syntax-highlighter — for styled code blocks

react-hook-form, zod — for robust form and schema validation

firebase — for user auth or data storage (optional)

vite, typescript, eslint — for modern DX

🔸 Backend (requirements.txt) (not included in ZIP)
You should include:

txt
Always show details

🧪 Scripts
From the package.json:

json
Always show details

"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
📈 Future Improvements
🧪 Add unit and integration tests

🔐 User authentication with roles

🌐 Deploy using Vercel (frontend) + Render or Fly.io (backend)

💬 Support for multiple programming languages

📊 User dashboard and history

🙌 Contribution
Feel free to open an issue or submit a PR. All contributions are welcome!

👨‍💻 Author

📄 License
"""