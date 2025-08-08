import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import "./LandingPage.css";

export default function LandingPage() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // --- sizes ---
    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    // --- scene/camera/renderer ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 0, 3.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    // --- starfield ---
    const starGeo = new THREE.BufferGeometry();
    const count = 1000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 30 * Math.cbrt(Math.random());
      const u = Math.random() * 2 * Math.PI;
      const v = Math.acos(2 * Math.random() - 1);
      pos[i * 3 + 0] = r * Math.sin(v) * Math.cos(u);
      pos[i * 3 + 1] = r * Math.sin(v) * Math.sin(u);
      pos[i * 3 + 2] = r * Math.cos(v);
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 0.02 }));
    scene.add(stars);

    // --- lights for day/night terminator shading ---
    const sun = new THREE.DirectionalLight(0xffffff, 1.2);
    sun.position.set(3, 2, 4);
    sun.castShadow = true;
    scene.add(sun);

    const fill = new THREE.DirectionalLight(0x88aaff, 0.25); // cool rim
    fill.position.set(-3, -1, -2);
    scene.add(fill);

    scene.add(new THREE.AmbientLight(0xffffff, 0.25));

    // --- globe ---
    const sphere = new THREE.SphereGeometry(1, 64, 64);
    const earthURL = `${import.meta.env.BASE_URL}earthmap1k.jpg`; // your file in /public
    const tex = new THREE.TextureLoader().load(earthURL);
    tex.colorSpace = THREE.SRGBColorSpace;

    const globe = new THREE.Mesh(
      sphere,
      new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 1,
        metalness: 0
      })
    );
    globe.castShadow = true;
    scene.add(globe);

    // --- animate ---
    let raf;
    const tick = () => {
      globe.rotation.y += 0.003;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    // --- resize ---
    const onResize = () => {
      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // --- cleanup ---
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      starGeo.dispose();
      sphere.dispose();
      tex.dispose();
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