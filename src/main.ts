// Me guardo la ruta actual (para saber dónde está parado el usuario)
const path = window.location.pathname;

// Chequeo rápido: ¿está intentando entrar a algo de admin o de cliente?
const isAdminRoute = path.includes("/admin/");
const isClientRoute = path.includes("/client/");

// Traigo el usuario logueado (si no hay nada, queda en null)
const user = JSON.parse(localStorage.getItem("userData") || "null");

// Si no hay usuario y quiere meterse en rutas protegidas, lo mando al login
if (!user && (isAdminRoute || isClientRoute)) {
    window.location.href = "/src/pages/auth/login/login.html";
}

// Si es un client pero intenta entrar a admin, lo devuelvo a su lugar
if (user && isAdminRoute && user.role !== "admin") {
    window.location.href = "/src/pages/client/home/home.html";
}

// Y al revés: si es admin pero cae en client, lo mando a su panel
if (user && isClientRoute && user.role !== "client") {
    window.location.href = "/src/pages/admin/home/home.html";
}