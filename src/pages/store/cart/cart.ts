// Importamos las interfaces necesarias para los tipos de datos
import type { Product, ItemCarrito } from "../../../types/product";

// =======================
// FUNCIONES DE LOCALSTORAGE
// =======================

// Función para obtener el carrito desde el localStorage
// Retorna un array de objetos ItemCarrito, si no hay carrito retorna un array vacío
export const obtenerCarrito = (): ItemCarrito[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

// Función para guardar el carrito en el localStorage
// Recibe un array de objetos ItemCarrito y lo guarda en localStorage
export const guardarCarrito = (carrito: ItemCarrito[]) => {
  localStorage.setItem("cart", JSON.stringify(carrito));
};

// Función para vaciar el carrito en el localStorage
// Elimina el carrito del localStorage
export const vaciarCarrito = () => {
  localStorage.removeItem("cart");
};

// =======================
// FUNCIONES DE MANEJO DEL CARRITO
// =======================

// Función para agregar un producto al carrito
// Si el producto ya existe, incrementa su cantidad, si no lo agrega al carrito
export const agregarAlCarrito = (producto: Product, cantidad: number = 1) => {
  const carrito = obtenerCarrito(); // Obtenemos el carrito actual
  const index = carrito.findIndex(item => item.id === producto.id); // Buscamos si el producto ya está en el carrito

  // Si el producto ya existe, se aumenta la cantidad
    if (index !== -1) {
    carrito[index].cantidad += cantidad;
    } else {
    // Si no existe, se agrega el producto con la cantidad correspondiente
    carrito.push({ ...producto, cantidad });
    }

  guardarCarrito(carrito); // Guardamos el carrito actualizado en localStorage
  renderCart(); // Renderizamos el carrito actualizado
  actualizarContadorCarrito(); // Actualizamos el contador de productos en el carrito
};

// Función para eliminar un producto del carrito
// Filtra el carrito y elimina el producto con el id correspondiente
export const eliminarDelCarrito = (id: number) => {
  let carrito = obtenerCarrito(); // Obtenemos el carrito actual
  carrito = carrito.filter(item => item.id !== id); // Filtramos el producto a eliminar
  guardarCarrito(carrito); // Guardamos el carrito actualizado en localStorage
  renderCart(); // Renderizamos el carrito actualizado
  actualizarContadorCarrito(); // Actualizamos el contador de productos en el carrito
};

// Función para cambiar la cantidad de un producto en el carrito
// Busca el producto en el carrito y actualiza su cantidad
export const cambiarCantidad = (id: number, cantidad: number) => {
  const carrito = obtenerCarrito(); // Obtenemos el carrito actual
  const index = carrito.findIndex(item => item.id === id); // Buscamos el producto

    if (index !== -1) {
    carrito[index].cantidad = cantidad; // Actualizamos la cantidad
    guardarCarrito(carrito); // Guardamos el carrito actualizado en localStorage
    renderCart(); // Renderizamos el carrito actualizado
    actualizarContadorCarrito(); // Actualizamos el contador de productos en el carrito
    }
};

// =======================
// FUNCION DE RENDERIZADO DEL CARRITO
// =======================

// Referencia al contenedor del carrito en el DOM
const contenedorCarrito = document.getElementById("carrito");

// Función para renderizar el contenido del carrito en el DOM
// Muestra los productos, el total y permite eliminar productos y vaciar el carrito
export const renderCart = () => {
  if (!contenedorCarrito) return; // Si no se encuentra el contenedor, salimos de la función

  const carrito = obtenerCarrito(); // Obtenemos el carrito actual
  contenedorCarrito.innerHTML = ""; // Limpiamos el contenedor

  // Botón para volver al inicio
  const btnHome = document.createElement("button");
  btnHome.textContent = "Volver al inicio";
  btnHome.addEventListener("click", () => {
    window.location.href = "../home/home.html"; // Redirigimos al usuario al inicio
  });

  // Si el carrito está vacío, mostramos un mensaje
  if (carrito.length === 0) {
    const mensaje = document.createElement("div");
    mensaje.textContent = "El carrito está vacío"; // Mensaje cuando no hay productos
    mensaje.className = "mensaje-vacio"; // Clase para aplicar estilos
    contenedorCarrito.appendChild(mensaje);
    contenedorCarrito.appendChild(btnHome);
    return;
  }

  let total = 0; // Variable para almacenar el total del carrito

  // Iteramos sobre los productos del carrito
  carrito.forEach(item => {
    const div = document.createElement("div");
    div.className = "item-carrito";
    div.innerHTML = `
      <div class="info">
        <span>${item.nombre} x ${item.cantidad}</span>
        <span>$${item.precio * item.cantidad}</span>
      </div>
      <div class="cantidad-controles">
          <button class="btn-decrementar">-</button>
          -
          <button class="btn-incrementar">+</button>
      </div>
      
      <button class="btn-eliminar">X</button>
    `;

    // Agregar event listeners a los botones de incrementar, decrementar y eliminar
    const btnEliminar = div.querySelector(".btn-eliminar") as HTMLButtonElement;
    const btnIncrementar = div.querySelector(".btn-incrementar") as HTMLButtonElement;
    const btnDecrementar = div.querySelector(".btn-decrementar") as HTMLButtonElement;

    // Añadimos eventos para incrementar, decrementar y eliminar productos
    btnEliminar.addEventListener("click", () => eliminarDelCarrito(item.id)); // Eliminar producto
    btnIncrementar.addEventListener("click", () => incrementarCantidad(item.id)); // Incrementar cantidad
    btnDecrementar.addEventListener("click", () => decrementarCantidad(item.id)); // Decrementar cantidad

    contenedorCarrito.appendChild(div); // Añadimos el producto al contenedor
    total += item.precio * item.cantidad; // Acumulamos el total
  });

  // Mostramos el total del carrito
  const totalDiv = document.createElement("div");
  totalDiv.className = "total-carrito";
  totalDiv.textContent = `Total: $${total}`;
  contenedorCarrito.appendChild(totalDiv);

  // Botón para vaciar el carrito
  const btnVaciar = document.createElement("button");
  btnVaciar.textContent = "Vaciar Carrito";
  btnVaciar.className = "btn btn-vaciar"; //Agregado para poder modificar la alineación
  btnVaciar.addEventListener("click", () => {
    vaciarCarrito(); // Llamada para vaciar el carrito
    renderCart(); // Renderizamos el carrito vacío
  });

  contenedorCarrito.appendChild(btnVaciar); // Añadimos el botón de vaciar carrito
  contenedorCarrito.appendChild(btnHome); // Añadimos el botón de volver al inicio
};

// =======================
// FUNCIONES DE ACTUALIZACION DEL CARRITO
// =======================

// Función para actualizar el contador de productos en el carrito
// Muestra la cantidad total de productos en el carrito
const actualizarContadorCarrito = () => {
  const contador = document.getElementById("contador-carrito"); // Obtenemos el contador en el DOM
  if (!contador) return; // Si no se encuentra, salimos de la función

  const carrito = obtenerCarrito(); // Obtenemos el carrito actual
  const total = carrito.reduce((sum, item) => sum + item.cantidad, 0); // Sumamos la cantidad total de productos

  contador.textContent = total.toString(); // Actualizamos el contador en el DOM
};

// Llamadas iniciales al render y contador para mostrar el estado del carrito al cargar la página
renderCart();
actualizarContadorCarrito();

// Función para incrementar la cantidad de un producto
export const incrementarCantidad = (id: number) => {
  const carrito = obtenerCarrito(); // Obtenemos el carrito actual
  const index = carrito.findIndex(item => item.id === id); // Buscamos el producto

  if (index !== -1) {
    carrito[index].cantidad++;  // Incrementamos la cantidad
    guardarCarrito(carrito);     // Guardamos el carrito actualizado
    renderCart();                // Renderizamos el carrito actualizado
    actualizarContadorCarrito(); // Actualizamos el contador de productos en el carrito
  }
};

// Función para decrementar la cantidad de un producto
export const decrementarCantidad = (id: number) => {
  const carrito = obtenerCarrito(); // Obtenemos el carrito actual
  const index = carrito.findIndex(item => item.id === id); // Buscamos el producto

  if (index !== -1 && carrito[index].cantidad > 1) { // Aseguramos que no se pueda decrementar a menos de 1
    carrito[index].cantidad--;  // Decrementamos la cantidad
    guardarCarrito(carrito);     // Guardamos el carrito actualizado
    renderCart();                // Renderizamos el carrito actualizado
    actualizarContadorCarrito(); // Actualizamos el contador de productos en el carrito
  }
};