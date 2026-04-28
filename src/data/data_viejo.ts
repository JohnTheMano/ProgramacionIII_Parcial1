import type { Product } from "../types/product";
import type { Icategory} from "..types/category";
// Lista de productos disponibles en la tienda
export const PRODUCTS: Product[] = [
    { id: 1, nombre: "Muzzarella", category "Pizzas", precio: 1500, imagen: "../../../assets/productos_fotos/Muzzarella.png"},
    { id: 2, nombre: "Napolitana", categoria: "Pizzas", precio: 1700, imagen: "../../../assets/productos_fotos/Napolitana.png"},
    { id: 3, nombre: "Fugazzeta", categoria: "Pizzas", precio: 1800, imagen: "../../../assets/productos_fotos/Fugazzetta.png"},
    { id: 4, nombre: "Calabresa", categoria: "Pizzas", precio: 1900, imagen: "../../../assets/productos_fotos/Calabresa.png"},
    { id: 5, nombre: "4 Quesos", categoria: "Pizzas", precio: 2000, imagen: "../../../assets/productos_fotos/4quesos.png"},
    { id: 6, nombre: "Hamburguesa Clásica", categoria: "Hamburguesas", precio: 2000, imagen: "../../../assets/productos_fotos/Clasica.png"},
    { id: 7, nombre: "Cheeseburger", categoria: "Hamburguesas", precio: 2200, imagen: "../../../assets/productos_fotos/Cheeseburguer.png"},
    { id: 8, nombre: "Bacon Burger", categoria: "Hamburguesas", precio: 2400, imagen: "../../../assets/productos_fotos/Bacon.png"},
    { id: 9, nombre: "Ensalada César", categoria: "Ensaladas", precio: 1200, imagen: "../../../assets/productos_fotos/Cesar.png"},
    { id: 10, nombre: "Ensalada Mediterránea", categoria: "Ensaladas", precio: 1300, imagen: "../../../assets/productos_fotos/Mediterranea.png"},
    { id: 11, nombre: "Ensalada de Pollo", categoria: "Ensaladas", precio: 1400, imagen: "../../../assets/productos_fotos/Ensalada_pollo.png"},
    { id: 12, nombre: "Brownie de Chocolate", categoria: "Postres", precio: 7800, imagen: "../../../assets/productos_fotos/Brownie.png" },
    { id: 13, nombre: "Helado Vainilla", categoria: "Postres", precio: 7700, imagen: "../../../assets/productos_fotos/Helado_vainilla.png"},
    { id: 14, nombre: "Cheesecake", categoria: "Postres", precio: 9900, imagen: "../../../assets/productos_fotos/cheescake.png"},
    { id: 15, nombre: "Flan Casero", categoria: "Postres", precio: 750, imagen: "../../../assets/productos_fotos/Flan.png"},
    { id: 16, nombre: "Gaseosa 500ml", categoria: "Bebidas", precio: 400, imagen: "../../../assets/productos_fotos/Coca.png"},
    { id: 17, nombre: "Agua Mineral 500ml", categoria: "Bebidas", precio: 300, imagen: "../../../assets/productos_fotos/Agua.png"},
    { id: 18, nombre: "Jugo de Naranja", categoria: "Bebidas", precio: 450, imagen: "../../../assets/productos_fotos/Jugo.png"},
    { id: 19, nombre: "Cerveza Artesanal", categoria: "Bebidas", precio: 800, imagen: "../../../assets/productos_fotos/Cerveza.png"},
    { id: 20, nombre: "Limonada Natural", categoria: "Bebidas", precio: 500, imagen: "../../../assets/productos_fotos/Limonada.png"},
];

// Devuelve un array con todas las categorías sin repetir
export const getCategories = (): string[] => {
    const categorias = PRODUCTS.map(p => p.categoria);
    return Array.from(new Set(categorias));
};