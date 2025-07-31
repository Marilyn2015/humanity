// Pseudocode Plan for Humanity Social Media Platform

// 1. Project Setup
//    - Initialize React project (e.g., via Create React App or Vite)
//    - Install dependencies: react-router-dom, axios, state management (Redux or Context), UI library (e.g., Tailwind CSS)

// 2. Folder Structure
//    /src
//      /api           # API service modules (auth, posts, users, comments)
//      /components    # Reusable UI components (Button, Card, Avatar, LandingPage, etc.)
//      /features      # Feature modules: Auth, Feed, Profile, Post, Notification, Messaging
//      /hooks         # Custom hooks (useAuth, useFetch, useInfiniteScroll)
//      /context       # Context providers: AuthContext
//      /store         # Redux slices if using Redux
//      /pages         # Route pages: HomePage, LoginPage, RegisterPage, LandingPage, etc.
//      /routes        # Route definitions
//      App.js         # Application root with routing
//      index.js       # Entry point

// 3. Authentication Flow
//    - Login / Register pages
//    - JWT token storage (HTTP-only cookies or localStorage)
//    - Protected routes with route guard

// 4. Landing Page
//    - Starfield canvas animation
//    - 3D globe via Three.js
//    - Calls to action for Register and Login

// 5. Styling & Theming
//    - Tailwind CSS
//    - LandingPage.css for layout and canvas positioning

// ----------------------
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// ----------------------
// src/App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './components/LandingPage';
import { AuthProvider, useAuth } from './context/AuthContext';

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
  );
}

// ----------------------
// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // TODO: fetch current user on mount
  }, []);

  const login = async (credentials) => {
    // TODO: implement login
  };

  const register = async (data) => {
    // TODO: implement registration
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

// ----------------------
// src/components/LandingPage.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import './LandingPage.css';

export default function LandingPage() {
  const starRef = useRef(null);
  const globeRef = useRef(null);

  useEffect(() => {
    const canvas = starRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 300 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        base: Math.random() * 0.5 + 0.2,
        phase: Math.random() * Math.PI * 2
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() * 0.002;
      stars.forEach(s => {
        ctx.globalAlpha = s.base + Math.sin(t + s.phase) * 0.1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  useEffect(() => {
    const canvas = globeRef.current;
    if (!canvas) return;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 3;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 3, 5);
    scene.add(light);

    new THREE.TextureLoader().load(
      'https://marilyn2015.github.io/Humanity/earthmap1k.jpg',
      texture => {
        const globe = new THREE.Mesh(
          new THREE.SphereGeometry(1, 32, 32),
          new THREE.MeshStandardMaterial({ map: texture })
        );
        scene.add(globe);
        (function animate() {
          globe.rotation.y += 0.005;
          renderer.setSize(canvas.clientWidth, canvas.clientHeight);
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        })();
      }
    );

    function onResize() {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="landing-container">
      <canvas ref={starRef} className="starfield" />
      <div className="content">
        <canvas ref={globeRef} className="globe" />
        <h1>#HUMANITY</h1>
        <p>Sign in or register to continue</p>
        <Link to="/register" className="button">Register</Link>
        <Link to="/login" className="button">Log in</Link>
      </div>
    </div>
);
