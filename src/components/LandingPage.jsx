import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../firebase/firebase";

export default function LandingPage() {
  const starRef = useRef(null);
  const globeRef = useRef(null);

  // Inline CSS styles
  const styles = `
    .landing-container {
      position: relative;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background: black;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .canvas-stars, .canvas-globe {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      display: block;
    }
    .overlay {
      position: relative;
      text-align: center;
      color: white;
      z-index: 2;
    }
    .brand {
      font-size: 4rem;
      font-weight: 900;
      letter-spacing: 4px;
      margin-bottom: 0.5rem;
      text-shadow: 0 0 15px white;
    }
    .tagline {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.85;
    }
    .buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    .btn.primary {
      background: white;
      color: black;
      border: none;
    }
    .btn.primary:hover {
      background: #ccc;
    }
    .btn.ghost {
      background: transparent;
      border: 2px solid white;
      color: white;
    }
    .btn.ghost:hover {
      background: white;
      color: black;
    }
    canvas.canvas-globe {
      z-index: 1;
      pointer-events: none;
      width: 400px;
      height: 400px;
      margin: auto;
      display: block;
    }
  `;

  // Log visit to Firebase
  useEffect(() => {
    const db = getDatabase();
    const user = auth.currentUser;
    const visitRef = ref(db, `analytics/landing_visits/${Date.now()}`);
    set(visitRef, {
      timestamp: Date.now(),
      uid: user ? user.uid : "guest",
      route: "LandingPage",
    }).catch((err) => console.error("🔥 Error logging visit:", err));
  }, []);

  // Starfield
  useEffect(() => {
    const canvas = starRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let anim;

    const resizeStars = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 300 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        base: Math.random() * 0.5 + 0.2,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() * 0.002;
      for (const s of stars) {
        ctx.globalAlpha = s.base + Math.sin(t + s.phase) * 0.1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
      anim = requestAnimationFrame(drawStars);
    };

    window.addEventListener("resize", resizeStars);
    resizeStars();
    drawStars();
    return () => {
      window.removeEventListener("resize", resizeStars);
      cancelAnimationFrame(anim);
    };
  }, []);

  // Globe
  useEffect(() => {
    const canvas = globeRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 3.2;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    scene.add(sphere);

    // ✅ Safe path for GitHub Pages
    const base = import.meta?.env?.BASE_URL ?? "/";
    const texturePath =
      (base.endsWith("/") ? base : base + "/") + "earthmap1k.jpg";

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

    const animate = () => {
      sphere.rotation.y += 0.003;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const resizeGlobe = () => {
      const size = Math.min(window.innerWidth, window.innerHeight) * 0.5;
      renderer.setSize(size, size, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", resizeGlobe);
    resizeGlobe();

    return () => window.removeEventListener("resize", resizeGlobe);
  }, []);

  return (
    <div className="landing-container">
      <style>{styles}</style>
      <canvas ref={starRef} className="canvas-stars" />
      <canvas ref={globeRef} className="canvas-globe" />
      <div className="overlay">
        <h1 className="brand">#HUMANITY</h1>
        <p className="tagline">Welcome to the future of verified connection</p>
        <div className="buttons">
          <Link to="/register" className="btn primary">
            Register
          </Link>
          <Link to="/login" className="btn ghost">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
