import type { ICategory } from "./category";

export interface Product {
    id: number;
    eliminado: boolean;
    createdAt: string;
    nombre: string;
    precio: number;
    descripcion: string;
    stock: number;
    imagen: string;
    disponible: boolean;
    categorias: ICategory[];
}
export interface ItemCarrito extends Product {
    cantidad: number; //: Añade una nueva propiedad específica a ItemCarrito que no está en Producto o sea, la cantidad de ese producto que el usuario quiere comprar.
}

