
// Importamos la interfaz ICategory desde el archivo category.ts para usarla en la propiedad `categorias` de Product
import type { ICategory } from "./category";

// =======================
// INTERFASES DE PRODUCTO Y CARRITO
// =======================

// Interfaz que representa un producto en la tienda
// Contiene toda la información de un producto disponible para compra
export interface Product {
    id: number;              // Identificador único del producto
    eliminado: boolean;      // Indica si el producto ha sido eliminado (útil para gestión interna)
    createdAt: string;       // Fecha de creación del producto (para ordenarlo por antigüedad)
    nombre: string;          // Nombre del producto
    precio: number;          // Precio del producto
    descripcion: string;     // Descripción detallada del producto
    stock: number;           // Cantidad disponible en el inventario
    imagen: string;          // URL de la imagen del producto
    disponible: boolean;     // Indica si el producto está disponible para la venta
    categorias: ICategory[]; // Lista de categorías a las que pertenece el producto
}

// Interfaz que extiende a `Product` para representar un producto en el carrito
// Añade la propiedad `cantidad` para saber cuántos productos de este tipo están en el carrito
export interface ItemCarrito extends Product {
    cantidad: number;      // Cantidad de unidades de este producto que el usuario ha agregado al carrito
}