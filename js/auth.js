import { auth } from "./firebase-config.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Función para cerrar sesión
export async function logout() {
  try {
    await signOut(auth);
    alert("Has cerrado sesión correctamente.");
    window.location.href = "login.html"; // Redirigir al login
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    alert("Hubo un problema al cerrar sesión.");
  }
}

// Verificar si el usuario está autenticado
export function checkAuth() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      alert("No tienes acceso. Inicia sesión.");
      window.location.href = "login.html";
    }
  });
}