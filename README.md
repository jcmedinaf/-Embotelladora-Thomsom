# 💧 Sistema de Control y Gestión de Llenado - Embotelladora Thomsom

Aplicación web interactiva desarrollada bajo una arquitectura de Una Sola Página (**SPA**) para la empresa **Embotelladora Thomsom**, ubicada en Maracaibo, Estado Zulia. Su objetivo principal es automatizar el control de llenado, la gestión de clientes, el registro de transacciones de botellones de agua y la generación de reportes operativos.

---

## 🚀 1. Requisitos Funcionales
* **Módulo de Clientes**: Registro, actualización, consulta y eliminación de clientes (Cédula/RIF, Nombre, Teléfono y Dirección en Maracaibo).
* **Control de Llenado (Ventas)**: Interfaz dinámica para registrar la cantidad de botellones vendidos asociados a un cliente, con asignación automática de fecha y hora.
* **Histórico de Operaciones**: Visualización detallada de las transacciones con opciones de consulta y paginación.
* **Reportes Operativos**: Generación y exportación de reportes formales en formatos **PDF** y **Excel**.

---

## 🛠️ 2. Pila Tecnológica (Stack)
* **Frontend**: HTML5, CSS3, **Bootstrap 5**, JavaScript (Vanilla / jQuery) y peticiones asíncronas **AJAX**.
* **Backend**: **PHP** (procedural con conexión segura `mysqli` y codificación UTF-8).
* **Base de Datos**: **MySQL** (Relacional).
* **Gestión de Vistas**: Enrutador personalizado SPA basado en Hash (`#`).

---

## 📂 3. Estructura del Proyecto

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

---

## ⚙️ 4. Instalación y Puesta en Marcha Local
** 1. Clonar el Repositorio** o descargar los archivos en la carpeta raíz de tu servidor local (ej. htdocs en XAMPP):

> Bash
> git clone [https://github.com/tu-usuario/embotelladora_thomsom.git](https://github.com/tu-usuario/embotelladora_thomsom.git)

## ** 2. Configurar la Base de Datos:**

* Abre tu gestor de base de datos MySQL (phpMyAdmin o consola).

* Ejecuta el script completo ubicado en db_schema.sql para crear la base de datos bd_embotelladora_thomsom y sus respectivas tablas.

## **3. Verificar Conexión:**

* Asegúrate de que las credenciales en backend/config/conexion.php coincidan con tu entorno local (por defecto: host: localhost, user: root, password: '').

## **4. Ejecutar la Aplicación:**

* Inicia los servicios de Apache y MySQL en tu entorno local.

* Abre tu navegador web e ingresa a:http://localhost/embotelladora_thomsom/

## 📋 5. Lineamientos de Entrega
** Repositorio GitHub:** Código fuente estructurado y actualizado.

** Google Classroom:** Enlace directo entregado en el plazo establecido.

** Defensa:** Demostración en vivo del funcionamiento de la SPA y explicación de los controladores backend y consultas SQL.