import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { type User, onAuthStateChangedListener } from "./services/FirebaseManager"
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import "./App.css";
function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(setUser);
    return () => unsubscribe();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Home user={user} setUser={setUser} />} />

        <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />

        <Route path="*" element={<NotFound />} />
      </Routes >
    </Router >
  );
}

export default App;
