import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import "./LandingPage.css";

export default function LandingPage() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Sizes
    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    // Scene / Camera / Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 0, 3.1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    // Background starfield
    const starGeo = new THREE.BufferGeometry();
    const starCount = 1100;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 28 * Math.cbrt(Math.random());
      const u = Math.random() * 2 * Math.PI;
      const v = Math.acos(2 * Math.random() - 1);
      positions[i * 3 + 0] = r * Math.sin(v) * Math.cos(u);
      positions[i * 3 + 1] = r * Math.sin(v) * Math.sin(u);
      positions[i * 3 + 2] = r * Math.cos(v);
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 0.02 }));
    scene.add(stars);

    // Globe (guaranteed-visible fallback, then texture)
    const sphere = new THREE.SphereGeometry(1, 64, 64);
    const globe = new THREE.Mesh(
      sphere,
      new THREE.MeshBasicMaterial({ color: 0x3a3a3a }) // fallback so it's never black/empty
    );
    scene.add(globe);

    const earthURL = `${import.meta.env.BASE_URL}textures/earth_day.jpg`; // public/textures/earth_day.jpg
    const loader = new THREE.TextureLoader();
    loader.load(
      earthURL,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        globe.material.dispose();
        globe.material = new THREE.MeshBasicMaterial({ map: tex }); // ignores lights; reliable everywhere
      },
      undefined,
      (err) => console.error("Texture failed:", earthURL, err)
    );

    // Rotation
    let raf;
    const tick = () => {
      globe.rotation.y += 0.003;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };

    // Honor reduced motion
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      renderer.render(scene, camera);
    } else {
      tick();
    }

    // Resize
    const onResize = () => {
      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement?.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
      renderer.dispose();
      sphere.dispose();
      starGeo.dispose();
      if (globe.material?.map) globe.material.map.dispose();
      globe.material.dispose();
    };
  }, []);

  return (
    <div className="landing">
      {/* Background layers */}
      <div className="bg-noise" aria-hidden="true" />
      <div className="bg-gradient" aria-hidden="true" />

      {/* WebGL canvas host */}
      <div className="globe" ref={mountRef} aria-hidden="true" />

      {/* Header */}
      <header className="site-header">
        <div className="brand">#HUMANITY</div>
        <nav className="nav">
          <Link to="/login" className="link">Log In</Link>
          <Link to="/register" className="link">Register</Link>
        </nav>
      </header>

      {/* Hero / CTA */}
      <main className="hero">
        <section className="card">
          <h1 className="title">Own your voice.<br />Be verified. Be human.</h1>
          <p className="subtitle">
            A secure, modern social network where real people connect.
          </p>
          <div className="actions">
            <Link className="btn primary" to="/register">Get Started</Link>
            <Link className="btn subtle" to="/login">I already have an account</Link>
          </div>
          <div className="bullets">
            <span>• Human-verified access</span>
            <span>• Real-time feed</span>
            <span>• Your data, your rules</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} #HUMANITY</span>
        <span className="dot">•</span>
        <span>Built for people, not bots</span>
      </footer>
    </div>
  );
}