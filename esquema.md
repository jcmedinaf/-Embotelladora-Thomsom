### 📂 Estructura del Proyecto (Arquitectura SPA)

```text
embotelladora_thomsom/
├── 📁 backend/
│   ├── 📁 config/
│   │   └── conexion.php           # Conexión MySQLi con charset UTF-8
│   ├── 📁 clientes/
│   │   ├── delete_cliente.php     # Eliminar/Desactivar cliente
│   │   ├── get_cliente_by_id.php  # Consultar datos de un cliente específico
│   │   ├── get_clientes.php       # Listado y filtro de clientes
│   │   └── save_cliente.php       # Crear / Editar cliente
│   ├── 📁 llenados/
│   │   ├── delete_llenado.php     # Anular/Eliminar transacción
│   │   ├── get_llenados.php       # Consultar histórico de llenados
│   │   └── save_llenado.php       # Registrar nueva venta de botellones
│   └── 📁 reportes/
│       ├── reporte_excel.php      # Exportación a Excel (CSV/PhpSpreadsheet)
│       └── reporte_pdf.php        # Generador de reportes en PDF (FPDF/TCPDF)
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 componentes/        # Controladores JavaScript (Lógica AJAX)
│   │   │   ├── 📁 clientes/
│   │   │   │   ├── form.js
│   │   │   │   └── index.js
│   │   │   ├── 📁 dashboard/
│   │   │   │   └── index.js
│   │   │   └── 📁 llenados/
│   │   │       ├── form.js
│   │   │       └── index.js
│   │   └── 📁 vistas/             # Vistas dinámicas HTML
│   │       ├── 📁 clientes/
│   │       │   ├── form.html
│   │       │   └── index.html
│   │       ├── 📁 dashboard/
│   │       │   └── index.html
│   │       └── 📁 llenados/
│   │           ├── form.html
│   │           └── index.html
│   └── 📁 assets/                 # Recursos estáticos
│       ├── 📁 css/
│       │   └── estilos.css
│       └── 📁 js/
├── app.js                         # Enrutador principal de la SPA
├── db_schema.sql                  # Script SQL de la base de datos
├── index.html                     # Punto de entrada principal (Bootstrap 5)
└── README.md                      # Especificación y documentación del proyecto