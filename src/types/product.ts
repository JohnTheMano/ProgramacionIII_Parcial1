export interface Producto{
    id:number;
    nombre: string;
    categoria:string;
    precio:number;
    imagen?:string; //el ? para que sea opcional
}

export interface ItemCarrito extends Producto {
    cantidad: number; //: Añade una nueva propiedad específica a ItemCarrito que no está en Producto o sea, la cantidad de ese producto que el usuario quiere comprar.
}

