// js/panel.js
import { db, auth } from "./firebase-config.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const form = document.getElementById("product-form");
const logoutBtn = document.getElementById("logout-btn");

// Verificar si el usuario está autenticado
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Si no hay usuario autenticado, redirigir al login
    window.location.href = "login.html";
  }
});

// Manejar el evento de cierre de sesión
logoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth); // Cierra la sesión del usuario
    alert("Has cerrado sesión correctamente.");
    window.location.href = "login.html"; // Redirigir al login
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    alert("Hubo un problema al cerrar sesión.");
  }
});

// Manejar el envío del formulario
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = form.name.value;
  const price = parseFloat(form.price.value);
  const image = form.image.value;
  const category = form.category.value;

  try {
    await addDoc(collection(db, "productos"), { name, price, image, category });
    alert("Producto agregado correctamente");
    form.reset();
  } catch (error) {
    alert("Error al agregar el producto");
    console.error(error);
  }
});
