
// Importamos productos y funciones del carrito
import { PRODUCTS, getCategories } from "../../../data/data";
import type { Product } from "../../../types/product";
import { agregarAlCarrito } from "../../../pages/store/cart/cart"; // Asegúrate de que la ruta sea correcta

// Referencia al contenedor del mensaje del carrito
const contenedorMensaje = document.getElementById("mensaje-carrito");
if (contenedorMensaje) contenedorMensaje.style.display = "none";

// =======================
// FUNCION DE RENDERIZADO DE PRODUCTOS
// =======================

// Función para renderizar los productos en el DOM
// Muestra todos los productos disponibles o los filtrados
const mostrarProductos = (productos: Product[]) => {
    const contenedor = document.getElementById("productos");
    if (!contenedor) return;
    contenedor.innerHTML = ""; // Limpiamos el contenedor antes de renderizar

    // Si no se encuentran productos, mostramos un mensaje
    if (productos.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron productos</p>";
        return;
    }

    // Iteramos sobre los productos y los agregamos al DOM
    productos.forEach((p: Product) => {
        const div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}" class="producto-img">
            <h3>${p.nombre}</h3>
            <p>Precio: $${p.precio}</p>
            <button class="btn-agregar">Agregar al carrito</button>
        `;
        contenedor.appendChild(div);

        // Agregamos un evento al botón para agregar al carrito
        const btn = div.querySelector(".btn-agregar") as HTMLButtonElement;
        btn.addEventListener("click", () => {
            agregarAlCarrito(p, 1); // Se agrega 1 unidad al carrito
            mostrarMensaje(`${p.nombre} agregado al carrito`); // Mostramos un mensaje confirmando la acción
        });
    });
};

// Renderizamos todos los productos al cargar la página
mostrarProductos(PRODUCTS);

// =======================
// FUNCIONES DE FILTROS
// =======================

// Crear botones para cada categoría
// Filtramos los productos por categoría al hacer clic en un botón
const categorias = getCategories();
const contenedorCategorias = document.getElementById("categorias");
if (contenedorCategorias) {
    categorias.forEach(cat => {
        const btn = document.createElement("button");
        btn.textContent = cat.nombre;
        btn.addEventListener("click", () => {
            // Filtramos los productos según la categoría seleccionada
            const filtrados = PRODUCTS.filter(p => p.categorias.some(c => c.nombre === cat.nombre));
            mostrarProductos(filtrados); // Renderizamos los productos filtrados
        });
        contenedorCategorias.appendChild(btn);
    });

    // Botón para mostrar todos los productos
    const btnTodos = document.createElement("button");
    btnTodos.textContent = "Todos";
    btnTodos.addEventListener("click", () => mostrarProductos(PRODUCTS)); // Mostrar todos los productos
    contenedorCategorias.appendChild(btnTodos);
}

// =======================
// FUNCION DE BÚSQUEDA
// =======================

// Función para buscar productos por nombre
// Filtra los productos en tiempo real mientras el usuario escribe en el input de búsqueda
const inputBusqueda = document.querySelector(".search input") as HTMLInputElement;
inputBusqueda.addEventListener("input", () => {
    const texto = inputBusqueda.value.toLowerCase(); // Convertimos el texto a minúsculas

    // Filtramos los productos que coinciden con el texto de búsqueda en el nombre
    const filtrados = PRODUCTS.filter(p =>
        p.nombre.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados); // Renderizamos los productos filtrados por la búsqueda
});

// =======================
// FUNCION DE MENSAJE DEL CARRITO
// =======================

// Función para mostrar un mensaje temporal en el DOM
// Muestra un mensaje indicando que el producto fue agregado al carrito
const mostrarMensaje = (texto: string) => {
    const contenedor = document.getElementById("mensaje-carrito");
    if (!contenedor) return;
    contenedor.textContent = texto; // Asignamos el texto del mensaje
    contenedor.style.display = "block"; // Mostramos el mensaje
    setTimeout(() => {
        contenedor.style.display = "none"; // Ocultamos el mensaje después de 1.5 segundos
    }, 1500); // Desaparece después de 1.5 segundos
};