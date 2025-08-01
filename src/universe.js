// universe.js
// Front-end wiring for #HUMANITY Universe page

// Firebase configuration and initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
import "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js";
import "https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js";
import "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js";

const firebaseConfig = {
  apiKey: "AIzaSyBT7P7DAfV-I9ESe6f9Jdp5ioCyGIK0d9A",
  authDomain: "hashhumanity-58b9a.firebaseapp.com",
  databaseURL: "https://hashhumanity-58b9a-default-rtdb.firebaseio.com",
  projectId: "hashhumanity-58b9a",
  storageBucket: "hashhumanity-58b9a.firebasestorage.app",
  messagingSenderId: "886745899016",
  appId: "1:886745899016:web:2b0f7e043c2434379d71bd",
  measurementId: "G-3ZTCXL4374"
};

// Initialize Firebase app
initializeApp(firebaseConfig);

import {
  onAuthStateChangedListener,
  createPost,
  subscribeToPosts
} from "./firebase.js";

// DOM Elements
const postBtn = document.getElementById("post-btn");
const postText = document.getElementById("post-text");
const feedContainer = document.getElementById("feed");

let currentUid = null;

// 1. Ensure user is authenticated and load posts
onAuthStateChangedListener(user => {
  if (user) {
    currentUid = user.uid;
    // Subscribe to real-time post updates
    subscribeToPosts(renderPosts);
  } else {
    // Redirect will be handled in firebase.js
  }
});

// 2. Handle Post button click
function eventListener() {
  postBtn.addEventListener("click", async () => {
    const text = postText.value.trim();
    if (!text) {
      return alert("Can’t post empty shit.");
    }
    try {
      await createPost(currentUid, { text });
      postText.value = "";
    } catch (err) {
      console.error(err);
      alert("Failed to save post. Check console.");
    }
  });
}
eventListener();

// 3. Render posts in the feed
function renderPosts(posts) {
  feedContainer.innerHTML = "";
  posts.forEach(p => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post-item");
    const timestamp = new Date(p.timestamp).toLocaleString();
    postDiv.innerHTML = `
      <div class="post-header">
        <strong>${p.uid}</strong>
        <span class="post-time">${timestamp}</span>
      </div>
      <div class="post-body">${p.text}</div>
    `;
    // Prepend newest posts
    feedContainer.prepend(postDiv);
  });
}
