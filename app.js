// app.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.136.0/build/three.module.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js';
import {
  getDatabase, ref, child, get, push, onChildAdded, remove, update,
  onValue
} from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js';
import { getStorage, ref as sref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js';

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

const mockProfiles = [
  { name: 'Alice', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'Bob', avatar: 'https://randomuser.me/api/portraits/men/34.jpg' }
];

let currentUserId = null;
onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = 'index.html';
  } else {
    currentUserId = user.uid;
    const userRef = child(ref(db), `users/${user.uid}`);
    get(userRef).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const fullName = `${data.firstName} ${data.lastName}`;
        document.getElementById('profileBtn').textContent = fullName;
        window.currentUserProfile = {
          name: fullName,
          avatar: data.photoURL || mockProfiles[0].avatar
        };
      } else {
        document.getElementById('profileBtn').textContent = user.email;
        window.currentUserProfile = {
          name: user.email,
          avatar: mockProfiles[0].avatar
        };
      }
    }).catch(console.error);
  }
});

document.getElementById('profileBtn').onclick = () => window.location.href = 'view_profile.html';
document.getElementById('logoutBtn').onclick = () => window.location.href = 'index.html';

document.getElementById('newPostBtn').onclick = () => {
  document.getElementById('overlay').classList.add('active');
  document.getElementById('postModal').classList.add('active');
};
document.getElementById('cancelBtn').onclick = () => {
  document.getElementById('overlay').classList.remove('active');
  document.getElementById('postModal').classList.remove('active');
  document.getElementById('postContent').value = '';
  fileInput.value = '';
};

const fileInput = document.getElementById('postImage');
let editingKey = null;

document.getElementById('postButton').onclick = async e => {
  e.preventDefault();
  const content = document.getElementById('postContent').value.trim();
  if (!content) return;

  let imageUrl = '';
  const file = fileInput.files[0];
  if (file) {
    const storageRef = sref(storage, `posts/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    imageUrl = await getDownloadURL(storageRef);
  }

  const data = {
    content,
    imageUrl,
    timestamp: Date.now(),
    userId: currentUserId
  };

  if (editingKey) {
    await update(ref(db, `posts/${editingKey}`), data);
    editingKey = null;
  } else {
    await push(ref(db, 'posts'), data);
  }

  document.getElementById('postContent').value = '';
  fileInput.value = '';
  document.getElementById('overlay').classList.remove('active');
  document.getElementById('postModal').classList.remove('active');
};

onChildAdded(ref(db, 'posts'), snapshot => {
  const post = snapshot.val();
  const key = snapshot.key;
  const profile = window.currentUserProfile || mockProfiles[Math.abs(hashCode(key)) % mockProfiles.length];

  const div = document.createElement('div');
  div.className = 'post';
  div.id = `post-${key}`;
  div.innerHTML = `
    <div class="post-header">
      <img class="post-avatar" src="${profile.avatar}" />
      <div class="post-author">${profile.name}</div>
      <div class="post-time">${new Date(post.timestamp).toLocaleString()}</div>
    </div>
    <div class="post-content">${post.content || ''}</div>
    ${post.imageUrl ? `<img class="post-img" src="${post.imageUrl}" />` : ''}
    <div class="post-actions" style="margin-top:10px">
      <button class="btn" onclick="likePost('${key}')">❤️ Like</button>
      <span id="like-count-${key}">0</span>
    </div>
    <div class="comment-box">
      <input type="text" id="comment-input-${key}" placeholder="Write a comment..." style="width: 100%; margin-top: 10px;" />
      <button class="btn" onclick="commentPost('${key}')">Comment</button>
      <div id="comments-${key}" class="comments-list"></div>
    </div>
    ${post.userId === currentUserId ? `
      <div style="margin-top:10px">
        <button class="btn" onclick="editPost('${key}', '${post.content.replace(/'/g, "\'")}')">Edit</button>
        <button class="btn" onclick="deletePost('${key}')">Delete</button>
      </div>
    ` : ''}
  `;
  document.getElementById('postFeed').prepend(div);

  // Listen for likes
  onValue(ref(db, `likes/${key}`), snap => {
    const likes = snap.exists() ? Object.keys(snap.val()).length : 0;
    document.getElementById(`like-count-${key}`).textContent = likes;
  });

  // Load comments
  onChildAdded(ref(db, `comments/${key}`), commentSnap => {
    const comment = commentSnap.val();
    const cDiv = document.createElement('div');
    cDiv.textContent = `${comment.name}: ${comment.text}`;
    document.getElementById(`comments-${key}`).appendChild(cDiv);
  });
});

window.likePost = key => {
  const likeRef = ref(db, `likes/${key}/${currentUserId}`);
  get(likeRef).then(snap => {
    if (snap.exists()) {
      remove(likeRef);
    } else {
      update(likeRef, { liked: true });
    }
  });
};

window.commentPost = key => {
  const input = document.getElementById(`comment-input-${key}`);
  const text = input.value.trim();
  if (!text) return;

  const comment = {
    text,
    name: window.currentUserProfile?.name || 'Anonymous',
    timestamp: Date.now()
  };
  push(ref(db, `comments/${key}`), comment);
  input.value = '';
};

window.deletePost = key => {
  if (confirm('Are you sure you want to delete this post?')) {
    remove(ref(db, `posts/${key}`));
    const el = document.getElementById(`post-${key}`);
    if (el) el.remove();
  }
};

window.editPost = (key, content) => {
  editingKey = key;
  document.getElementById('postContent').value = content;
  document.getElementById('overlay').classList.add('active');
  document.getElementById('postModal').classList.add('active');
};

function hashCode(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return h;
}

function initStars() {
  const c = document.getElementById('star-bg');
  const ctx = c.getContext('2d');
  let stars = [];
  function resize() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: Math.random() * 1.2 + 0.3,
      base: Math.random() * 0.5 + 0.2,
      phase: Math.random() * Math.PI * 2
    }));
  }
  window.addEventListener('resize', resize);
  resize();
  (function animate() {
    const t = Date.now() * 0.002;
    ctx.clearRect(0, 0, c.width, c.height);
    stars.forEach(s => {
      ctx.globalAlpha = s.base + Math.sin(t + s.phase) * 0.1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();
    });
    requestAnimationFrame(animate);
  })();
}

function initGlobe() {
  const gc = document.getElementById('globe-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas: gc, alpha: true, antialias: true });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, gc.clientWidth / gc.clientHeight, 0.1, 1000);
  camera.position.z = 3;
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 3, 5);
  scene.add(light);

  new THREE.TextureLoader().load('https://marilyn2015.github.io/Humanity/earthmap1k.jpg', texture => {
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshStandardMaterial({ map: texture })
    );
    scene.add(sphere);
    function render() {
      sphere.rotation.y += 0.005;
      renderer.setSize(gc.clientWidth, gc.clientHeight);
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    render();
  });

  window.addEventListener('resize', () => {
    camera.aspect = gc.clientWidth / gc.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(gc.clientWidth, gc.clientHeight);
  });
}

initStars();
initGlobe();
