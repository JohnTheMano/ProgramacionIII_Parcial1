// import type { IUser } from "../../../types/IUser";
// import type { Rol } from "../../../types/Rol";
import { navigate } from "../../../utils/navigate";

// Referencias al form y a los inputs
const form = document.getElementById("form") as HTMLFormElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;
const inputPassword = document.getElementById("password") as HTMLInputElement;
// const selectRol = document.getElementById("rol") as HTMLSelectElement;

// Cuando el usuario intenta loguearse
form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault(); // evito que el form recargue la página

  const valueEmail = inputEmail.value;
  const valuePassword = inputPassword.value;
    
  // Traigo todos los usuarios registrados
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Busco si hay alguno que coincida con lo que escribió el usuario
  const foundUser = users.find((u: any) => 
    u.email === valueEmail && u.password === valuePassword
  );

  // Si no encontré nada, corto acá
  if (!foundUser) {
    alert("Email o contraseña incorrectos");
    return; 
  }

  // Si lo encontré, lo guardo como usuario logueado
  localStorage.setItem("userData", JSON.stringify(foundUser));

  // Y lo mando a su home según el rol
  if (foundUser.role === "admin") {
    navigate("/src/pages/admin/home/home.html");
  } else {
    navigate("/src/pages/client/home/home.html");
  }
})

// Botón para ir al registro si no tiene cuenta
const btnRegister = document.getElementById("btnRegistro") as HTMLButtonElement;

btnRegister.addEventListener("click", () => {
  navigate("/src/pages/auth/registro/registro.html");
});

