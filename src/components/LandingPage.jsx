// src/components/LandingPage.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import "./LandingPage.css";

// --- Starfield ---
function Starfield({ numStars = 280 }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");

    const resize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random() * 0.8 + 0.2,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.globalCompositeOperation = "lighter";
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.a})`;
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [numStars]);

  return <canvas ref={canvasRef} className="lp-starfield" />;
}

// --- Center globe (Three.js) ---
function CenterGlobe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = 340, H = 340;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
    camera.position.z = 3.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(W, H);
    mount.appendChild(renderer.domElement);

    const geo = new THREE.SphereGeometry(1, 48, 48);
    // IMPORTANT: respect Vite base path on GitHub Pages
    const texUrl = import.meta.env.BASE_URL + "earthmap1k.jpg";
    const tex = new THREE.TextureLoader().load(texUrl);
    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.8,
      metalness: 0.6,
    });
    const sphere = new THREE.Mesh(geo, mat);
    scene.add(sphere);

    const l1 = new THREE.PointLight(0xffffff, 1.2, 100); l1.position.set(5, 5, 5); scene.add(l1);
    const l2 = new THREE.PointLight(0x66ccff, 1.1, 100); l2.position.set(-4, -2, 3); scene.add(l2);

    let raf;
    const animate = () => {
      sphere.rotation.y += 0.0032;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      mount.removeChild(renderer.domElement);
      geo.dispose(); mat.dispose();
    };
  }, []);

  return <div ref={mountRef} className="lp-globe" />;
}

export default function LandingPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // “save and redirect”
    localStorage.setItem("entry", "login");
    navigate("/universe");
  };

  const handleRegister = () => {
    localStorage.setItem("entry", "register");
    navigate("/universe");
  };

  return (
    <div className="lp-root">
      <Starfield />
      <div className="lp-card">
        <CenterGlobe />
        <h1 className="lp-title">#HUMANITY</h1>
        <p className="lp-sub">A network for verified, real humans. No bots. No bullshit.</p>

        <div className="lp-btnrow">
          <button className="lp-btn" onClick={handleLogin}>Log In</button>
          <button className="lp-btn lp-btn--primary" onClick={handleRegister}>Register</button>
          <button className="lp-btn" onClick={() => navigate("/universe")}>Enter Universe</button>
        </div>
      </div>
    </div>
  );
}
