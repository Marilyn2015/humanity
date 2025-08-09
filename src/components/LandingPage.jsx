// src/components/LandingPage.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import "./LandingPage.css";

export default function LandingPage() {
  const starRef = useRef(null);
  const globeRef = useRef(null);

  // ★ Starfield Background
  useEffect(() => {
    const canvas = starRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let anim;

    const resizeStars = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 300 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        base: Math.random() * 0.5 + 0.2,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() * 0.002;
      for (const s of stars) {
        ctx.globalAlpha = s.base + Math.sin(t + s.phase) * 0.1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
      anim = requestAnimationFrame(drawStars);
    };

    window.addEventListener("resize", resizeStars);
    resizeStars();
    drawStars();
    return () => {
      window.removeEventListener("resize", resizeStars);
      cancelAnimationFrame(anim);
    };
  }, []);

  // ★ Spinning Globe with Shadow
  useEffect(() => {
    const canvas = globeRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 3.2;

    // Lighting for brightness and shadow effect
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Soft shadow background plane behind the globe
    const shadowGeometry = new THREE.CircleGeometry(1.4, 64);
    const shadowMaterial = new THREE.ShadowMaterial({ opacity: 0.4 });
    const shadowMesh = new THREE.Mesh(shadowGeometry, shadowMaterial);
    shadowMesh.position.z = -1.5;
    shadowMesh.receiveShadow = true;
    scene.add(shadowMesh);

    // Load globe texture
    new THREE.TextureLoader().load(
      "earthmap1k.jpg", // must be in /public
      (texture) => {
        const globe = new THREE.Mesh(
          new THREE.SphereGeometry(1.1, 64, 64), // bigger radius
          new THREE.MeshStandardMaterial({ map: texture })
        );
        globe.castShadow = true;
        scene.add(globe);

        const animate = () => {
          globe.rotation.y += 0.002;
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        };
        animate();
      },
      undefined,
      (err) => console.error("Globe load error:", err)
    );

    const resizeGlobe = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", resizeGlobe);
    resizeGlobe();

    return () => {
      window.removeEventListener("resize", resizeGlobe);
    };
  }, []);

  return (
    <div className="landing-container">
      <canvas
        ref={starRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      />
      <canvas
        ref={globeRef}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          width: "50vw",
          height: "50vw",
          maxWidth: 600,
          maxHeight: 600,
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />
      <div className="overlay">
        <h1>#HUMANITY</h1>
        <p>Sign in or register to continue</p>
        <div className="buttons">
          <Link to="/register" className="btn primary">
            Register
          </Link>
          <Link to="/login" className="btn ghost">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
