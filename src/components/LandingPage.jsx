import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import "./LandingPage.css";

export default function LandingPage() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 0, 3.1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    // Starfield
    const starGeo = new THREE.BufferGeometry();
    const starCount = 1000;
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
    scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 0.02 })));

    // Globe
    const sphere = new THREE.SphereGeometry(1, 64, 64);
    const globe = new THREE.Mesh(
      sphere,
      new THREE.MeshBasicMaterial({ color: 0x3a3a3a }) // fallback
    );
    scene.add(globe);

    // Load texture from your current public file
    const earthURL = `${import.meta.env.BASE_URL}earthmap1k.jpg`; 
    const loader = new THREE.TextureLoader();
    loader.load(
      earthURL,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        globe.material.dispose();
        globe.material = new THREE.MeshBasicMaterial({ map: tex });
      },
      undefined,
      (err) => console.error("Texture load failed:", earthURL, err)
    );

    // Animation
    let raf;
    const tick = () => {
      globe.rotation.y += 0.003;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

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
    <div className="landing-wrap">
      <div className="globe-wrap" ref={mountRef} aria-hidden="true" />
      <div className="cta">
        <h1>#HUMANITY</h1>
        <p>Own your voice. Be verified. Be human.</p>
        <div className="btn-row">
          <Link className="btn" to="/login">Log In</Link>
          <Link className="btn ghost" to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}