// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import {
  getDatabase,
  ref as dbRef,
  set as dbSet,
  onValue,
  push as dbPush,
  serverTimestamp
} from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);

// Auth listener
export function authStateListener(callback) {
  return onAuthStateChanged(auth, callback);
}

// Auth functions
export function registerWithEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function loginWithEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// User profile functions
export function createUserProfile(uid, profileData) {
  return dbSet(dbRef(db, `users/${uid}`), profileData);
}

export function getUserProfile(uid, callback) {
  onValue(dbRef(db, `users/${uid}`), snapshot => callback(snapshot.val()));
}

// Post functions
export function createPost(uid, postData) {
  const newPostRef = dbPush(dbRef(db, 'posts'));
  return dbSet(newPostRef, { uid, ...postData, timestamp: serverTimestamp() });
}

export function subscribeToPosts(callback) {
  onValue(dbRef(db, 'posts'), snapshot => {
    const posts = [];
    snapshot.forEach(child => posts.push({ id: child.key, ...child.val() }));
    callback(posts);
  });
}

// Avatar upload
export async function uploadAvatar(uid, file) {
  const fileReference = storageRef(storage, `avatars/${uid}/${file.name}`);
  await uploadBytes(fileReference, file);
  return getDownloadURL(fileReference);
}
