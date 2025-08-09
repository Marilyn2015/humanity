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

  // ---------- STARFIELD (denser + smoother twinkle) ----------
  useEffect(() => {
    const c = starsRef.current; if (!c) return;
    const ctx = c.getContext("2d");
    let stars = [], raf;
    function resize(){
      c.width = innerWidth; c.height = innerHeight;
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
    addEventListener("resize", resize); resize(); draw();
    return ()=>{ removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);

  // ---------- GLOBE (realistic textures + shadow + clouds) ----------
  useEffect(() => {
    const canvas = globeRef.current; if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 3.1;

    // Lights: one directional (sun) to create the terminator, plus soft fill
    const sun = new THREE.DirectionalLight(0xffffff, 1.2);
    sun.position.set(5, 2, 3); // angle = nice day/night shadow line
    scene.add(sun);
    scene.add(new THREE.AmbientLight(0xffffff, 0.22));
    scene.add(new THREE.HemisphereLight(0x88aaff, 0x080820, 0.2));

    // Sphere + materials
    const earthGeo = new THREE.SphereGeometry(1, 96, 96);
    const earthMat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shininess: 8,            // small highlight over oceans
      specular: new THREE.Color(0x222222)
    });
    const earth = new THREE.Mesh(earthGeo, earthMat);
    scene.add(earth);

    // Subtle cloud layer (slightly larger radius)
    const cloudGeo = new THREE.SphereGeometry(1.005, 96, 96);
    const cloudMat = new THREE.MeshLambertMaterial({ transparent: true, depthWrite: false, opacity: 0.9 });
    const clouds = new THREE.Mesh(cloudGeo, cloudMat);
    scene.add(clouds);

    // Build absolute path that works locally + GitHub Pages
    const base = import.meta?.env?.BASE_URL ?? "/";
    const absBase = new URL(base, window.location.origin).toString().replace(/\/+$/, "/");
    const paths = {
      color:      absBase + "earthmap1k.jpg",      // base color
      normal:     absBase + "earth_normal.jpg",    // normal map
      specular:   absBase + "earth_spec.jpg",      // specular map (oceans shine)
      clouds:     absBase + "earth_clouds.png"     // RGBA clouds (transparent)
    };

    const loader = new THREE.TextureLoader();
    const load = (url) => new Promise((res, rej) => loader.load(url, res, undefined, rej));

    (async () => {
      try {
        const [colorTex, normalTex, specTex, cloudsTex] = await Promise.all([
          load(paths.color),
          load(paths.normal).catch(() => null),
          load(paths.specular).catch(() => null),
          load(paths.clouds).catch(() => null),
        ]);

        // Improve texture sampling
        [colorTex, normalTex, specTex, cloudsTex].forEach(tex => {
          if (tex) tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        });

        earthMat.map = colorTex || null;
        if (normalTex) { earthMat.normalMap = normalTex; earthMat.normalScale = new THREE.Vector2(0.6, 0.6); }
        if (specTex)   { earthMat.specularMap = specTex; }
        earthMat.needsUpdate = true;

        if (cloudsTex) {
          cloudMat.map = cloudsTex;
          cloudMat.needsUpdate = true;
        }
      } catch (e) {
        console.error("Texture load error:", e, paths);
      }
    })();

    function size(){
      const s = Math.min(innerWidth, innerHeight) * 0.78;
      renderer.setSize(s, s, false);
      camera.aspect = 1; camera.updateProjectionMatrix();
    }
    function animate(){
      earth.rotation.y += 0.0028;
      clouds.rotation.y += 0.0032;
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
