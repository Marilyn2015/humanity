// firebase.js
// Firebase compat backend initialization and reusable functions

// Import Firebase SDKs (Compat)
import firebase from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
import "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js";
import "https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js";
import "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();

// Redirect unauthenticated users to login page
auth.onAuthStateChanged(user => {
  if (!user) {
    window.location.href = 'login.html';
  }
});

// Auth functions
export async function registerWithEmail(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export async function loginWithEmail(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function onAuthStateChangedListener(callback) {
  return auth.onAuthStateChanged(callback);
}

export function logout() {
  return auth.signOut();
}

// User profile functions
export async function createUserProfile(uid, profileData) {
  return db.ref(`users/${uid}`).set(profileData);
}

export async function getUserProfile(uid) {
  const snapshot = await db.ref(`users/${uid}`).once('value');
  return snapshot.val();
}

// Post functions
export async function createPost(uid, postData) {
  const newPostRef = db.ref('posts').push();
  return newPostRef.set({
    uid,
    ...postData,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  });
}

export function subscribeToPosts(callback) {
  return db.ref('posts').orderByChild('timestamp').on('value', snapshot => {
    const posts = [];
    snapshot.forEach(child => {
      posts.push({ id: child.key, ...child.val() });
    });
    callback(posts);
  });
}

// Avatar upload
export async function uploadAvatar(uid, file) {
  const storageRef = storage.ref(`avatars/${uid}/${file.name}`);
  await storageRef.put(file);
  return storageRef.getDownloadURL();
}

export default {
  auth,
  db,
  storage,
  registerWithEmail,
  loginWithEmail,
  onAuthStateChangedListener,
  logout,
  createUserProfile,
  getUserProfile,
  createPost,
  subscribeToPosts,
  uploadAvatar
};

// ----------------------------------------------------
// PowerShell Script: start-server.ps1
// Launches a simple static server and opens the login page in the default browser

<#
.SYNOPSIS
    Starts an HTTP server for the project directory and opens login.html.
.PARAMETER Port
    The port number to serve on. Defaults to 8080.
.PARAMETER Directory
    The directory to serve. Defaults to the script location.
#>
Param(
    [int]$Port = 8080,
    [string]$Directory = (Split-Path -Parent $MyInvocation.MyCommand.Definition)
)

Write-Host "Serving directory '$Directory' on port $Port..."
Push-Location $Directory

# Ensure http-server is installed: npm install -g http-server
if (-not (Get-Command http-server -ErrorAction SilentlyContinue)) {
    Write-Host "http-server not found. Installing globally..."
    npm install -g http-server
}

# Start the server in background
Start-Process -NoNewWindow -FilePath "http-server" -ArgumentList "-p $Port -c-1 ."

# Wait briefly for server to start
Start-Sleep -Seconds 2

# Open the login page
$loginUrl = "http://localhost:$Port/login.html"
Write-Host "Opening $loginUrl in default browser..."
Start-Process $loginUrl

Pop-Location

// ----------------------------------------------------
// GitHub Actions Workflow: .github/workflows/deploy.yml
// Automatically deploys the static site to GitHub Pages on every push to main

# Create this file at .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'

      - name: Install http-server
        run: npm install -g http-server

      - name: Build (if any)
        run: echo "No build step required for static files"

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: './'

// ----------------------------------------------------
// Alternative: Firebase Hosting Deployment
// If using Firebase Hosting, add the following job instead of the GitHub Pages step

# - name: Deploy to Firebase Hosting
#   uses: w9jds/firebase-action@v1
#   with:
#     args: deploy --only hosting
#   env:
#     FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}

// ----------------------------------------------------
// PowerShell Script: deploy.ps1
// Automates commit, push, and triggers GitHub Actions for deployment

<#
.SYNOPSIS
    Commits all changes and pushes to main to trigger CI/CD deployment.
.PARAMETER Message
    Commit message. Defaults to 'Auto-deploy'.
#>
Param(
    [string]$Message = 'Auto-deploy'
)

Write-Host "Staging all changes..."

git add .

Write-Host "Committing with message: '$Message'..."

git commit -m "$Message" 

if ($LASTEXITCODE -ne 0) {
    Write-Host "No changes to commit or commit failed." -ForegroundColor Yellow
} else {
    Write-Host "Pushing to main..."
    git push origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Deployment triggered via GitHub Actions." -ForegroundColor Green
    } else {
        Write-Host "Push failed." -ForegroundColor Red
    }
}
