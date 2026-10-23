embotelladora_thomsom/
│
├── backend/
│   ├── config/
│   │   └── conexion.php           # Conexión MySQLi con charset UTF-8
│   ├── clientes/
│   │   ├── get_clientes.php       # Listado y filtro de clientes
│   │   ├── save_cliente.php       # Crear/editar cliente
│   │   └── delete_cliente.php     # Eliminar/Desactivar cliente
│   ├── llenados/
│   │   ├── get_llenados.php       # Consultar histórico de llenados
│   │   ├── save_llenado.php       # Registrar nueva venta de botellones
│   │   └── delete_llenado.php     # Anular/Eliminar transacción
│   └── reportes/
│       ├── reporte_pdf.php        # Generador de reportes en PDF (FPDF/TCPDF)
│       └── reporte_excel.php      # Exportación a Excel (CSV/PhpSpreadsheet)
│
├── src/
│   ├── app/
│   │   ├── componentes/          # Controladores JavaScript para AJAX
│   │   │   ├── dashboard/
│   │   │   │   └── index.js
│   │   │   ├── clientes/
│   │   │   │   ├── index.js
│   │   │   │   └── form.js
│   │   │   └── llenados/
│   │   │       ├── index.js
│   │   │       └── form.js
│   │   │
│   │   └── vistas/               # Módulos de interfaz HTML
│   │       ├── dashboard/
│   │       │   └── index.html
│   │       ├── clientes/
│   │       │   ├── index.html
│   │       │   └── form.html
│   │       └── llenados/
│   │           ├── index.html
│   │           └── form.html
│   │
│   └── assets/                   # Estilos CSS, imágenes y librerías locales
│       ├── css/
│       │   └── estilos.css
│       └── js/
│
├── app.js                         # Enrutador principal de la SPA
├── db_schema.sql                  # Script SQL de la base de datos
├── index.html                     # Punto de entrada principal con layout Bootstrap
└── README.md                      # Especificación del proyecto