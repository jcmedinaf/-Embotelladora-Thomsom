/**
 * =====================================================================
 * ARCHIVO: app.js
 * DESCRIPCIÓN: Enrutador universal para la SPA de Embotelladora Thomsom
 * =====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    // Escuchar cambios en el Hash de la URL
    window.addEventListener("hashchange", navegar);
    
    // Navegación inicial al cargar la página
    navegar();
});

/**
 * Función principal para gestionar las rutas y cargar contenido de forma asíncrona
 */
async function navegar() {
    const appContainer = document.getElementById("app");
    let hash = window.location.hash.replace("#", "").trim();

    // Ruta por defecto si el hash está vacío
    if (!hash) {
        hash = "dashboard";
    }

    // Separar la ruta principal de los parámetros de consulta (ej. clientes/form?id=5)
    const [rutaLimpia, queryString] = hash.split("?");
    const partesRuta = rutaLimpia.split("/");

    const modulo = partesRuta[0] || "dashboard";
    const vista = partesRuta[1] || "index";

    // Rutas dinámicas
    const rutaHTML = `src/app/vistas/${modulo}/${vista}.html`;
    const rutaJS = `src/app/componentes/${modulo}/${vista}.js`;

    try {
        // Mostrar indicador de carga breve
        appContainer.innerHTML = `
            <div class="text-center py-5 mt-5">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Cargando...</span>
                </div>
                <p class="text-muted mt-2 fw-semibold">Cargando módulo...</p>
            </div>
        `;

        // 1. Cargar el HTML de la vista elegida
        const resHTML = await fetch(rutaHTML);
        if (!resHTML.ok) {
            throw new Error(`No se pudo cargar la vista: ${rutaHTML}`);
        }
        const htmlContent = await resHTML.text();
        appContainer.innerHTML = htmlContent;

        // 2. Eliminar scripts cargados dinámicamente previamente para evitar duplicados
        const scriptPrevio = document.getElementById("script-modulo-activo");
        if (scriptPrevio) {
            scriptPrevio.remove();
        }

        // 3. Cargar dinámicamente el controlador JS si existe
        const script = document.createElement("script");
        script.id = "script-modulo-activo";
        script.src = `${rutaJS}?v=${new Date().getTime()}`; // Prevenir caché durante desarrollo
        
        script.onerror = () => {
            // Si la vista no requiere o no tiene un JS asociado, simplemente se ignora
            console.log(`Info: No se encontró o no se requirió JS para: ${modulo}/${vista}`);
        };

        document.body.appendChild(script);

    } catch (error) {
        console.error("Error en la navegación:", error);
        appContainer.innerHTML = `
            <div class="container text-center py-5">
                <div class="alert alert-danger shadow-sm rounded-4 py-4" role="alert">
                    <i class="bi bi-exclamation-triangle-fill fs-1 text-danger"></i>
                    <h4 class="alert-heading fw-bold mt-2">Página no encontrada (404)</h4>
                    <p class="mb-0">No se pudo cargar la vista solicitada: <code>#${hash}</code></p>
                    <hr>
                    <a href="#dashboard" class="btn btn-outline-danger fw-bold">Volver al Dashboard</a>
                </div>
            </div>
        `;
    }
}

/**
 * Función global auxiliar para cambiar de vista desde cualquier script JS
 * @param {string} nuevaRuta - Ejemplo: 'clientes', 'clientes/form', 'llenados'
 */
window.cargarVista = function (nuevaRuta) {
    window.location.hash = nuevaRuta;
};