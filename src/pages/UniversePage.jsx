// src/pages/UniversePage.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Globe from "globe.gl";
import { onAuthStateChanged } from "firebase/auth";
import {
  ref as dbRef,
  onValue,
  push,
  set as dbSet,
  serverTimestamp,
  remove,
} from "firebase/database";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { auth, db, storage } from "../firebase/firebaseConfig";

/* ───────── helpers ───────── */
const AVATAR_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="100%" height="100%" rx="48" fill="#1a1a1a"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="#e5e7eb">👤</text></svg>`
  );
const fmt = (ts) =>
  typeof ts === "number" && ts > 0 ? new Date(ts).toLocaleString() : "just now";
const getHost = (url) => {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return "";
  }
};
const stripUndefined = (o) =>
  JSON.parse(JSON.stringify(o, (_, v) => (v === undefined ? null : v)));
const linkThumb = (url) =>
  url
    ? `https://image.thum.io/get/width/800/crop/800/noanimate/${encodeURIComponent(
        url
      )}`
    : "";

/* 10 always-pinned demo posts (read-only) */
const DEMO_POSTS = [
  {
    id: "demo-1",
    username: "vega",
    photoURL: "https://i.pravatar.cc/96?img=12",
    text: "Real People. Real Identity. Real Conversation.\n#HUMANITY",
    createdAt: Date.now() - 1000 * 60 * 35,
    imageURL:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop",
    linkURL: "https://www.ietf.org/",
    likes: { d1: true, d2: true },
    comments: {
      c1: {
        uid: "u2",
        username: "nyx",
        avatar: "https://i.pravatar.cc/96?img=32",
        text: "This is the way.",
        createdAt: Date.now() - 1000 * 60 * 15,
      },
    },
  },
  {
    id: "demo-2",
    username: "atlas",
    photoURL: "https://i.pravatar.cc/96?img=5",
    text: "Zero ads. Zero bots. Verified humans only. Welcome to #HUMANITY.",
    createdAt: Date.now() - 1000 * 60 * 60 * 3,
    imageURL: "",
    linkURL: "",
    likes: {},
    comments: {},
  },
  {
    id: "demo-3",
    username: "sol",
    photoURL: "https://i.pravatar.cc/96?img=26",
    text:
      "Built a small client that verifies keys before any DM is sent. No key, no message.",
    createdAt: Date.now() - 1000 * 60 * 90,
    imageURL: "",
    linkURL: "https://www.rfc-editor.org/rfc/rfc8446",
    likes: { a: true },
    comments: {},
  },
  {
    id: "demo-4",
    username: "rhea",
    photoURL: "https://i.pravatar.cc/96?img=49",
    text:
      "Morning sky over Lagos. Cutting noise, boosting signal. Feels right.",
    createdAt: Date.now() - 1000 * 60 * 240,
    imageURL:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    linkURL: "",
    likes: {},
    comments: {},
  },
  {
    id: "demo-5",
    username: "kato",
    photoURL: "https://i.pravatar.cc/96?img=58",
    text: "Ship small, ship often. Trust is a feature you earn.",
    createdAt: Date.now() - 1000 * 60 * 300,
    imageURL: "",
    linkURL: "",
    likes: { z: true, y: true },
    comments: {},
  },
  {
    id: "demo-6",
    username: "delta",
    photoURL: "https://i.pravatar.cc/96?img=21",
    text:
      "Graph viz of real conversations (no bots). You can literally see authenticity.",
    createdAt: Date.now() - 1000 * 60 * 420,
    imageURL:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    linkURL: "",
    likes: {},
    comments: {},
  },
  {
    id: "demo-7",
    username: "noor",
    photoURL: "https://i.pravatar.cc/96?img=11",
    text: "Deleted 14 trackers from my phone today. Feels… lighter.",
    createdAt: Date.now() - 1000 * 60 * 520,
    imageURL: "",
    linkURL: "https://privacyguides.org/",
    likes: {},
    comments: {},
  },
  {
    id: "demo-8",
    username: "arun",
    photoURL: "https://i.pravatar.cc/96?img=39",
    text:
      "Coffee + code + clarity. Drafted the zero-trust friend graph this morning.",
    createdAt: Date.now() - 1000 * 60 * 620,
    imageURL:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
    linkURL: "",
    likes: { a: true },
    comments: {},
  },
  {
    id: "demo-9",
    username: "sora",
    photoURL: "https://i.pravatar.cc/96?img=7",
    text: "When the tools are honest, people can be honest.",
    createdAt: Date.now() - 1000 * 60 * 800,
    imageURL: "",
    linkURL: "",
    likes: {},
    comments: {
      c1: {
        uid: "u9",
        username: "miles",
        avatar: "https://i.pravatar.cc/96?img=53",
        text: "Pinned that.",
        createdAt: Date.now() - 1000 * 60 * 300,
      },
    },
  },
  {
    id: "demo-10",
    username: "luna",
    photoURL: "https://i.pravatar.cc/96?img=14",
    text: "Dark mode, bright minds.",
    createdAt: Date.now() - 1000 * 60 * 1000,
    imageURL:
      "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1600&auto=format&fit=crop",
    linkURL: "",
    likes: { a: true, b: true, c: true },
    comments: {},
  },
];

async function resizeImage(file, maxDim = 1280, quality = 0.85) {
  const img = new Image();
  const url = URL.createObjectURL(file);
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = rej;
    img.src = url;
  });
  const canvas = document.createElement("canvas");
  const scale = Math.min(maxDim / img.width, maxDim / img.height, 1);
  canvas.width = Math.round(img.width * scale);
  canvas.height = Math.round(img.height * scale);
  canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve) =>
    canvas.toBlob((blob) => {
      URL.revokeObjectURL(url);
      resolve(new File([blob], file.name, { type: "image/jpeg" }));
    }, "image/jpeg", quality)
  );
}

/* ───────── HUD ───────── */
function Hud({ msg, tone = "info" }) {
  if (!msg) return null;
  const bg =
    tone === "error" ? "#ff4d4f" : tone === "ok" ? "#12d18e" : "rgba(255,255,255,.95)";
  return (
    <div
      style={{
        position: "fixed",
        top: 14,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        padding: "8px 14px",
        borderRadius: 10,
        background: bg,
        color: "#000",
        fontWeight: 800,
        boxShadow:
          "0 12px 40px rgba(255,255,255,.15), 0 6px 20px rgba(0,0,0,.35)",
        fontFamily: "ui-monospace, Menlo, monospace",
      }}
    >
      {msg}
    </div>
  );
}

/* ───────── Starfield ───────── */
function Starfield({ count = 280 }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current,
      ctx = c.getContext("2d");
    let w, h, stars, raf;
    const make = (n) =>
      Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        base: Math.random() * 0.5 + 0.35,
        phase: Math.random() * Math.PI * 2,
      }));
    const resize = () => {
      w = c.width = innerWidth;
      h = c.height = innerHeight;
      stars = make(count);
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const t = Date.now() * 0.002;
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;
        ctx.globalAlpha = s.base + Math.sin(t + s.phase) * 0.12;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#e5e7eb";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 6;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    resize();
    addEventListener("resize", resize);
    draw();
    return () => {
      removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [count]);
  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        background: "#000",
      }}
    />
  );
}

/* ───────── Globe (globe.gl) ───────── */
function ProGlobe({ onSize }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const g = Globe()(containerRef.current);

    g.backgroundColor("rgba(0,0,0,0)");
    g.atmosphereColor("#ffffff");
    g.atmosphereAltitude(0.18);
    g.pointOfView({ altitude: 2.05 }, 0);

    // Realistic Earth + bump
    g.globeImageUrl(
      "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
    );
    g.bumpImageUrl(
      "https://unpkg.com/three-globe/example/img/earth-topology.png"
    );
    g.showGlobe(true).showAtmosphere(true);

    // Nodes
    const CITIES = [
      { name: "New York", lat: 40.7128, lng: -74.006 },
      { name: "San Francisco", lat: 37.7749, lng: -122.4194 },
      { name: "London", lat: 51.5074, lng: -0.1278 },
      { name: "Berlin", lat: 52.52, lng: 13.405 },
      { name: "Lagos", lat: 6.5244, lng: 3.3792 },
      { name: "São Paulo", lat: -23.5505, lng: -46.6333 },
      { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
      { name: "Seoul", lat: 37.5665, lng: 126.978 },
      { name: "Sydney", lat: -33.8688, lng: 151.2093 },
      { name: "Mumbai", lat: 19.076, lng: 72.8777 },
      { name: "Johannesburg", lat: -26.2041, lng: 28.0473 },
      { name: "Toronto", lat: 43.6532, lng: -79.3832 },
    ];
    g.pointsData(CITIES)
      .pointLat("lat")
      .pointLng("lng")
      .pointAltitude(0.02)
      .pointRadius(0.9)
      .pointColor(() => "#ffffff")
      .pointsMerge(true)
      .pointLabel("name");

    // Arcs
    const LINKS = [
      ["New York", "London"],
      ["London", "Berlin"],
      ["Berlin", "Tokyo"],
      ["Tokyo", "Seoul"],
      ["Seoul", "Sydney"],
      ["Sydney", "Mumbai"],
      ["Mumbai", "Johannesburg"],
      ["Johannesburg", "Lagos"],
      ["Lagos", "São Paulo"],
      ["São Paulo", "San Francisco"],
      ["San Francisco", "Toronto"],
      ["Toronto", "New York"],
    ];
    const map = Object.fromEntries(CITIES.map((c) => [c.name, c]));
    const arcs = LINKS.map(([a, b]) => ({
      startLat: map[a].lat,
      startLng: map[a].lng,
      endLat: map[b].lat,
      endLng: map[b].lng,
    }));
    g.arcsData(arcs)
      .arcColor(() => ["rgba(255,255,255,.10)", "rgba(255,255,255,.95)"])
      .arcStroke(0.6)
      .arcAltitude(0.25)
      .arcDashLength(0.35)
      .arcDashGap(0.9)
      .arcDashAnimateTime(1600);

    g.controls().autoRotate = true;
    g.controls().autoRotateSpeed = 0.55;
    g.controls().enableZoom = false;

    const setSize = () => {
      const s = Math.min(window.innerWidth, window.innerHeight) * 0.78;
      g.width(s);
      g.height(s);
      Object.assign(containerRef.current.style, {
        width: `${s}px`,
        height: `${s}px`,
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -52%)",
        pointerEvents: "none",
        filter: "drop-shadow(0 0 40px rgba(255,255,255,.15))",
        zIndex: 1,
      });
      onSize?.(s);
    };
    setSize();
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, [onSize]);

  return <div ref={containerRef} />;
}

/* ───────── Modal ───────── */
function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 30,
        backdropFilter: "blur(10px)",
        background: "rgba(0,0,0,.65)",
        display: "grid",
        placeItems: "center",
        padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(520px,94vw)",
          borderRadius: 10,
          border: "1px solid rgba(255,255,255,.18)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03))",
          color: "#e5e7eb",
          padding: 14,
          position: "relative",
          boxShadow:
            "0 20px 60px rgba(0,0,0,.55), 0 0 40px rgba(255,255,255,.08)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            border: "1px solid rgba(255,255,255,.25)",
            background: "rgba(255,255,255,.06)",
            color: "#fff",
            borderRadius: 6,
            fontWeight: 900,
            padding: "2px 8px",
            cursor: "pointer",
          }}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

/* ───────── Page ───────── */
export default function UniversePage() {
  return (
    <PageBoundary>
      <UniverseInner />
    </PageBoundary>
  );
}

class PageBoundary extends React.Component {
  state = { err: null };
  static getDerivedStateFromError(e) {
    return { err: e };
  }
  componentDidCatch(e, i) {
    console.error("[Universe crash]", e, i);
  }
  render() {
    if (this.state.err) {
      return (
        <div
          style={{
            minHeight: "100vh",
            background: "#000",
            color: "#fff",
            display: "grid",
            placeItems: "center",
            padding: 20,
            fontFamily: "ui-monospace,Menlo,monospace",
          }}
        >
          <div style={{ maxWidth: 820 }}>
            <h2 style={{ margin: 0, fontWeight: 900 }}>Page error</h2>
            <p style={{ opacity: 0.85 }}>
              Install <code>globe.gl</code> and verify Firebase config/rules.
            </p>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                background: "#0a0a0a",
                padding: 12,
                borderRadius: 10,
                border: "1px solid #2a2a2a",
                color: "#ddd",
              }}
            >
              {String(this.state.err?.message || this.state.err)}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

/* Layout anchor under the globe */
function useGlobeSize() {
  const [s, setS] = useState(0);
  useEffect(() => {
    const calc = () =>
      setS(Math.min(window.innerWidth, window.innerHeight) * 0.78);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return s;
}

/* Square buttons directly under globe */
function UnderButtons({ onHome, onProfile, onNewPost, globeSize }) {
  const top = `calc(50% + ${globeSize / 2 + 16}px)`;
  return (
    <div
      style={{
        position: "fixed",
        top,
        left: "50%",
        transform: "translate(-50%, 0)",
        zIndex: 5,
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        justifyContent: "center",
        pointerEvents: "auto",
      }}
    >
      <button
        onClick={onHome}
        style={{ ...styles.heroBtn, ...styles.heroBtnPrimary }}
      >
        Home
      </button>
      <button
        onClick={onProfile}
        style={{ ...styles.heroBtn, ...styles.heroBtnGhost }}
      >
        My Profile
      </button>
      <button
        onClick={onNewPost}
        style={{ ...styles.heroBtn, ...styles.heroBtnPrimary }}
      >
        New Post
      </button>
    </div>
  );
}

function UniverseInner() {
  const navigate = useNavigate();

  const [hud, setHud] = useState("");
  const [hudTone, setHudTone] = useState("info");
  useEffect(() => {
    if (hud) {
      const t = setTimeout(() => setHud(""), 3600);
      return () => clearTimeout(t);
    }
  }, [hud]);

  // auth
  const [user, setUser] = useState(null);
  useEffect(() => onAuthStateChanged(auth, (u) => setUser(u || null)), []);

  // globe size
  const globeSize = useGlobeSize();

  // feed (init with demos so they ALWAYS show)
  const [posts, setPosts] = useState([...DEMO_POSTS]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("local_posts") || "[]");
    const ref = dbRef(db, "posts");
    const unsub = onValue(
      ref,
      (snap) => {
        const out = [];
        snap.forEach((ch) => {
          const v = ch.val();
          out.push({
            id: ch.key,
            username: v.username || v.displayName || "User",
            photoURL: v.avatar || v.photoURL || "",
            text: v.text || "",
            createdAt: typeof v.createdAt === "number" ? v.createdAt : 0,
            imageURL:
              v.media?.type === "image" ? v.media.url : v.imageURL || "",
            linkURL: v.link || v.linkURL || "",
            linkHost: getHost(v.link || v.linkURL || ""),
            likes: v.likes || {},
            comments: v.comments || {},
          });
        });
        out.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        // DEMOS always pinned first
        setPosts([...DEMO_POSTS, ...out, ...local]);
        setLoading(false);
      },
      (e) => {
        console.error(e);
        setErr(e?.message || "Failed to read feed.");
        setPosts([...DEMO_POSTS, ...local]); // still show demos on error
        setLoading(false);
      }
    );
    return () => unsub();
  }, []);

  // composer
  const [composerOpen, setComposerOpen] = useState(false);
  const [text, setText] = useState("");
  const [linkURL, setLinkURL] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [posting, setPosting] = useState(false);

  const onPickImage = async (file) => {
    if (!file) return;
    const r = await resizeImage(file);
    setImageFile(r);
    setImagePreview(URL.createObjectURL(r));
  };
  const onDrop = useCallback(async (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f?.type.startsWith("image/")) await onPickImage(f);
  }, []);
  const onDragOver = (e) => e.preventDefault();

  const submitPost = async () => {
    try {
      if (posting) return;
      const t = (text || "").trim();
      const url = (linkURL || "").trim();
      if (!user) {
        setHud("Please sign in to post");
        setHudTone("error");
        return;
      }
      if (!t && !imageFile && !url) {
        setHud("Type something, add a link, or attach an image");
        setHudTone("error");
        return;
      }
      setPosting(true);
      setHud("Posting…");
      setHudTone("info");

      let imageURL = "";
      if (imageFile) {
        try {
          const id = uuidv4();
          const p = storageRef(storage, `post_images/${user.uid}/${id}.jpg`);
          await uploadBytes(p, imageFile);
          imageURL = await getDownloadURL(p);
        } catch (e) {
          console.warn(e);
          setHud("Image upload failed — posting without image");
          setHudTone("error");
        }
      }

      const now = Date.now();
      const username =
        user.displayName || (user.email ? user.email.split("@")[0] : "User");
      const avatar = user.photoURL || AVATAR_FALLBACK;

      const data = stripUndefined({
        uid: user.uid,
        username,
        avatar,
        text: t,
        createdAt: now,
        likes: {},
        comments: {},
        createdAtServer: serverTimestamp(),
        ...(imageURL ? { media: { type: "image", url: imageURL } } : {}),
        ...(url ? { link: url } : {}),
      });

      // try RTDB first
      try {
        const newRef = push(dbRef(db, "posts"));
        await dbSet(newRef, data);
      } catch (e) {
        console.warn("[RTDB write failed, using local fallback]", e?.message || e);
        const localPost = {
          id: `local-${uuidv4()}`,
          ...data,
          linkURL: data.link || "",
          imageURL: data.media?.url || "",
          isLocal: true,
        };
        const prev = JSON.parse(localStorage.getItem("local_posts") || "[]");
        localStorage.setItem("local_posts", JSON.stringify([localPost, ...prev]));
        setPosts((p) => [localPost, ...p]); // surface immediately
      }

      setHud("Post published");
      setHudTone("ok");
      setText("");
      setLinkURL("");
      if (imagePreview) URL.revokeObjectURL(imagePreview);
      setImagePreview("");
      setImageFile(null);
      setComposerOpen(false);
    } catch (e) {
      console.error(e);
      setHud(e?.message || "Could not post.");
      setHudTone("error");
    } finally {
      setPosting(false);
    }
  };

  // likes
  const toggleLike = async (post) => {
    if (!user) {
      setHud("Sign in to like");
      setHudTone("error");
      return;
    }
    if (post.id.startsWith("demo-") || post.isLocal) return; // read-only
    const path = dbRef(db, `posts/${post.id}/likes/${user.uid}`);
    try {
      if (post.likes && post.likes[user.uid]) await remove(path);
      else await dbSet(path, true);
    } catch (e) {
      console.error(e);
      setHud(e?.message || "Like failed");
      setHudTone("error");
    }
  };

  // comments
  const [drafts, setDrafts] = useState({});
  const sendComment = async (postId) => {
    if (!user) {
      setHud("Sign in to comment");
      setHudTone("error");
      return;
    }
    const msg = (drafts[postId] || "").trim();
    if (!msg) return;
    try {
      const username =
        user.displayName || (user.email ? user.email.split("@")[0] : "User");
      const avatar = user.photoURL || AVATAR_FALLBACK;
      if (postId.startsWith("demo-") || postId.startsWith("local-")) {
        setHud("Comments are read-only on demo/local posts");
        setHudTone("error");
        return;
      }
      const ref = push(dbRef(db, `posts/${postId}/comments`));
      await dbSet(
        ref,
        stripUndefined({
          uid: user.uid,
          username,
          avatar,
          text: msg,
          createdAt: Date.now(),
          createdAtServer: serverTimestamp(),
        })
      );
      setDrafts((d) => ({ ...d, [postId]: "" }));
    } catch (e) {
      console.error(e);
      setHud(e?.message || "Comment failed");
      setHudTone("error");
    }
  };

  return (
    <div style={styles.page}>
      <Starfield />
      <ProGlobe onSize={() => {}} />
      <div style={styles.vignette} />
      <Hud msg={hud} tone={hudTone} />

      {/* Headline above globe */}
      <div style={styles.topWrap}>
        <div style={styles.brand}>#HUMANITY</div>
        <div style={styles.tagline}>
          Real People. Real Identity. Real Conversation.
        </div>
      </div>

      {/* Buttons directly under globe */}
      <UnderButtons
        globeSize={globeSize}
        onHome={() => navigate("/")}
        onProfile={() =>
          user ? navigate(`/profile/${user.uid}`) : navigate("/login")
        }
        onNewPost={() => (user ? setComposerOpen(true) : navigate("/login"))}
      />

      {/* Feed ALWAYS below buttons; page scrolls; demos always on top */}
      <main
        style={{
          ...styles.feedWrap,
          paddingTop: `calc(${globeSize}px + 170px)`,
        }}
      >
        <h2 style={styles.sectionTitle}>Global Feed</h2>

        {loading && posts.length === 0 ? (
          <div style={styles.empty}>Loading feed…</div>
        ) : null}

        {posts.map((p) => {
          const likeCount = Object.keys(p.likes || {}).length;
          const youLiked = user ? !!p.likes?.[user.uid] : false;
          const comments = p.comments
            ? Object.entries(p.comments).map(([id, c]) => ({ id, ...c }))
            : [];
          comments.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
          const isDemo = p.id.startsWith("demo-");
          const isLocal = !!p.isLocal;

          return (
            <article key={p.id} style={styles.card}>
              <div style={styles.cardHeader}>
                <img
                  src={p.photoURL || AVATAR_FALLBACK}
                  alt=""
                  style={styles.avatar}
                  referrerPolicy="no-referrer"
                />
                <div style={{ minWidth: 0 }}>
                  <div style={styles.displayName}>
                    {p.username}{" "}
                    {(isDemo || isLocal) && (
                      <span
                        style={{
                          opacity: 0.6,
                          fontWeight: 600,
                          fontSize: 12,
                          marginLeft: 6,
                        }}
                      >
                        ({isDemo ? "demo" : "local"})
                      </span>
                    )}
                  </div>
                  <div style={styles.meta}>{fmt(p.createdAt)}</div>
                </div>
              </div>

              {p.text && <div style={styles.text}>{p.text}</div>}

              {p.imageURL && (
                <a
                  href={p.imageURL}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "block", marginTop: 10 }}
                >
                  <img src={p.imageURL} alt="" style={styles.postImage} />
                </a>
              )}

              {p.linkURL && (
                <a
                  href={p.linkURL}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.linkCard}
                >
                  <div style={styles.linkThumbWrap}>
                    <img src={linkThumb(p.linkURL)} alt="" style={styles.linkThumb} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={styles.linkHostRow}>
                      <span style={{ opacity: 0.9 }}>{getHost(p.linkURL)}</span>
                    </div>
                    <div style={styles.linkUrlText}>{p.linkURL}</div>
                  </div>
                </a>
              )}

              <div style={styles.actionsRow}>
                <button
                  onClick={() => (isDemo || isLocal ? null : toggleLike(p))}
                  style={{
                    ...styles.actionBtn,
                    ...(youLiked ? styles.actionBtnOn : {}),
                    ...(isDemo || isLocal ? { opacity: 0.75, cursor: "default" } : {}),
                  }}
                  title={isDemo || isLocal ? "Read-only" : "Like"}
                >
                  ♥ {likeCount}
                </button>
              </div>

              <div style={styles.commentsWrap}>
                {comments.length > 0 && (
                  <div style={styles.commentList}>
                    {comments.map((c) => (
                      <div key={c.id} style={styles.commentItem}>
                        <img
                          src={c.avatar || AVATAR_FALLBACK}
                          alt=""
                          style={styles.commentAvatar}
                          referrerPolicy="no-referrer"
                        />
                        <div style={{ minWidth: 0 }}>
                          <div style={styles.commentHeader}>
                            <span style={styles.commentName}>
                              {c.username || "User"}
                            </span>
                            <span style={styles.commentTime}>
                              {fmt(c.createdAt)}
                            </span>
                          </div>
                          <div style={styles.commentText}>{c.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div style={styles.commentComposer}>
                  <input
                    type="text"
                    placeholder={
                      isDemo || isLocal
                        ? "Comments disabled on demo/local posts"
                        : user
                        ? "Write a comment…"
                        : "Sign in to comment"
                    }
                    value={
                      isDemo || isLocal ? "" : (styles._dummy, drafts[p.id] || "")
                    }
                    onChange={(e) =>
                      setDrafts((d) => ({ ...d, [p.id]: e.target.value }))
                    }
                    disabled={!user || isDemo || isLocal}
                    style={styles.commentInput}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !(isDemo || isLocal))
                        sendComment(p.id);
                    }}
                  />
                  <button
                    onClick={() =>
                      isDemo || isLocal ? null : sendComment(p.id)
                    }
                    disabled={
                      !user ||
                      isDemo ||
                      isLocal ||
                      !(drafts[p.id] || "").trim()
                    }
                    style={{ ...styles.btn, ...styles.btnPrimary, padding: "8px 12px" }}
                    title={isDemo || isLocal ? "Read-only" : "Reply"}
                  >
                    Reply
                  </button>
                </div>
              </div>
            </article>
          );
        })}
        {err && (
          <div
            style={{
              color: "#ff6b6b",
              marginTop: 10,
              textAlign: "center",
              fontFamily: "ui-monospace, Menlo, monospace",
            }}
          >
            {err}
          </div>
        )}
      </main>

      {/* Composer */}
      <Modal open={composerOpen} onClose={() => setComposerOpen(false)}>
        <div style={styles.composeHeader}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src={user?.photoURL || AVATAR_FALLBACK}
              alt=""
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                objectFit: "cover",
                border: "1px solid rgba(255,255,255,.22)",
              }}
              referrerPolicy="no-referrer"
            />
            <div
              style={{
                fontWeight: 900,
                letterSpacing: ".04em",
                color: "#fff",
                fontFamily: "ui-monospace, Menlo, monospace",
              }}
            >
              {user?.displayName ||
                (user?.email ? user.email.split("@")[0] : "You")}
            </div>
          </div>
          <div
            style={{
              fontSize: 11,
              opacity: 0.75,
              fontFamily: "ui-monospace, Menlo, monospace",
            }}
          >
            {text.length}/500
          </div>
        </div>

        <div style={styles.textareaWrap}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={500}
            placeholder="compose:// say something that matters"
            style={styles.textarea}
            rows={5}
            disabled={posting}
          />
          <div style={styles.accentBar} />
        </div>

        <div style={styles.inputRow}>
          <input
            type="url"
            inputMode="url"
            placeholder="link:// paste an article URL (optional)"
            value={linkURL}
            onChange={(e) => setLinkURL(e.target.value)}
            style={styles.urlInput}
            disabled={posting}
          />
        </div>

        <div style={styles.dropzone} onDrop={onDrop} onDragOver={onDragOver}>
          <input
            type="file"
            accept="image/*"
            id="post-image-input"
            style={{ display: "none" }}
            disabled={posting}
            onChange={(e) =>
              e.target.files?.[0] &&
              (async () => {
                const f = e.target.files[0];
                const r = await resizeImage(f);
                setImageFile(r);
                setImagePreview(URL.createObjectURL(r));
              })()
            }
          />
          <label
            htmlFor="post-image-input"
            style={{ cursor: posting ? "not-allowed" : "pointer" }}
          >
            {imagePreview ? (
              <img src={imagePreview} alt="preview" style={styles.previewImage} />
            ) : (
              <div
                style={{
                  opacity: 0.9,
                  textAlign: "center",
                  fontFamily: "ui-monospace, Menlo, monospace",
                  color: "#e5e7eb",
                }}
              >
                <div style={{ fontWeight: 800, marginBottom: 4 }}>
                  attach:// image (optional)
                </div>
                <div style={{ opacity: 0.7, fontSize: 12 }}>
                  click to select or drag & drop
                </div>
              </div>
            )}
          </label>
        </div>

        <div style={styles.modalActions}>
          <button
            onClick={() => setComposerOpen(false)}
            style={{ ...styles.btn, ...styles.btnGhost }}
          >
            Cancel (Esc)
          </button>
          <button
            onClick={submitPost}
            disabled={posting}
            style={{ ...styles.btn, ...styles.btnPrimary }}
          >
            {posting ? "Posting…" : "Post (⌘/Ctrl+Enter)"}
          </button>
        </div>
      </Modal>
    </div>
  );
}

/* ───────── styles ───────── */
const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    background: "#000",
    color: "#e5e7eb",
    fontFamily:
      "system-ui,-apple-system,Segoe UI,Roboto,Inter,ui-monospace,Menlo,monospace",
  },
  vignette: {
    position: "fixed",
    inset: 0,
    zIndex: 2,
    pointerEvents: "none",
    background:
      "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.85) 100%)",
  },

  topWrap: {
    position: "fixed",
    top: 14,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 4,
    textAlign: "center",
    pointerEvents: "none",
  },
  brand: {
    fontFamily: "ui-monospace, Menlo, monospace",
    color: "#fff",
    fontWeight: 900,
    letterSpacing: ".18em",
    textShadow: "0 0 18px rgba(255,255,255,.18)",
  },
  tagline: { marginTop: 4, opacity: 0.9 },

  feedWrap: {
    position: "relative",
    zIndex: 3,
    maxWidth: 900,
    margin: "0 auto 140px",
    padding: "0 16px 16px",
  },
  sectionTitle: {
    margin: "0 0 12px",
    fontSize: 16,
    letterSpacing: ".14em",
    color: "#fff",
    fontFamily: "ui-monospace, Menlo, monospace",
    opacity: 0.92,
    textAlign: "center",
  },
  empty: {
    textAlign: "center",
    opacity: 0.85,
    padding: "24px 0",
    fontFamily: "ui-monospace, Menlo, monospace",
  },

  card: {
    background:
      "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
    border: "1px solid rgba(255,255,255,.18)",
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    boxShadow: "0 12px 36px rgba(0,0,0,0.45), 0 0 22px rgba(255,255,255,.08)",
  },
  cardHeader: { display: "flex", alignItems: "center", gap: 10, marginBottom: 6 },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    objectFit: "cover",
    border: "1px solid rgba(255,255,255,.25)",
  },
  displayName: {
    fontWeight: 900,
    color: "#fff",
    fontFamily: "ui-monospace, Menlo, monospace",
    textShadow: "0 0 12px rgba(255,255,255,.15)",
  },
  meta: { fontSize: 12, opacity: 0.7 },
  text: {
    lineHeight: 1.55,
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    marginTop: 6,
    color: "#e5e7eb",
  },
  postImage: {
    width: "100%",
    maxHeight: 520,
    objectFit: "cover",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,.18)",
  },

  linkCard: {
    marginTop: 10,
    display: "flex",
    gap: 12,
    alignItems: "stretch",
    border: "1px solid rgba(255,255,255,.18)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",
    borderRadius: 10,
    padding: 10,
    textDecoration: "none",
    color: "#e5e7eb",
  },
  linkThumbWrap: {
    width: 120,
    height: 72,
    borderRadius: 10,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,.18)",
    flexShrink: 0,
    background: "rgba(0,0,0,.35)",
    display: "grid",
    placeItems: "center",
  },
  linkThumb: { width: "100%", height: "100%", objectFit: "cover" },
  linkHostRow: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    opacity: 0.9,
    marginBottom: 2,
  },
  linkUrlText: {
    opacity: 0.8,
    fontSize: 12,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  actionsRow: { marginTop: 10, display: "flex", alignItems: "center", gap: 10 },
  actionBtn: {
    padding: "8px 12px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,.25)",
    background: "rgba(255,255,255,.06)",
    color: "#fff",
    fontWeight: 800,
    cursor: "pointer",
  },
  actionBtnOn: {
    background: "linear-gradient(180deg, #fff, #e5e7eb)",
    color: "#000",
  },

  commentsWrap: { marginTop: 10 },
  commentList: { display: "grid", gap: 10, marginTop: 8 },
  commentItem: { display: "flex", gap: 10 },
  commentAvatar: {
    width: 26,
    height: 26,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,.25)",
    objectFit: "cover",
  },
  commentHeader: {
    display: "flex",
    gap: 8,
    alignItems: "baseline",
    fontSize: 12,
    opacity: 0.8,
  },
  commentName: { fontWeight: 800, color: "#fff" },
  commentTime: { opacity: 0.7 },
  commentText: { color: "#e5e7eb" },

  commentComposer: {
    display: "flex",
    gap: 8,
    alignItems: "center",
    marginTop: 6,
  },
  commentInput: {
    flex: 1,
    padding: "8px 10px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,.24)",
    background: "rgba(255,255,255,.06)",
    color: "#fff",
    outline: "none",
  },

  composeHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  textareaWrap: { position: "relative" },
  accentBar: {
    position: "absolute",
    left: 10,
    top: 10,
    bottom: 10,
    width: 2,
    background: "linear-gradient(180deg, #fff, #bbb)",
    opacity: 0.65,
    filter: "blur(.4px)",
  },
  textarea: {
    width: "100%",
    minHeight: 96,
    maxHeight: 220,
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,.24)",
    background: "rgba(255,255,255,.06)",
    color: "#fff",
    padding: "10px 12px 10px 18px",
    outline: "none",
    resize: "vertical",
    fontFamily: "ui-monospace, Menlo, monospace",
  },
  inputRow: { marginTop: 8 },
  urlInput: {
    width: "100%",
    padding: "9px 12px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,.24)",
    background: "rgba(255,255,255,.06)",
    color: "#fff",
    outline: "none",
  },
  dropzone: {
    marginTop: 8,
    border: "1px dashed rgba(255,255,255,.28)",
    borderRadius: 8,
    background: "rgba(255,255,255,.05)",
    padding: 10,
    display: "grid",
    placeItems: "center",
    minHeight: 92,
  },
  previewImage: {
    maxWidth: "100%",
    maxHeight: 220,
    objectFit: "cover",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,.24)",
  },
  modalActions: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
  },

  // Square/Sharp hero buttons (under globe)
  heroBtn: {
    padding: "12px 18px",
    borderRadius: 6,
    fontWeight: 900,
    letterSpacing: ".04em",
    border: "2px solid rgba(255,255,255,.34)",
    boxShadow: "0 0 18px rgba(255,255,255,.25)",
    cursor: "pointer",
  },
  heroBtnPrimary: {
    background: "linear-gradient(180deg, #fff, #e5e7eb)",
    color: "#000",
  },
  heroBtnGhost: { background: "transparent", color: "#fff" },
};

