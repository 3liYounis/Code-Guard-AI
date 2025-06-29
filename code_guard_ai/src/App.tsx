import { Heading, Stack } from '@chakra-ui/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { type User, onAuthStateChangedListener } from "./services/FirebaseManager"
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import "./App.css";
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
  if (isLoading)
    return (
      <Stack justifyContent="center" alignItems="center" gap={0}>
        <Heading fontFamily="cursive" fontWeight={700} fontSize={20}>Hang tight, Great Things Take Time 😁</Heading>
        <DotLottieReact
          src="https://lottie.host/cad67bcc-7ad3-4d77-93db-40ce643401ca/GXhagfCZJX.lottie"
          loop
          autoplay
        />
      </Stack>
    );
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
