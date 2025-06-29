import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { type User, onAuthStateChangedListener } from "./services/FirebaseManager"
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import "./App.css";
import LoadingPage from "./pages/LoadingPage";

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setUser(user);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage isLoading={isLoading} />} />

        <Route path="/home" element={<Home user={user} setUser={setUser} />} />

        <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />

        <Route path="*" element={<NotFound />} />
      </Routes >
    </Router >
  );
}

export default App;
