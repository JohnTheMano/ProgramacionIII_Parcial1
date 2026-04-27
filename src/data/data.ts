import type { Producto } from "../types/product";

// Lista de productos disponibles en la tienda
export const PRODUCTS: Producto[] = [
    { id: 1, nombre: "Muzzarella", categoria: "Pizzas", precio: 1500 },
    { id: 2, nombre: "Napolitana", categoria: "Pizzas", precio: 1700 },
    { id: 3, nombre: "Fugazzeta", categoria: "Pizzas", precio: 1800 },
    { id: 4, nombre: "Calabresa", categoria: "Pizzas", precio: 1900 },
    { id: 5, nombre: "4 Quesos", categoria: "Pizzas", precio: 2000 },
    { id: 6, nombre: "Hamburguesa Clásica", categoria: "Hamburguesas", precio: 2000 },
    { id: 7, nombre: "Cheeseburger", categoria: "Hamburguesas", precio: 2200 },
    { id: 8, nombre: "Bacon Burger", categoria: "Hamburguesas", precio: 2400 },
    { id: 9, nombre: "Ensalada César", categoria: "Ensaladas", precio: 1200 },
    { id: 10, nombre: "Ensalada Mediterránea", categoria: "Ensaladas", precio: 1300 },
    { id: 11, nombre: "Ensalada de Pollo", categoria: "Ensaladas", precio: 1400 },
    { id: 12, nombre: "Brownie de Chocolate", categoria: "Postres", precio: 800 },
    { id: 13, nombre: "Helado Vainilla", categoria: "Postres", precio: 700 },
    { id: 14, nombre: "Cheesecake", categoria: "Postres", precio: 900 },
    { id: 15, nombre: "Flan Casero", categoria: "Postres", precio: 750 },
    { id: 16, nombre: "Gaseosa 500ml", categoria: "Bebidas", precio: 400 },
    { id: 17, nombre: "Agua Mineral 500ml", categoria: "Bebidas", precio: 300 },
    { id: 18, nombre: "Jugo de Naranja", categoria: "Bebidas", precio: 450 },
    { id: 19, nombre: "Cerveza Artesanal", categoria: "Bebidas", precio: 800 },
    { id: 20, nombre: "Limonada Natural", categoria: "Bebidas", precio: 500 }
];

// Devuelve un array con todas las categorías sin repetir
export const getCategories = (): string[] => {
    const categorias = PRODUCTS.map(p => p.categoria);
    return Array.from(new Set(categorias));
};