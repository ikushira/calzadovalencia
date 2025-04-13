import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const form = document.getElementById("login-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "panel.html";
  } catch (error) {
    alert("Error al iniciar sesión");
    console.error(error);
  }
});
