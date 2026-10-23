# 💧 Sistema de Control y Gestión de Llenado - Embotelladora Thomsom

> 🎓 **Proyecto Académico / Educativo**  
> Desarrollado por **Juan Carlos Medina** con fines de aprendizaje y demostración de arquitectura web asíncrona (CRUD) utilizando PHP, MySQLi, AJAX y Bootstrap 4.

[![PHP](https://img.shields.io/badge/PHP-7.4%20%7C%208.x-777BB4?style=flat-square&logo=php&logoColor=white)](https://www.php.net/)
[![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-4.0-563D7C?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![jQuery](https://img.shields.io/badge/jQuery-3.6.0-0769AD?style=flat-square&logo=jquery&logoColor=white)](https://jquery.com/)

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

**1. Clonar el Repositorio**
Descarga o clona los archivos en la carpeta raíz de tu servidor local (ej. `htdocs` en XAMPP):
```bash
git clone https://github.com/jcmedinaf/-Embotelladora-Thomsom.git

---

* **2. Configurar la Base de Datos:**

* Abre tu gestor de base de datos MySQL (phpMyAdmin o consola).

* Ejecuta el script completo ubicado en db_schema.sql para crear la base de datos bd_embotelladora_thomsom y sus respectivas tablas.

---

* **3. Verificar Conexión:**

* Asegúrate de que las credenciales en backend/config/conexion.php coincidan con tu entorno local (por defecto: host: localhost, user: root, password: '').

---

* **4. Ejecutar la Aplicación:**

* Inicia los servicios de Apache y MySQL en tu entorno local.

* Abre tu navegador web e ingresa a:http://localhost/embotelladora_thomsom/

---

## 📋 5. Lineamientos de Entrega
* ** Repositorio GitHub:** Código fuente estructurado y actualizado.

* ** Google Classroom:** Enlace directo entregado en el plazo establecido.

* ** Defensa:** Demostración en vivo del funcionamiento de la SPA y explicación de los controladores backend y consultas SQL.


## 👨‍💻 Autoría y Propósito

Este proyecto fue desarrollado íntegramente por **Ing. Juan Carlos Medina** con fines puramente educativos y demostrativos. 

* **Propósito:** Servir como guía práctica y material didáctico sobre el desarrollo de aplicaciones web interactivas (CRUD) mediante peticiones asíncronas (AJAX), arquitectura limpia y buenas prácticas de seguridad en PHP.
* **Licencia:** Libre para uso académico y de aprendizaje.