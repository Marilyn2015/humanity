// src/components/LandingPage.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import './LandingPage.css';

export default function LandingPage() {
  const starRef = useRef(null);
  const globeRef = useRef(null);

  useEffect(() => {
    // Starfield
    const canvas = starRef.current;
    const ctx = canvas.getContext('2d');
    let stars = [];

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
      stars.forEach(s => {
        ctx.globalAlpha = s.base + Math.sin(t + s.phase) * 0.1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  useEffect(() => {
    // Globe
    const canvas = globeRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 3;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 3, 5);
    scene.add(light);

    new THREE.TextureLoader().load(
      'https://marilyn2015.github.io/Humanity/earthmap1k.jpg',
      texture => {
        const globe = new THREE.Mesh(
          new THREE.SphereGeometry(1, 32, 32),
          new THREE.MeshStandardMaterial({ map: texture })
        );
        scene.add(globe);
        (function animate() {
          globe.rotation.y += 0.005;
          renderer.setSize(canvas.clientWidth, canvas.clientHeight);
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        })();
      }
    );

    function onResize() {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="landing-container">
      <canvas ref={starRef} className="starfield" />
      <div className="content">
        <canvas ref={globeRef} className="globe" />
        <h1>#HUMANITY</h1>
        <p>Sign in or register to continue</p>
        <Link to="/register" className="button">Register</Link>
        <Link to="/dashboard" className="button">Log in</Link>
      </div>
    </div>
  );
}
