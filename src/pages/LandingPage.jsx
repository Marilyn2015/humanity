import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './LandingPage.css';

export default function LandingPage() {
  const globeRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, globeRef.current.clientWidth / globeRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(globeRef.current.clientWidth, globeRef.current.clientHeight);
    globeRef.current.appendChild(renderer.domElement);

    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const starVertices = [];

    for (let i = 0; i < starCount; i++) {
      starVertices.push(
        THREE.MathUtils.randFloatSpread(600), 
        THREE.MathUtils.randFloatSpread(600),
        THREE.MathUtils.randFloatSpread(600)
      );
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00aaff, wireframe: true });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      globeRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="landing-container">
      <div className="globe-background" ref={globeRef}></div>
      <div className="action-buttons">
        <button className="login">Login</button>
        <button className="register">Register</button>
      </div>
    </div>
  );
}
