// src/components/LandingPage.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../firebase/firebase";

export default function LandingPage() {
  const starRef = useRef(null);
  const globeRef = useRef(null);

  // --- tiny inline CSS so overlay is always visible ---
  const css = `
    .landing-container{position:relative;width:100vw;height:100vh;background:#000;overflow:hidden}
    .overlay{position:absolute;inset:0;display:grid;place-items:center;z-index:3;color:#fff;text-align:center}
    .overlay .box{display:flex;flex-direction:column;gap:.75rem}
    .buttons{display:flex;gap:12px;justify-content:center}
    .btn{padding:.6rem 1.1rem;border:2px solid #fff;color:#000;background:#fff;text-decoration:none;font-weight:700;border-radius:8px}
    .btn.ghost{background:transparent;color:#fff}
    canvas.stars{position:fixed;inset:0;z-index:0}
    canvas.globe{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:2;pointer-events:none}
  `;

  // Log page visit
  useEffect(() => {
    const db = getDatabase();
    const user = auth.currentUser;
    set(ref(db, `analytics/landing_visits/${Date.now()}`), {
      timestamp: Date.now(),
      uid: user ? user.uid : "guest",
      route: "LandingPage",
    }).catch((e) => console.error("🔥 log error:", e));
  }, []);

  // Starfield
  useEffect(() => {
    const canvas = starRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let raf;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 300 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        base: Math.random() * 0.5 + 0.2,
        phase: Math.random() * Math.PI * 2,
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() * 0.002;
      for (const s of stars) {
        ctx.globalAlpha = s.base + Math.sin(t + s.phase) * 0.12;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    window.addEventListener("resize", resize);
    resize(); draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);

  // Globe
  useEffect(() => {
    const canvas = globeRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 3.2;

    scene.add(new THREE.DirectionalLight(0xffffff, 1).position.set(5, 5, 5));
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    scene.add(sphere);

    // ✅ Works locally AND on GitHub Pages
    const base = import.meta?.env?.BASE_URL || "/";
    const texturePath = (base.endsWith("/") ? base : base + "/") + "earthmap1k.jpg";

    new THREE.TextureLoader().load(
      texturePath,
      (tex) => {
        tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        sphere.material.map = tex;
        sphere.material.needsUpdate = true;
      },
      undefined,
      (err) => console.error("Globe texture load error:", err)
    );

    function sizeGlobe() {
      const size = Math.min(window.innerWidth, window.innerHeight) * 0.8; // 80% viewport
      renderer.setSize(size, size, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    }
    function animate() {
      sphere.rotation.y += 0.003;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    window.addEventListener("resize", sizeGlobe);
    sizeGlobe(); animate();

    return () => window.removeEventListener("resize", sizeGlobe);
  }, []);

  return (
    <div className="landing-container">
      <style>{css}</style>

      <canvas ref={starRef} className="stars" />
      <canvas ref={globeRef} className="globe" />

      <div className="overlay">
        <div className="box">
          <h1 style={{ fontSize: 48, letterSpacing: 4, textShadow: "0 0 12px #fff" }}>#HUMANITY</h1>
          <p>Sign in or register to continue</p>
          <div className="buttons">
            <Link to="/register" className="btn">Register</Link>
            <Link to="/login" className="btn ghost">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
