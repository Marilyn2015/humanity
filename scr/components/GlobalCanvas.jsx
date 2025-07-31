import { useEffect } from "react";
import * as THREE from "three";

function GlobeCanvas() {
  useEffect(() => {
    const gc = document.getElementById("globe-canvas");
    const renderer = new THREE.WebGLRenderer({ canvas: gc, alpha: true, antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, gc.clientWidth / gc.clientHeight, 0.1, 1000);
    camera.position.z = 3;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 3, 5);
    scene.add(light);

    new THREE.TextureLoader().load("https://marilyn2015.github.io/Humanity/earthmap1k.jpg", tex => {
      const sph = new THREE.Mesh(
        new THREE.SphereGeometry(1, 32, 32),
        new THREE.MeshStandardMaterial({ map: tex })
      );
      scene.add(sph);

      function renderLoop() {
        sph.rotation.y += 0.005;
        renderer.setSize(gc.clientWidth, gc.clientHeight);
        renderer.render(scene, camera);
        requestAnimationFrame(renderLoop);
      }
      renderLoop();
    });

    window.addEventListener("resize", () => {
      camera.aspect = gc.clientWidth / gc.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(gc.clientWidth, gc.clientHeight);
    });
  }, []);

  return <canvas id="globe-canvas" width={300} height={300} />;
}

export default GlobeCanvas;
