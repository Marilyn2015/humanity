import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { app, analytics, db, storage };
