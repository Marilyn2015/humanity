// src/components/LandingPage.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";

export default function LandingPage() {
  const rainRef = useRef(null);
  const globeRef = useRef(null);

  const [bootDone, setBootDone] = useState(false);
  const [bootLinesShown, setBootLinesShown] = useState(0);
  const [bootTyping, setBootTyping] = useState(""); // current line typing

  // --- tune the boot sequence here ---
  const BOOT_LINES = [
    "[ OK ] initializing entropy pool…",
    "[ OK ] loading crypto modules: AES-256-GCM / X25519",
    "[ OK ] verifying integrity: sha256 ✓",
    "[ OK ] establishing peer channels…",
    "[ OK ] zero-trust policy loaded.",
    "[ OK ] route map synced.",
    "[ OK ] ready."
  ];
  const TYPE_MS = 14;          // typing speed per char
  const LINE_DELAY_MS = 180;   // delay between lines
  const BOOT_MAX_MS = 4000;    // hard cap; auto-finish after this many ms

  const css = `
    :root{ --bg:#000; --fg:#0aff6c; --fg-dim:#07c85a; --fg-soft:#0bff6c55; --white:#fff; }
    .landing{position:relative;width:100vw;height:100vh;background:var(--bg);overflow:hidden}
    canvas.layer{position:fixed;inset:0}
    canvas.rain{z-index:0; filter: contrast(120%);}
    canvas.globe{z-index:2; pointer-events:none; top:50%; left:50%; transform:translate(-50%,-50%); position:fixed}
    .scanlines{pointer-events:none; position:fixed; inset:0; z-index:3;
      background: repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,0.12) 3px);
      mix-blend-mode:multiply;
    }
    .noise{pointer-events:none; position:fixed; inset:0; z-index:3;background: radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,.45));}

    /* BOOT terminal */
    .boot{position:fixed; inset:0; z-index:4; display:grid; place-items:center; color:var(--fg);}
    .term{width:min(920px,92vw); min-height:260px; background:rgba(0,0,0,.66); border:1px solid #0a3; border-radius:12px;
      box-shadow:0 0 30px #0a3a; padding:16px 18px; font: 14px/1.45 ui-monospace, Menlo, monospace; color:#bfffd7;}
    .term .title{color:var(--fg); opacity:.85; letter-spacing:.06em; margin-bottom:8px}
    .term pre{white-space:pre-wrap; margin:0; color:#bfffd7;}
    .caret{display:inline-block; width:8px; height:1.1em; background:#bfffd7; margin-left:4px; animation: blink .9s step-end infinite;}
    @keyframes blink {50%{opacity:0;}}

    .skip{margin-top:10px; display:flex; gap:10px; justify-content:center}
    .skip button{border:2px solid var(--fg); color:var(--fg); background:transparent; padding:.45rem .9rem; border-radius:8px; font-weight:800; letter-spacing:.04em; cursor:pointer}
    .skip button:hover{background:rgba(10,255,108,.1)}

    /* MAIN overlay (shown after boot) */
    .overlay{position:fixed; inset:0; z-index:4; display:grid; place-items:center; color:var(--fg); text-align:center}
    .box{display:flex; flex-direction:column; gap:14px; align-items:center; max-width:min(92vw, 900px); padding: 8px 10px; position:relative}
    .brand{
      font-family: ui-monospace, Menlo, monospace; font-weight:900; letter-spacing:.25em;
      font-size: clamp(28px, 6vw, 64px); color:var(--fg);
      text-shadow: 0 0 12px var(--fg), 0 0 24px var(--fg-soft);
      position: relative; display:inline-block;
    }
    .brand::before, .brand::after{
      content: "#HUMANITY"; position:absolute; left:0; top:0; overflow:hidden; 
      clip-path: inset(0 0 0 0); opacity:.18; color:var(--white);
    }
    .brand::before{ transform: translate(1px,0); filter: drop-shadow(0 0 6px #0ff); animation: glitch1 2.2s infinite linear alternate; }
    .brand::after{ transform: translate(-1px,0); filter: drop-shadow(0 0 6px #f0f); animation: glitch2 2.4s infinite linear alternate; }
    @keyframes glitch1 { 0%{clip-path: inset(0 0 85% 0)} 50%{clip-path: inset(20% 0 40% 0)} 100%{clip-path: inset(75% 0 0 0)} }
    @keyframes glitch2 { 0%{clip-path: inset(80% 0 0 0)} 50%{clip-path: inset(30% 0 35% 0)} 100%{clip-path: inset(0 0 82% 0)} }

    .tag{ color:#bfffd7; opacity:.9; font-size: clamp(12px, 2vw, 18px); text-shadow: 0 0 6px var(--fg-soft); }
    .btns{display:flex; gap:14px; justify-content:center; flex-wrap:wrap; margin-top:6px}
    .btn{
      --edge: rgba(10,255,108,.22);
      font-family: ui-monospace, Menlo, monospace;
      padding:.7rem 1.2rem; border-radius:12px; text-decoration:none; position:relative;
      border:2px solid var(--fg); color:#051f12; background:linear-gradient(180deg, #b9ffd5, #5bff9b);
      font-weight:800; letter-spacing:.06em; box-shadow: 0 0 18px var(--fg-soft), inset 0 0 10px var(--edge);
      transition: transform .12s ease, box-shadow .12s ease, filter .12s ease;
    }
    .btn:hover{ transform: translateY(-1px); filter: brightness(1.05); box-shadow: 0 0 26px var(--fg-soft), inset 0 0 14px var(--edge); }
    .btn.ghost{ color:var(--fg); background:transparent; border-color:var(--fg); box-shadow: 0 0 12px var(--fg-soft), inset 0 0 0 rgba(0,0,0,0); }
    .btn.ghost:hover{ background: rgba(10,255,108,.08); }

    .fade-in{animation: fade .5s ease forwards}
    @keyframes fade { from {opacity:0; transform: translateY(4px)} to {opacity:1; transform:none} }
  `;

  // MATRIX RAIN
  useEffect(() => {
    const c = rainRef.current; if (!c) return;
    const ctx = c.getContext("2d");
    let raf;
    const glyphs = "01▮▯░▒▓▲△◆◇○●◣◢◤◥$@#&*+";
    let cols, drops, fontSize = 16;

    function resize(){
      c.width = innerWidth; c.height = innerHeight;
      fontSize = Math.max(12, Math.floor(Math.min(innerWidth, innerHeight) * 0.018));
      ctx.font = `${fontSize}px ui-monospace, Menlo, monospace`;
      cols = Math.floor(c.width / fontSize);
      drops = new Array(cols).fill(0).map(() => Math.random() * -50);
    }
    function draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = "rgba(10,255,108,0.85)";
      for (let i = 0; i < cols; i++) {
        const ch = glyphs[Math.floor(Math.random() * glyphs.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(ch, x, y);
        drops[i] += Math.random() < 0.02 ? 0 : 1;
        if (y > c.height && Math.random() > 0.975) drops[i] = 0;
      }
      raf = requestAnimationFrame(draw);
    }
    addEventListener("resize", resize);
    resize(); draw();
    return () => { removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);

  // GLOBE
  useEffect(() => {
    const canvas = globeRef.current; if (!canvas) return;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 2.9;

    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
    sun.position.set(5, 2.5, 3.5);
    scene.add(sun);
    scene.add(new THREE.AmbientLight(0xffffff, 0.28));

    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 96, 96),
      new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.6, metalness: 0 })
    );
    scene.add(globe);

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
      const s = Math.min(innerWidth, innerHeight) * 0.66;
      renderer.setSize(s, s, false);
      camera.aspect = 1; camera.updateProjectionMatrix();
      canvas.style.width = `${s}px`;
      canvas.style.height = `${s}px`;
      canvas.style.top = "52%";
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

  // BOOT TYPEWRITER
  useEffect(() => {
    let mounted = true;
    const startedAt = Date.now();

    function finish() { if (mounted) setBootDone(true); }

    // allow keyboard skip
    function onKey(e){ if (e.key === "Enter") finish(); }
    window.addEventListener("keydown", onKey);

    async function run() {
      for (let i = 0; i < BOOT_LINES.length; i++) {
        // hard cap (don’t keep user waiting)
        if (Date.now() - startedAt > BOOT_MAX_MS) { finish(); break; }

        const line = BOOT_LINES[i];
        setBootTyping("");
        for (let j = 0; j <= line.length; j++) {
          if (!mounted) return;
          setBootTyping(line.slice(0, j));
          await new Promise(r => setTimeout(r, TYPE_MS));
        }
        setBootLinesShown(v => v + 1);
        await new Promise(r => setTimeout(r, LINE_DELAY_MS));
      }
      finish();
    }
    run();

    return () => { mounted = false; window.removeEventListener("keydown", onKey); };
  }, []);

  const manualFinish = () => setBootDone(true);

  return (
    <div className="landing">
      <style>{css}</style>

      {/* background */}
      <canvas ref={rainRef} className="layer rain" />
      <div className="scanlines" />
      <div className="noise" />

      {/* globe */}
      <canvas ref={globeRef} className="globe" />

      {/* boot terminal (shown until bootDone) */}
      {!bootDone && (
        <div className="boot">
          <div className="term fade-in" role="status" aria-live="polite">
            <div className="title">/boot/console — cypherpunk mode</div>
            <pre>
              {BOOT_LINES.slice(0, bootLinesShown).join("\n")}
              {bootTyping && ("\n" + bootTyping)}
              <span className="caret" />
            </pre>
            <div className="skip">
              <button onClick={manualFinish} aria-label="Skip boot">Skip</button>
              <div style={{color:"#7affb4", opacity:.7}}>(press Enter)</div>
            </div>
          </div>
        </div>
      )}

      {/* main overlay (after boot) */}
      {bootDone && (
        <div className="overlay fade-in">
          <div className="box">
            <div className="brand">#HUMANITY</div>
            <div className="tag">// verified connections • zero-trust ethos • encrypted by default</div>
            <div className="btns">
              <Link to="/register" className="btn">REGISTER</Link>
              <Link to="/login" className="btn ghost">LOG&nbsp;IN</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
