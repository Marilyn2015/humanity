import React, { useEffect, useRef, useState } from "react";
import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue, push } from "firebase/database";
import * as THREE from "three";
import "./UniversePage.css";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBT7P7DAfV-I9ESe6f9Jdp5ioCyGIK0d9A",
  authDomain: "hashhumanity-58b9a.firebaseapp.com",
  databaseURL: "https://hashhumanity-58b9a-default-rtdb.firebaseio.com",
  projectId: "hashhumanity-58b9a",
  storageBucket: "hashhumanity-58b9a.appspot.com",
  messagingSenderId: "886745899016",
  appId: "1:886745899016:web:2b0f7e043c2434379d71bd",
  measurementId: "G-3ZTCXL4374"
};

// Firebase init
if (!getApps().length) initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();

// Starfield Component
function Starfield({ numStars = 250 }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    let stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.2,
      alpha: Math.random() * 0.8 + 0.2,
    }));

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 8;
        ctx.fill();
      });
      ctx.restore();
    }
    let anim;
    function animate() {
      draw();
      anim = requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener("resize", () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      // reposition stars
      stars.forEach(s => {
        s.x = Math.random() * w;
        s.y = Math.random() * h;
      });
    });
    return () => {
      cancelAnimationFrame(anim);
    };
  }, [numStars]);
  return (
    <canvas
      ref={canvasRef}
      className="starfield-bg"
      style={{
        position: "fixed",
        top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0,
        pointerEvents: "none"
      }}
    />
  );
}

// Globe Component
function SpinningGlobe() {
  const mountRef = useRef(null);
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const width = 320, height = 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 3.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0); // transparent
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 48, 48);
    const textureLoader = new THREE.TextureLoader();
    const material = new THREE.MeshStandardMaterial({
      map: textureLoader.load("/earthmap1k.jpg"), // Place image in `public/`
      roughness: 0.8,
      metalness: 0.6,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add some cyberpunk lighting
    const light1 = new THREE.PointLight(0xffffff, 1.2, 100);
    light1.position.set(5, 5, 5);
    scene.add(light1);
    const light2 = new THREE.PointLight(0x66ccff, 1, 100);
    light2.position.set(-4, -2, 3);
    scene.add(light2);

    let animId;
    function animate() {
      sphere.rotation.y += 0.0032;
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);
  return (
    <div
      ref={mountRef}
      style={{
        width: 320,
        height: 320,
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    />
  );
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.innerText = str;
  return div.innerHTML;
}

export default function UniversePage() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      // if (!u) window.location.href = "/login.html";
      setUser(u);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const postsRef = ref(db, "posts");
    return onValue(postsRef, (snap) => {
      const data = snap.val() || {};
      setPosts(
        Object.values(data)
          .sort((a, b) => b.timestamp - a.timestamp)
      );
    });
  }, []);

  async function handlePost() {
    if (!postText.trim()) return alert("Can't post empty shit.");
    try {
      await push(ref(db, "posts"), {
        text: postText,
        displayName: user?.displayName || "Anonymous",
        timestamp: Date.now(),
      });
      setPostText("");
    } catch (err) {
      console.error(err);
      alert("Failed to save post. Check console.");
    }
  }

  return (
    <div className="universe-root">
      <Starfield />
      <div className="universe-centered">
        <SpinningGlobe />
        <h1 className="universe-title">Feed the Human Feed</h1>
        <div className="universe-btn-row">
          <button className="glow-btn">My Profile</button>
          <button className="glow-btn" onClick={handlePost}>Post</button>
          <button className="glow-btn" onClick={() => window.location.href="/"}>Log Out</button>
        </div>
      </div>
      <div className="feed-section">
        <textarea
          value={postText}
          onChange={e => setPostText(e.target.value)}
          placeholder="What's on your mind?"
          className="glow-textarea"
        />
        <button className="glow-btn big-post-btn" onClick={handlePost}>Post</button>
        <div className="feed-list">
          {posts.map((p, i) => (
            <div key={i} className="post-item">
              <div className="post-header">
                <strong>{escapeHTML(p.displayName || "User")}</strong>
                <span className="post-time">{new Date(p.timestamp).toLocaleString()}</span>
              </div>
              <div className="post-body">{escapeHTML(p.text)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
