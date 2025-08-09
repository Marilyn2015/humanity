// src/components/LandingPage.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";

export default function LandingPage() {
  const starsRef = useRef(null);
  const globeRef = useRef(null);

  // --- minimal inline CSS ---
  const css = `
    .landing{position:relative;width:100vw;height:100vh;background:#000;overflow:hidden}
    .overlay{position:absolute;inset:0;display:grid;place-items:center;z-index:3;color:#fff;text-align:center}
    .brand{font-size:48px;font-weight:900;letter-spacing:4px;text-shadow:0 0 12px #fff}
    .btns{display:flex;gap:12px;justify-content:center;margin-top:10px}
    .btn{padding:.6rem 1.1rem;border:2px solid #fff;border-radius:8px;font-weight:700;text-decoration:none}
    .btn.primary{background:#fff;color:#000}
    .btn.ghost{background:transparent;color:#fff}
    canvas.stars{position:fixed;inset:0;z-index:1}
    canvas.globe{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:2;pointer-events:none}
  `;

  // --- starfield ---
  useEffect(() => {
    const c = starsRef.current; if (!c) return;
    const ctx = c.getContext("2d");
    let stars = [], raf;

    function resize(){
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      stars = Array.from({length:300}, () => ({
        x: Math.random()*c.width,
        y: Math.random()*c.height,
        r: Math.random()*1.2 + 0.3,
        base: Math.random()*0.5 + 0.2,
        p: Math.random()*Math.PI*2
      }));
    }

    function draw(){
      ctx.clearRect(0,0,c.width,c.height);
      const t = Date.now()*0.002;
      for(const s of stars){
        ctx.globalAlpha = s.base + Math.sin(t + s.p)*0.12;
        ctx.beginPath();
        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    resize(); draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);

  // --- globe (fixed lights + bulletproof texture path) ---
  useEffect(() => {
    const canvas = globeRef.current; if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 3.2;

    // lights (must add the light object, not its .position)
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const ambLight = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambLight);

    // globe mesh
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    scene.add(sphere);

    // texture path: works locally and on GitHub Pages
    const base = import.meta?.env?.BASE_URL ?? "/";                      // "/" locally, "/<repo>/" on pages
    const absBase = new URL(base, window.location.origin).toString();    // absolute base URL
    const texturePath = absBase.replace(/\/+$/, "/") + "earthmap1k.jpg"; // .../earthmap1k.jpg

    new THREE.TextureLoader().load(
      texturePath,
      (tex) => {
        tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        sphere.material.map = tex;
        sphere.material.needsUpdate = true;
      },
      undefined,
      (err) => console.error("Globe texture load error:", err, { texturePath, base, absBase })
    );

    function size(){
      const s = Math.min(window.innerWidth, window.innerHeight) * 0.8;
      renderer.setSize(s, s, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    }

    function animate(){
      sphere.rotation.y += 0.003;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", size);
    size(); animate();

    return () => window.removeEventListener("resize", size);
  }, []);

  return (
    <div className="landing">
      <style>{css}</style>
      <canvas ref={starsRef} className="stars" />
      <canvas ref={globeRef} className="globe" />
      <div className="overlay">
        <div>
          <div className="brand">#HUMANITY</div>
          <div>Welcome to the future of verified connection</div>
          <div className="btns">
            <Link to="/register" className="btn primary">Register</Link>
            <Link to="/login" className="btn ghost">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
