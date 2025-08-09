// src/components/LandingPage.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";

export default function LandingPage() {
  const starsRef = useRef(null);
  const globeRef = useRef(null);

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

  // stars
  useEffect(() => {
    const c = starsRef.current; if (!c) return;
    const ctx = c.getContext("2d");
    let stars = [], raf;
    function resize(){ c.width=innerWidth; c.height=innerHeight;
      stars = Array.from({length:300}, ()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.2+.3,base:Math.random()*.5+.2,p:Math.random()*Math.PI*2}));
    }
    function draw(){ ctx.clearRect(0,0,c.width,c.height); const t=Date.now()*0.002;
      for(const s of stars){ ctx.globalAlpha=s.base+Math.sin(t+s.p)*.12; ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fillStyle="#fff"; ctx.fill(); }
      raf=requestAnimationFrame(draw);
    }
    addEventListener("resize",resize); resize(); draw();
    return ()=>{ removeEventListener("resize",resize); cancelAnimationFrame(raf); };
  }, []);

  // globe
  useEffect(() => {
    const canvas = globeRef.current; if (!canvas) return;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(45,1,0.1,1000); cam.position.z=3.2;
    scene.add(new THREE.DirectionalLight(0xffffff,1).position.set(5,5,5));
    scene.add(new THREE.AmbientLight(0xffffff,0.25));
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(1,64,64), new THREE.MeshStandardMaterial({color:0xffffff}));
    scene.add(sphere);

    const base = import.meta?.env?.BASE_URL ?? "/";
    const abs = new URL(base, window.location.origin).toString();
    const texturePath = abs.replace(/\/+$/,"/") + "earthmap1k.jpg";

    new THREE.TextureLoader().load(
      texturePath,
      tex => { tex.anisotropy = renderer.capabilities.getMaxAnisotropy(); sphere.material.map=tex; sphere.material.needsUpdate=true; },
      undefined,
      err => console.error("Globe texture load error:", err, { texturePath })
    );

    function size(){ const s=Math.min(innerWidth,innerHeight)*0.8; renderer.setSize(s,s,false); cam.aspect=1; cam.updateProjectionMatrix(); }
    function animate(){ sphere.rotation.y+=0.003; renderer.render(scene,cam); requestAnimationFrame(animate); }
    addEventListener("resize",size); size(); animate();
    return ()=> removeEventListener("resize",size);
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
