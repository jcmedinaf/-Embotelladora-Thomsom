/**
 * =====================================================================
 * ARCHIVO: src/app/componentes/clientes/index.js
 * DESCRIPCIÓN: Controlador para listar, paginar y eliminar clientes
 * =====================================================================
 */

(async function () {
    const tablaClientesBody = document.getElementById('tabla-clientes-body');
    const txtTotalClientes = document.getElementById('txt-total-clientes');
    const ulPaginacion = document.getElementById('paginacion-clientes');

    let clientesGlobal = [];
    let paginaActual = 1;
    const itemsPorPagina = 10;

    const fixUtf8 = (str) => {
        if (!str) return '';
        try { return decodeURIComponent(escape(str)); } catch (e) { return str; }
    };

    try {
        const res = await fetch('backend/clientes/get_clientes.php');
        const data = await res.json();

        if (data.success) {
            clientesGlobal = data.data || [];
            renderizarTablaYPaginacion();
        } else {
            if (tablaClientesBody) {
                tablaClientesBody.innerHTML = '<tr><td colspan="5" class="text-center text-danger py-4">No se pudieron cargar los datos.</td></tr>';
            }
        }
    } catch (e) {
        console.error('Error al conectar:', e);
        if (tablaClientesBody) {
            tablaClientesBody.innerHTML = '<tr><td colspan="5" class="text-center text-danger py-4">Error al conectar con el servidor.</td></tr>';
        }
    }

    function renderizarTablaYPaginacion() {
        const totalItems = clientesGlobal.length;
        if (totalItems === 0) {
            tablaClientesBody.innerHTML = '<tr><td colspan="5" class="text-center text-muted py-5">No hay clientes registrados.</td></tr>';
            txtTotalClientes.textContent = 'Mostrando 0 de 0 clientes';
            ulPaginacion.innerHTML = '';
            return;
        }

        const totalPaginas = Math.ceil(totalItems / itemsPorPagina);
        if (paginaActual > totalPaginas) paginaActual = totalPaginas;

        const inicio = (paginaActual - 1) * itemsPorPagina;
        const fin = Math.min(inicio + itemsPorPagina, totalItems);
        const clientesPagina = clientesGlobal.slice(inicio, fin);

        tablaClientesBody.innerHTML = '';
        clientesPagina.forEach(cli => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="px-4"><a href="#clientes/form?id=${cli.id}" class="text-primary text-decoration-none fw-bold">${cli.cedula_rif}</a></td>
                <td class="fw-bold text-dark">${fixUtf8(cli.nombre)}</td>
                <td class="text-secondary">${cli.telefono || 'N/D'}</td>
                <td class="text-secondary">${fixUtf8(cli.direccion)}</td>
                <td class="text-center">
                    <div class="d-flex justify-content-center gap-1">
                        <a href="#clientes/form?id=${cli.id}" class="btn btn-sm btn-outline-primary p-1 px-2" title="Editar">
                            <i class="bi bi-pencil-square"></i>
                        </a>
                        <button class="btn btn-sm btn-outline-danger p-1 px-2" onclick="window.eliminarCliente(${cli.id})" title="Eliminar">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </td>
            `;
            tablaClientesBody.appendChild(tr);
        });

        txtTotalClientes.textContent = `Mostrando ${inicio + 1} a ${fin} de ${totalItems} clientes`;

        let htmlPaginacion = `
            <li class="page-item ${paginaActual === 1 ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="window.cambiarPaginaClientes(${paginaActual - 1}); return false;">Anterior</a>
            </li>
        `;

        for (let i = 1; i <= totalPaginas; i++) {
            htmlPaginacion += `
                <li class="page-item ${paginaActual === i ? 'active' : ''}">
                    <a class="page-link" href="#" onclick="window.cambiarPaginaClientes(${i}); return false;">${i}</a>
                </li>
            `;
        }

        htmlPaginacion += `
            <li class="page-item ${paginaActual === totalPaginas ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="window.cambiarPaginaClientes(${paginaActual + 1}); return false;">Siguiente</a>
            </li>
        `;

        ulPaginacion.innerHTML = htmlPaginacion;
    }

    window.cambiarPaginaClientes = function (nuevaPagina) {
        const totalPaginas = Math.ceil(clientesGlobal.length / itemsPorPagina);
        if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
            paginaActual = nuevaPagina;
            renderizarTablaYPaginacion();
        }
    };
})();

window.eliminarCliente = async function(id) {
    if (!confirm('¿Estás seguro de que deseas eliminar este cliente?')) return;
    try {
        const res = await fetch(`backend/clientes/delete_cliente.php?id=${id}`);
        const data = await res.json();
        if (data.success) {
            window.cargarVista('clientes');
        } else {
            alert(data.message || 'No se pudo eliminar el cliente.');
        }
    } catch (err) {
        console.error(err);
        alert('Error de conexión al intentar eliminar.');
    }
};