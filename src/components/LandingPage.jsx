import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./LandingPage.css";

export default function LandingPage() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // sizes
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // scene
    const scene = new THREE.Scene();

    // camera
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 0, 3);

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // globe
    const geo = new THREE.SphereGeometry(1, 64, 64);
    // ⬇️ IMPORTANT: this path is from /public
    const tex = new THREE.TextureLoader().load("/textures/earth_day.jpg");
    const mat = new THREE.MeshStandardMaterial({ map: tex });
    const globe = new THREE.Mesh(geo, mat);
    scene.add(globe);

    // light
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(3, 2, 4);
    scene.add(dir);
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));

    // simple starfield
    const starsGeo = new THREE.BufferGeometry();
    const starCount = 800;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      const r = 30 * Math.cbrt(Math.random());
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    starsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(
      starsGeo,
      new THREE.PointsMaterial({ size: 0.02 })
    );
    scene.add(stars);

    // animate
    let raf;
    const tick = () => {
      globe.rotation.y += 0.003;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    // handle resize
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // cleanup
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      geo.dispose();
      tex.dispose();
      starsGeo.dispose();
    };
  }, []);

  return (
    <div className="landing-wrap">
      <div className="globe-wrap" ref={mountRef} />
      <div className="cta">
        <h1>#HUMANITY</h1>
        <p>Own your voice. Be verified. Be human.</p>
      </div>
    </div>
  );
}