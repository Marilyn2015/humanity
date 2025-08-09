// src/components/LandingPage.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";

export default function LandingPage() {
  const starsRef = useRef(null);
  const globeRef = useRef(null);

  const css = `
    .landing{position:relative;width:100vw;height:100vh;background:#000;overflow:hidden}
    .overlay{position:absolute;inset:0;display:grid;place-items:center;z-index:4;color:#fff;text-align:center}
    .brand{font-size:48px;font-weight:900;letter-spacing:4px;text-shadow:0 0 12px #fff}
    .btns{display:flex;gap:12px;justify-content:center;margin-top:10px}
    .btn{padding:.6rem 1.1rem;border:2px solid #fff;border-radius:8px;font-weight:700;text-decoration:none}
    .btn.primary{background:#fff;color:#000}
    .btn.ghost{background:transparent;color:#fff}
    canvas.stars{position:fixed;inset:0;z-index:1}
    canvas.globe{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:3;pointer-events:none}
  `;

  // ---------- STARFIELD ----------
  useEffect(() => {
    const c = starsRef.current; if (!c) return;
    const ctx = c.getContext("2d");
    let stars = [], raf;

    function resize(){
      c.width = window.innerWidth; c.height = window.innerHeight;
      stars = Array.from({length: 500}, () => ({
        x: Math.random()*c.width,
        y: Math.random()*c.height,
        r: Math.random()*1.3 + 0.2,
        base: Math.random()*0.4 + 0.25,
        p: Math.random()*Math.PI*2
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
    window.addEventListener("resize", resize);
    resize(); draw();
    return ()=>{ window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);

  // ---------- GLOBE with shadow ----------
  useEffect(() => {
    const canvas = globeRef.current; if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 3.2;

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 1.2);
    pointLight.position.set(5, 2, 3);
    pointLight.castShadow = true;
    scene.add(pointLight);

    scene.add(new THREE.AmbientLight(0xffffff, 0.2));

    // Smaller sphere
    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 96, 96), // smaller radius
      new THREE.MeshStandardMaterial({ color: 0x999999, roughness: 0.7, metalness: 0.0 })
    );
    globe.castShadow = true;
    scene.add(globe);

    // Shadow "floor"
    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(4, 4),
      new THREE.ShadowMaterial({ opacity: 0.3 })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // Load texture
    const isPages = window.location.hostname.endsWith("github.io");
    const repoBase = isPages ? "/humanity/" : "/";
    const absBase = new URL(repoBase, window.location.origin).toString().replace(/\/+$/, "/");
    const textureURL = absBase + "earthmap1k.jpg";
    console.log("[Globe] Loading texture:", textureURL);

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
      const s = Math.min(window.innerWidth, window.innerHeight) * 0.6; // smaller size
      renderer.setSize(s, s, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    }
    function animate(){
      globe.rotation.y += 0.003;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", size);
    size();
    animate();

    return ()=> window.removeEventListener("resize", size);
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
