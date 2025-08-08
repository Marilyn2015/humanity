// src/components/LandingPage.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

export default function LandingPage() {
  const navigate = useNavigate();
  const starRef = useRef(null);
  const globeMountRef = useRef(null);

  // ====== Inline CSS (no external CSS needed) ======
  const Styles = () => (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap');

      .landing-root {
        min-height: 100vh;
        background: #0f1115;
        color: #fff;
        position: relative;
        overflow: hidden;
        display: grid;
        place-items: center;
      }
      .star-canvas {
        position: fixed;
        inset: 0;
        width: 100vw; height: 100vh;
        z-index: 0;
        pointer-events: none;
      }
      .card {
        z-index: 2;
        width: min(760px, 92vw);
        padding: 34px 26px 28px;
        border-radius: 24px;
        background: rgba(0, 0, 0, 0.6);
        box-shadow:
          0 0 42px 8px rgba(0, 255, 255, 0.35),
          0 0 0 1.5px rgba(255, 255, 255, 0.28);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .globe-wrap {
        width: 380px; height: 380px;
        display: grid; place-items: center;
        margin: 0 auto 10px;
      }
      .title {
        font-family: 'Orbitron', 'Segoe UI', Arial, sans-serif;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: .16em;
        font-size: clamp(2.2rem, 5vw, 3.2rem);
        margin: 8px 0 6px;
        background: linear-gradient(90deg, #fff 65%, #00f7ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(0 0 16px #fff) drop-shadow(0 0 28px #00f7ff);
        user-select: none;
      }
      .tagline {
        margin: 4px 0 18px;
        color: #cfefff;
        opacity: .9;
        font-size: 1.06rem;
      }
      .btn-row {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 8px;
      }
      .btn {
        --glow: #22eaff;
        padding: 12px 22px;
        border-radius: 10px;
        border: 2px solid var(--glow);
        color: #fff;
        background: #151a20;
        text-decoration: none;
        font-weight: 800;
        letter-spacing: .06em;
        box-shadow:
          0 0 20px 3px rgba(34,234,255,.35),
          0 0 8px 2px rgba(34,234,255,.6) inset;
        transition: transform .12s, box-shadow .18s, background .18s, color .18s, border-color .18s;
        cursor: pointer;
      }
      .btn:hover {
        transform: translateY(-1px) scale(1.03);
        box-shadow:
          0 0 32px 7px rgba(255,255,255,.55),
          0 0 14px 3px rgba(34,234,255,.9) inset;
        color: #000; background: #22eaff; border-color: #fff;
      }
      .btn.primary {
        --glow: #ffffff;
        background: #22eaff; color:#000; border-color:#fff;
        box-shadow:
          0 0 26px 7px rgba(255,255,255,.55),
          0 0 12px 4px rgba(34,234,255,.95) inset;
      }
      .btn.primary:hover { background:#fff; }
      @media (max-width: 480px) {
        .card { padding: 26px 20px 22px; }
        .globe-wrap { width: 320px; height: 320px; }
        .btn { width: 100%; text-align: center; }
      }
    `}</style>
  );

  // ====== Starfield Background ======
  useEffect(() => {
    const canvas = starRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [], raf;

    const makeStars = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 300 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        base: Math.random() * 0.5 + 0.2,
        phase: Math.random() * Math.PI * 2
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() * 0.002;
      for (const s of stars) {
        ctx.globalAlpha = s.base + Math.sin(t + s.phase) * 0.1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      makeStars();
    };

    window.addEventListener("resize", onResize);
    makeStars();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // ====== Spinning Globe (Three.js) ======
  useEffect(() => {
    const mount = globeMountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000);
    camera.position.z = 3.2;

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(5, 5, 5);
    scene.add(key);
    const rim = new THREE.PointLight(0x66ccff, 0.9, 100);
    rim.position.set(-4, -2, 3);
    scene.add(rim);

    // Globe
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    scene.add(sphere);

    // Texture path that works on GitHub Pages with Vite base (/humanity/)
    const texUrl = new URL("earthmap1k.jpg", import.meta.env.BASE_URL).href;
    new THREE.TextureLoader().load(
      texUrl,
      (tex) => {
        tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        sphere.material.map = tex;
        sphere.material.roughness = 0.8;
        sphere.material.metalness = 0.2;
        sphere.material.needsUpdate = true;
      },
      undefined,
      (err) => console.error("Globe texture load error:", err)
    );

    // Size
    const setSize = () => {
      const w = mount.clientWidth || 380;
      const h = mount.clientHeight || 380;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    setSize();
    const onResize = () => setSize();
    window.addEventListener("resize", onResize);

    // Animate
    let raf;
    const tick = () => {
      sphere.rotation.y += 0.003;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    // Cleanup
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      sphere.geometry.dispose();
      if (sphere.material.map) sphere.material.map.dispose();
      sphere.material.dispose();
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  // ====== Button handlers (save + redirect) ======
  const goRegister = () => {
    localStorage.setItem("entry", "register");
    navigate("/universe");
  };
  const goLogin = () => {
    localStorage.setItem("entry", "login");
    navigate("/universe");
  };
  const goEnter = () => navigate("/universe");

  return (
    <div className="landing-root">
      <Styles />
      <canvas ref={starRef} className="star-canvas" />

      <div className="card">
        <div ref={globeMountRef} className="globe-wrap" />
        <h1 className="title">#HUMANITY</h1>
        <p className="tagline">A network for verified, real humans. No bots. No bullshit.</p>
        <div className="btn-row">
          <button className="btn primary" onClick={goRegister}>Register</button>
          <button className="btn" onClick={goLogin}>Log In</button>
          <button className="btn" onClick={goEnter}>Enter Universe</button>
        </div>
      </div>
    </div>
  );
}
