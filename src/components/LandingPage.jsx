// src/components/LandingPage.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import './LandingPage.css';

export default function LandingPage() {
  const starRef = useRef(null);
  const globeRef = useRef(null);

  // Starfield background
  useEffect(() => {
    const canvas = starRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];
    let rafId;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 300 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        base: Math.random() * 0.5 + 0.2,
        phase: Math.random() * Math.PI * 2
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() * 0.002;
      for (const s of stars) {
        ctx.globalAlpha = s.base + Math.sin(t + s.phase) * 0.1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.fill();
      }
      rafId = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Spinning globe
  useEffect(() => {
    const canvas = globeRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);

    function setSizes() {
      const w = canvas.clientWidth || 400;
      const h = canvas.clientHeight || 400;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    setSizes(); // ensure we have a non-zero size at start
    camera.position.z = 3;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 3, 5);
    scene.add(light);

    const loader = new THREE.TextureLoader();
    let globe;
    let rafId;

    loader.load(
      '/earthmap1k.jpg',
      texture => {
        globe = new THREE.Mesh(
          new THREE.SphereGeometry(1, 32, 32),
          new THREE.MeshStandardMaterial({ map: texture })
        );
        scene.add(globe);

        const animate = () => {
          globe.rotation.y += 0.005;
          setSizes();
          renderer.render(scene, camera);
          rafId = requestAnimationFrame(animate);
        };
        animate();
      },
      undefined,
      error => console.error('Globe texture error:', error)
    );

    function onResize() { setSizes(); }
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (rafId) cancelAnimationFrame(rafId);
      renderer.dispose();
      scene.traverse(obj => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
    };
  }, []);

  return (
    <div className="landing-container">
      <canvas ref={starRef} className="starfield" />
      <div className="content">
        <canvas ref={globeRef} className="globe" />
        <h1>#HUMANITY</h1>
        <p>Sign in or register to continue</p>
        <div>
          <Link to="/register" className="button">Register</Link>
          <Link to="/login" className="button">Log in</Link>
        </div>
      </div>
    </div>
  );
}