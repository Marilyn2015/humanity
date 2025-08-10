// src/App.jsx
import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages (adjust paths if yours differ)
import LandingPage from "./components/LandingPage";
import UniversePage from "./pages/UniversePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage"; // if you don’t have this yet, create a stub

// Optional: lazy-load heavy pages
// const UniversePage = lazy(() => import("./pages/UniversePage"));
// const LoginPage = lazy(() => import("./pages/LoginPage"));
// const RegisterPage = lazy(() => import("./pages/RegisterPage"));
// const ProfilePage = lazy(() => import("./pages/ProfilePage"));

function ScrollToTop() {
  React.useEffect(() => {
    const unlisten = () => window.scrollTo({ top: 0, behavior: "instant" });
    // react-router v6 doesn't expose history.listen—just scroll on hashchange
    window.addEventListener("hashchange", unlisten);
    return () => window.removeEventListener("hashchange", unlisten);
  }, []);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div style={fallbackStyle}>Loading…</div>}>
        <Routes>
          {/* Landing */}
          <Route path="/" element={<LandingPage />} />

          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* App pages */}
          <Route path="/universe" element={<UniversePage />} />
          <Route path="/profile/:uid" element={<ProfilePage />} />

          {/* 404 -> home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

const fallbackStyle = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  background: "#000",
  color: "#fff",
  fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif",
};
