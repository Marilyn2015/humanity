// src/firebase.js
import { initializeApp }      from "firebase/app";
import { getAuth }            from "firebase/auth";
import { getDatabase }        from "firebase/database";
import { getStorage }         from "firebase/storage";
import { getAnalytics }       from "firebase/analytics";

const firebaseConfig = {
  apiKey:            "AIzaSyBT7P7DAfV-I9ESe6f9Jdp5ioCyGIK0d9A",
  authDomain:        "hashhumanity-58b9a.firebaseapp.com",
  databaseURL:       "https://hashhumanity-58b9a-default-rtdb.firebaseio.com",
  projectId:         "hashhumanity-58b9a",
  storageBucket:     "hashhumanity-58b9a.appspot.com",
  messagingSenderId: "886745899016",
  appId:             "1:886745899016:web:2b0f7e043c2434379d71bd",
  measurementId:     "G-3ZTCXL4374"
};

// Initialize Firebase
const app       = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth      = getAuth(app);
export const db        = getDatabase(app);
export const storage   = getStorage(app);
