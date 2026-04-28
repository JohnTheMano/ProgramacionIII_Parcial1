// Importamos productos y funciones del carrito
import { PRODUCTS, getCategories } from "../../../data/data";
import type { Product } from "../../../types/product";
import { agregarAlCarrito } from "../../../pages/store/cart/cart"; // Ajusta la ruta si tu cart.ts está en otra carpeta



const contenedorMensaje = document.getElementById("mensaje-carrito");
if (contenedorMensaje) contenedorMensaje.style.display = "none";



// Función para renderizar productos en el DOM
const mostrarProductos = (productos: Product[]) => {
    const contenedor = document.getElementById("productos");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    // Agregado por si una busqueda no arroja resultados
    if (productos.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron productos</p>";
        return;
    }
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

        // Agregar evento al botón para agregar al carrito
        const btn = div.querySelector(".btn-agregar") as HTMLButtonElement;
        btn.addEventListener("click", () => {
            agregarAlCarrito(p, 1); // Se agrega 1 unidad al carrito
            mostrarMensaje(`${p.nombre} agregado al carrito`);
            
        });
    });
};

// Mostrar todos los productos al cargar la página
mostrarProductos(PRODUCTS);

// Crear botones de categorías
const categorias = getCategories();
const contenedorCategorias = document.getElementById("categorias");
if (contenedorCategorias) {
    categorias.forEach(cat => {
        const btn = document.createElement("button");
        btn.textContent = cat.nombre;
        btn.addEventListener("click", () => {
        const filtrados = PRODUCTS.filter(p => p.categorias[0].nombre === cat.nombre);
        mostrarProductos(filtrados);
        });
        contenedorCategorias.appendChild(btn);
    });

    const btnTodos = document.createElement("button");
    btnTodos.textContent = "Todos";
    btnTodos.addEventListener("click", () => mostrarProductos(PRODUCTS));
    contenedorCategorias.appendChild(btnTodos);
}

//BÚSQUEDA por nombre
const inputBusqueda = document.querySelector(".search input") as HTMLInputElement;
inputBusqueda.addEventListener("input", () => {
    const texto = inputBusqueda.value.toLowerCase();

    const filtrados = PRODUCTS.filter(p =>
        p.nombre.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);
});

const mostrarMensaje = (texto: string) => {
    const contenedor = document.getElementById("mensaje-carrito");
    if (!contenedor) return;
    contenedor.textContent = texto;
    contenedor.style.display = "block";
    setTimeout(() => {
        contenedor.style.display = "none";
    }, 1500); // desaparece después de 1.5 segundos
};

