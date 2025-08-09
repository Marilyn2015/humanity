// src/components/LandingPage.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";

export default function LandingPage() {
  const starsRef = useRef(null);
  const shadowRef = useRef(null);
  const globeRef = useRef(null);

  const css = `
    .landing{position:relative;width:100vw;height:100vh;background:#000;overflow:hidden}
    canvas.layer{position:fixed;inset:0}
    canvas.stars{z-index:0}
    canvas.shadow{z-index:1;pointer-events:none}
    canvas.globe{z-index:2;pointer-events:none;top:50%;left:50%;transform:translate(-50%,-50%);position:fixed}
    .overlay{position:fixed;inset:0;z-index:4;display:grid;place-items:center;color:#fff;text-align:center}
    .brand{font-size:48px;font-weight:900;letter-spacing:4px;text-shadow:0 0 12px #fff}
    .btns{display:flex;gap:12px;justify-content:center;margin-top:10px}
    .btn{padding:.6rem 1.1rem;border:2px solid #fff;border-radius:10px;font-weight:700;text-decoration:none}
    .btn.primary{background:#fff;color:#000}
    .btn.ghost{background:transparent;color:#fff}
  `;

  // STARFIELD
  useEffect(() => {
    const c = starsRef.current; if (!c) return;
    const ctx = c.getContext("2d");
    let stars = [], raf;
    function resize(){
      c.width = innerWidth; c.height = innerHeight;
      stars = Array.from({length: 500}, () => ({
        x: Math.random()*c.width, y: Math.random()*c.height,
        r: Math.random()*1.3 + 0.2, base: Math.random()*0.4 + 0.25, p: Math.random()*Math.PI*2
      }));
    }
    function draw(){
      ctx.clearRect(0,0,c.width,c.height);
      const t = Date.now()*0.0018;
      for(const s of stars){
        ctx.globalAlpha = s.base + Math.sin(t + s.p)*0.15;
        ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fillStyle = "#fff"; ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    addEventListener("resize", resize); resize(); draw();
    return ()=>{ removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);

  // SOFT BACKDROP SHADOW (2D canvas under the globe)
  useEffect(() => {
    const c = shadowRef.current; if (!c) return;
    const ctx = c.getContext("2d");
    function paint(){
      c.width = innerWidth; c.height = innerHeight;
      ctx.clearRect(0,0,c.width,c.height);
      const size = Math.min(innerWidth, innerHeight) * 0.66; // slightly larger than globe
      const x = innerWidth/2, y = innerHeight/2 + size*0.08;
      const rx = size*0.55, ry = size*0.22;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, rx);
      grad.addColorStop(0, "rgba(0,0,0,0.35)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI*2);
      ctx.fill();
    }
    addEventListener("resize", paint); paint();
    return ()=> removeEventListener("resize", paint);
  }, []);

  // GLOBE (brighter, bigger, robust texture URL)
  useEffect(() => {
    const canvas = globeRef.current; if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 3.0;

    // Lights
    const sun = new THREE.DirectionalLight(0xffffff, 1.35);
    sun.position.set(5, 2.5, 3.5);
    scene.add(sun);
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));

    // Sphere (slightly bigger)
    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(1.15, 96, 96),
      new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.65, metalness: 0 })
    );
    scene.add(globe);

    // Base path (local "/" vs GitHub Pages "/humanity/")
    const isPages = window.location.hostname.endsWith("github.io");
    const repoBase = isPages ? "/humanity/" : "/";
    const absBase = new URL(repoBase, window.location.origin).toString().replace(/\/+$/, "/");
    const textureURL = absBase + "earthmap1k.jpg";

    new THREE.TextureLoader().load(
      textureURL,
      (tex) => {
        tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        globe.material.map = tex;
        globe.material.needsUpdate = true;
      },
      undefined,
      (err) => console.error("Globe texture load error:", err, { textureURL })
    );

    function size(){
      // render size ~ 70% of viewport’s smaller side
      const s = Math.min(innerWidth, innerHeight) * 0.7;
      renderer.setSize(s, s, false);
      camera.aspect = 1; camera.updateProjectionMatrix();
      // ensure CSS pixel size matches actual pixels to avoid squish
      canvas.style.width = `${s}px`;
      canvas.style.height = `${s}px`;
      canvas.style.top = "50%";
      canvas.style.left = "50%";
      canvas.style.transform = "translate(-50%,-50%)";
      canvas.style.position = "fixed";
    }
    function animate(){
      globe.rotation.y += 0.0026;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    addEventListener("resize", size);
    size(); animate();
    return ()=> removeEventListener("resize", size);
  }, []);

  return (
    <div className="landing">
      <style>{css}</style>

      <canvas ref={starsRef} className="layer stars" />
      <canvas ref={shadowRef} className="layer shadow" />
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
