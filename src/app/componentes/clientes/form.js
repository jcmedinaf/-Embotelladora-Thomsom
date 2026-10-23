/**
 * =====================================================================
 * ARCHIVO: src/app/componentes/clientes/form.js
 * DESCRIPCIÓN: Controlador para el formulario de registro y edición de clientes
 * =====================================================================
 */

(async function () {
    const formCliente = document.getElementById('form-cliente');
    const tituloForm = document.getElementById('titulo-form');
    const inputId = document.getElementById('cliente-id');
    const inputCedulaRif = document.getElementById('cedula_rif');
    const inputNombre = document.getElementById('nombre');
    const inputTelefono = document.getElementById('telefono');
    const inputDireccion = document.getElementById('direccion');

    // Obtener parámetro 'id' de la URL (si existe)
    const hashCompleto = window.location.hash;
    const urlParams = new URLSearchParams(hashCompleto.split('?')[1]);
    const clienteId = urlParams.get('id');

    const fixUtf8 = (str) => {
        if (!str) return '';
        try { return decodeURIComponent(escape(str)); } catch (e) { return str; }
    };

    // Si hay un ID, estamos en modo Edición
    if (clienteId) {
        tituloForm.textContent = "EDITAR CLIENTE";
        try {
            const res = await fetch(`backend/clientes/get_cliente_by_id.php?id=${clienteId}`);
            const data = await res.json();
            if (data.success && data.data) {
                const cli = data.data;
                inputId.value = cli.id;
                inputCedulaRif.value = cli.cedula_rif;
                inputNombre.value = fixUtf8(cli.nombre);
                inputTelefono.value = cli.telefono || '';
                inputDireccion.value = fixUtf8(cli.direccion) || '';
            } else {
                alert("No se pudieron cargar los datos del cliente.");
                window.cargarVista('clientes');
            }
        } catch (e) {
            console.error("Error al cargar cliente:", e);
        }
    }

    // Manejar envío del formulario mediante AJAX
    formCliente.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(formCliente);

        try {
            const res = await fetch('backend/clientes/save_cliente.php', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();

            if (data.success) {
                window.cargarVista('clientes');
            } else {
                alert(data.message || "Error al guardar el cliente.");
            }
        } catch (err) {
            console.error("Error de red:", err);
            alert("Error de conexión al intentar guardar el cliente.");
        }
    });
})();