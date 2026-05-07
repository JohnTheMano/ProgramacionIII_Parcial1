Proyecto Tienda Web – Programación III
Descripción

Este proyecto es una aplicación web de catálogo de productos con carrito de compras, desarrollada como parte de la materia Programación III de la Tecnicatura Universitaria en Programación a Distancia. Permite al usuario navegar por productos, filtrarlos por categorías, buscarlos por nombre y agregar productos a un carrito interactivo que se mantiene en el navegador mediante localStorage.

Funcionalidades principales
Catálogo de productos
Muestra todos los productos disponibles al cargar la página.
Permite filtrar productos por categorías activas.
Incluye un botón “Todos” para volver a mostrar todos los productos.
Búsqueda en tiempo real
Campo de búsqueda donde los productos se filtran mientras el usuario escribe.
La búsqueda es insensible a mayúsculas/minúsculas.
Carrito de compras
Agregar productos al carrito desde el catálogo.
Incrementar o decrementar la cantidad de productos.
Eliminar productos del carrito.
Vaciar todo el carrito.
El carrito se guarda en localStorage para mantener los datos al recargar la página.
Contador de productos actualizado en tiempo real.
Mensajes y notificaciones
Mensaje temporal cuando se agrega un producto al carrito.
Tecnologías utilizadas
HTML5 / CSS3 / JavaScript (TypeScript)
Vite como bundler y servidor de desarrollo.
LocalStorage para persistencia de datos del carrito.
Estructura del proyecto
/src
 ├─ /data
 │    └─ data.ts          # Datos de productos y categorías
 ├─ /pages
 │    └─ /store
 │         ├─ /home
 │         │    └─ home.ts   # Renderizado del catálogo y búsqueda
 │         └─ /cart
 │              └─ cart.ts   # Lógica del carrito
 ├─ /types
 │    └─ product.ts       # Interfaces para productos y carrito
Instalación y ejecución

Clonar el repositorio:

git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>

Instalar dependencias:

npm install

Ejecutar en modo desarrollo:

npm run dev
Abrir la aplicación en el navegador con la URL que indica Vite (normalmente http://localhost:5173).
Explicación breve del código
home.ts: se encarga de renderizar los productos, generar los botones de filtrado por categoría y manejar la búsqueda en tiempo real.
cart.ts: maneja todas las funciones del carrito de compras, como agregar, eliminar, actualizar cantidades y calcular el total, siempre sincronizado con localStorage.
Las funciones están pensadas para que la UI y los datos estén siempre sincronizados, permitiendo una experiencia interactiva sin recargar la página.
Posibles mejoras futuras
Persistir el carrito en un backend real.
Añadir autenticación de usuarios.
Mejorar la UI/UX con animaciones y diseño responsive.
Filtrado combinado por varias categorías o rangos de precios