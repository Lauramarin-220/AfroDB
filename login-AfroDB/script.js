// Usuario de prueba en memoria
const usuarioEnMemoria = {
  username: "admin@afrodb.com",
  password: "12345"
};

// Capturamos el formulario
const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validar usuario
  if (username === usuarioEnMemoria.username && password === usuarioEnMemoria.password) {
    alert("✅ Bienvenido a AfroDB, " + username + "!");
    window.location.href = "home.html"; // Redirige a otra página
  } else {
    alert("❌ Correo o clave incorrectos. Intenta nuevamente.");
  }

  form.reset();
});
