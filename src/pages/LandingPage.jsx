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

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#000000");

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 0, 3.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    // STARS
    const starsGeo = new THREE.BufferGeometry();
    const starCount = 1200;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      const r = 40 * Math.cbrt(Math.random());
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    starsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(
      starsGeo,
      new THREE.PointsMaterial({ size: 0.015, color: 0xffffff })
    );
    scene.add(stars);

    // LIGHTS
    const sun = new THREE.DirectionalLight(0xffffff, 1.2);
    sun.position.set(3, 2, 4);
    scene.add(sun);
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));

    // GLOBE
    const globeGeo = new THREE.SphereGeometry(1, 64, 64);
    const globeMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);

    const texture = new THREE.TextureLoader().load(`${import.meta.env.BASE_URL}earthmap1k.jpg`);
    texture.colorSpace = THREE.SRGBColorSpace;
    globe.material.map = texture;
    globe.material.needsUpdate = true;

    // ANIMATION
    let frameId;
    const animate = () => {
      globe.rotation.y += 0.003;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // RESIZE
    const handleResize = () => {
      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      starsGeo.dispose();
      globeGeo.dispose();
      texture.dispose();
      globe.material.dispose();
    };
  }, []);

  return (
    <div className="landing-wrap">
      <div className="globe-wrap" ref={mountRef} />
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
