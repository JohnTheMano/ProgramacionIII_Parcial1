// Importo la interfaz Producto para tipar el array
import type { Producto } from "../types/product";

// Lista de productos disponibles en la tienda
export const PRODUCTS: Producto[] = [
    { id: 1, nombre: "Muzzarella", categoria: "Clásicas", precio: 1500 },
    { id: 2, nombre: "Napolitana", categoria: "Clásicas", precio: 1700 },
    { id: 3, nombre: "Fugazzeta", categoria: "Clásicas", precio: 1800 },
    { id: 4, nombre: "Calabresa", categoria: "Especiales", precio: 1900 },
    { id: 5, nombre: "4 Quesos", categoria: "Especiales", precio: 2000 },
    { id: 6, nombre: "Huevo y Jamón", categoria: "Especiales", precio: 2100 }
];

// Devuelve un array con todas las categorías sin repetir
export const getCategories = (): string[] => {
    const categorias = PRODUCTS.map(p => p.categoria); // extraigo solo las categorías
    return Array.from(new Set(categorias)); // quito duplicados
};