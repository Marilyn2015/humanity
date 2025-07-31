// Import the core Firebase SDK modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

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

// Initialize Firebase with your config
const app = initializeApp(firebaseConfig);

// Initialize individual services
const auth = getAuth(app);       // 🔐 For login, signup, auth state
const db = getDatabase(app);     // 📚 For Realtime Database
const storage = getStorage(app); // 🖼️ For image/file uploads

// Export them so you can use in other files
export { auth, db, storage };
