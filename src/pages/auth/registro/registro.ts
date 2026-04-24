import type { IUser } from "../../../types/IUser";
import type { Rol } from "../../../types/Rol";
import { navigate } from "../../../utils/navigate";

// Referencias al form y a los inputs
const form = document.getElementById("form") as HTMLFormElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;
const inputPassword = document.getElementById("password") as HTMLInputElement;
// const selectRol = document.getElementById("rol") as HTMLSelectElement

// Cuando el usuario envía el formulario de registro
form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault(); // evito que se recargue la página

const valueEmail = inputEmail.value;
const valuePassword = inputPassword.value;
  // const valueRol = selectRol.value as Rol; // ya no usamos el select, todo será client

  // Creo el usuario con rol client por defecto
const user: IUser = {
    email: valueEmail,
    role: "client" as Rol,
    loggedIn: true, // aunque todavía no está logueado realmente
};

  // Le agrego la contraseña solo para guardarlo en el array de usuarios
const userWithPassword = {
    ...user,
    password: valuePassword,
};

  // Traigo el array de usuarios guardado en localStorage o creo uno vacío
const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Agrego este nuevo usuario al array
users.push(userWithPassword);

  // Guardo el array actualizado en localStorage
localStorage.setItem("users", JSON.stringify(users));

  // Lo mando a la home de cliente directamente
navigate("/src/pages/client/home/home.html");

  // Antes teníamos esto, pero ahora no hace falta
  // const parseUser = JSON.stringify(user);
  // localStorage.setItem("userData", parseUser);
});

