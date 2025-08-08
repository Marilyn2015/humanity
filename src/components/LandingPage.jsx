import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import "./LandingPage.css";

export default function LandingPage() {
  const starRef = useRef(null);
  const globeRef = useRef(null);

  // ----- STARFIELD -----
  useEffect(() => {
    const canvas = starRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let stars = [];
    const numStars = 350;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: numStars }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3
      }));
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function animate() {
      drawStars();
      requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // ----- GLOBE -----
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(350, 350);
    globeRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const texture = new THREE.TextureLoader().load(
      "https://threejsfundamentals.org/threejs/resources/images/earth.jpg"
    );
    const material = new THREE.MeshStandardMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    camera.position.z = 12;

    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.0015;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      while (globeRef.current.firstChild) {
        globeRef.current.removeChild(globeRef.current.firstChild);
      }
    };
  }, []);

  return (
    <div className="landing-container">
      <canvas ref={starRef} className="starfield"></canvas>

      <div className="content">
        <div ref={globeRef} className="globe"></div>

        <h1 className="title">HASH HUMANITY</h1>
        <div className="button-group">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Register</Link>
        </div>
      </div>
    </div>
  );
}
