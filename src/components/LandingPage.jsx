

// FILE: src/components/LandingPage.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Globe from "globe.gl";
import "../pages/LoginPage.css"; // reuse your auth styles

/* starfield background */
function Starfield({ count = 280 }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, ctx = c.getContext("2d");
    let w, h, stars, raf;
    const make = n =>
      Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        base: Math.random() * 0.5 + 0.35,
        phase: Math.random() * Math.PI * 2,
      }));
    const resize = () => {
      w = (c.width = innerWidth);
      h = (c.height = innerHeight);
      stars = make(count);
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const t = Date.now() * 0.002;
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;
        ctx.globalAlpha = s.base + Math.sin(t + s.phase) * 0.12;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#e5e7eb";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 6;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    resize();
    addEventListener("resize", resize);
    draw();
    return () => {
      removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [count]);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        background: "#000",
      }}
    />
  );
}

/* flowing (non-fixed) globe; the CTA box renders UNDER it */
function HeroGlobeFlow() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const g = Globe()(containerRef.current);

    g.backgroundColor("rgba(0,0,0,0)");
    g.atmosphereColor("#ffffff");
    g.atmosphereAltitude(0.18);
    g.pointOfView({ altitude: 2.05 }, 0);
    g.globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg");
    g.bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png");
    g.showGlobe(true).showAtmosphere(true);

    const CITIES = [
      { name: "New York", lat: 40.7128, lng: -74.006 },
      { name: "San Francisco", lat: 37.7749, lng: -122.4194 },
      { name: "London", lat: 51.5074, lng: -0.1278 },
      { name: "Berlin", lat: 52.52, lng: 13.405 },
      { name: "Lagos", lat: 6.5244, lng: 3.3792 },
      { name: "São Paulo", lat: -23.5505, lng: -46.6333 },
      { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
      { name: "Seoul", lat: 37.5665, lng: 126.978 },
      { name: "Sydney", lat: -33.8688, lng: 151.2093 },
      { name: "Mumbai", lat: 19.076, lng: 72.8777 },
      { name: "Johannesburg", lat: -26.2041, lng: 28.0473 },
      { name: "Toronto", lat: 43.6532, lng: -79.3832 },
    ];
    g.pointsData(CITIES)
      .pointLat("lat")
      .pointLng("lng")
      .pointAltitude(0.02)
      .pointRadius(0.9)
      .pointColor(() => "#ffffff")
      .pointsMerge(true)
      .pointLabel("name");

    const LINKS = [
      ["New York", "London"],
      ["London", "Berlin"],
      ["Berlin", "Tokyo"],
      ["Tokyo", "Seoul"],
      ["Seoul", "Sydney"],
      ["Sydney", "Mumbai"],
      ["Mumbai", "Johannesburg"],
      ["Johannesburg", "Lagos"],
      ["Lagos", "São Paulo"],
      ["São Paulo", "San Francisco"],
      ["San Francisco", "Toronto"],
      ["Toronto", "New York"],
    ];
    const map = Object.fromEntries(CITIES.map((c) => [c.name, c]));
    const arcs = LINKS.map(([a, b]) => ({
      startLat: map[a].lat,
      startLng: map[a].lng,
      endLat: map[b].lat,
      endLng: map[b].lng,
    }));
    g.arcsData(arcs)
      .arcColor(() => ["rgba(255,255,255,.10)", "rgba(255,255,255,.95)"])
      .arcStroke(0.6)
      .arcAltitude(0.25)
      .arcDashLength(0.35)
      .arcDashGap(0.9)
      .arcDashAnimateTime(1600);

    g.controls().autoRotate = true;
    g.controls().autoRotateSpeed = 0.55;
    g.controls().enableZoom = false;

    const setSize = () => {
      const s = Math.min(window.innerWidth, window.innerHeight) * 0.78;
      g.width(s);
      g.height(s);
      Object.assign(containerRef.current.style, {
        width: `${s}px`,
        height: `${s}px`,
        margin: "8vh auto 0",
        pointerEvents: "none", // let buttons be clickable
        filter: "drop-shadow(0 0 40px rgba(255,255,255,.15))",
      });
    };
    setSize();
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, []);

  return <div ref={containerRef} />;
}

export default function LandingPage() {
  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      <Starfield />
      {/* vignette for legibility */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.85) 100%)",
        }}
      />
      {/* content: globe first, CTA box BELOW */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 980,
          margin: "0 auto",
          padding: "16px 16px 80px",
        }}
      >
        <HeroGlobeFlow />
        <section
          className="login-container"
          aria-label="Landing"
          style={{ margin: "24px auto 0", width: "min(90vw, 360px)" }}
        >
          <h2>#HUMANITY</h2>
          <p style={{ opacity: 0.9, marginTop: -6, marginBottom: 8 }}>
            Real People. Real Identity. Real Conversation.
          </p>
          <Link className="login-btn" to="/login" style={{ textAlign: "center" }}>
            Log In
          </Link>
          <Link className="register-btn" to="/register" style={{ textAlign: "center" }}>
            Register
          </Link>
        </section>
      </div>
    </main>
  );
}
