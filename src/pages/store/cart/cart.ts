// Importamos las interfaces
import type { Producto, ItemCarrito } from "../../../types/product";

// =======================
// FUNCIONES DE LOCALSTORAGE
// =======================

// Obtener el carrito del localStorage
export const obtenerCarrito = (): ItemCarrito[] => {
return JSON.parse(localStorage.getItem("cart") || "[]");
};

// Guardar el carrito en localStorage
export const guardarCarrito = (carrito: ItemCarrito[]) => {
localStorage.setItem("cart", JSON.stringify(carrito));
};

// Vaciar todo el carrito
export const vaciarCarrito = () => {
localStorage.removeItem("cart");
};

// =======================
// FUNCIONES DE MANEJO DEL CARRITO
// =======================

// Agregar un producto al carrito
export const agregarAlCarrito = (producto: Producto, cantidad: number = 1) => {
    const carrito = obtenerCarrito();
    const index = carrito.findIndex(item => item.id === producto.id);

    if (index !== -1) {
        carrito[index].cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad });
    }
    guardarCarrito(carrito);
    renderCart();
};
// Eliminar un producto del carrito
export const eliminarDelCarrito = (id: number) => {
    let carrito = obtenerCarrito();
    carrito = carrito.filter(item => item.id !== id);
    guardarCarrito(carrito);
    renderCart();
};

// Cambiar la cantidad de un producto
export const cambiarCantidad = (id: number, cantidad: number) => {
    const carrito = obtenerCarrito();
    const index = carrito.findIndex(item => item.id === id);
    if (index !== -1) {
    carrito[index].cantidad = cantidad;
    guardarCarrito(carrito);
    renderCart();
    }
};

// =======================
// FUNCION DE RENDER DEL CARRITO
// =======================
const contenedorCarrito = document.getElementById("carrito");

export const renderCart = () => {
    if (!contenedorCarrito) return;

    const carrito = obtenerCarrito();
    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {
    contenedorCarrito.textContent = "El carrito está vacío";
    return;
    }

    let total = 0;

  // Mostrar productos
    carrito.forEach(item => {
    const div = document.createElement("div");
    div.className = "item-carrito";
    div.innerHTML = `
        <span>${item.nombre} x ${item.cantidad}</span>
        <span>$${item.precio * item.cantidad}</span>
        <button class="btn-eliminar">X</button>
    `;

    const btnEliminar = div.querySelector(".btn-eliminar") as HTMLButtonElement;
    btnEliminar.addEventListener("click", () => eliminarDelCarrito(item.id));

    contenedorCarrito.appendChild(div);

    total += item.precio * item.cantidad;
    });

  // Mostrar total
    const totalDiv = document.createElement("div");
    totalDiv.className = "total-carrito";
    totalDiv.textContent = `Total: $${total}`;
    contenedorCarrito.appendChild(totalDiv);

  // Botón para vaciar carrito
  
    const btnVaciar = document.createElement("button");
    btnVaciar.textContent = "Vaciar Carrito";
    btnVaciar.addEventListener("click", () => {
    vaciarCarrito();
    renderCart();
    });
    if (carrito.length > 0){
     contenedorCarrito.appendChild(btnVaciar);}
};

// Render inicial al cargar la página
renderCart();