// Firebase Configuration
// Project: monitoring-92e1e
// PENTING: Jangan commit file ini ke repository publik.
// Gunakan Firebase Security Rules untuk membatasi akses data.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWrI5HSWZrtSW0fAEuPa96jwVHdEMucAI",
  authDomain: "ujikomtim6.firebaseapp.com",
  databaseURL: "https://ujikomtim6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ujikomtim6",
  storageBucket: "ujikomtim6.firebasestorage.app",
  messagingSenderId: "319994839656",
  appId: "1:319994839656:web:c929a51b0b7b9b46a8b1dd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
