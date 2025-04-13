// /js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCQeOXPe_oCsg7czvQ4F_LKokAdvNTHrW4",
  authDomain: "calzado-valencia.firebaseapp.com",
  projectId: "calzado-valencia",
  storageBucket: "calzado-valencia.firebasestorage.app",
  messagingSenderId: "885392324110",
  appId: "1:885392324110:web:87347aff4ff12650cbae5f",
  measurementId: "G-NWGS32HB2R"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
