# Sistema de Control y Gestión de Llenado - Embotelladora Thomsom

## 1. Contexto y Objetivo
Desarrollar una aplicación web interactiva (arquitectura SPA o multipágina modular) para la empresa embotelladora **Thomsom**, ubicada en Maracaibo, con el fin de automatizar el control de llenado, el registro de ventas de botellones de agua a clientes y la generación de reportes operativos.

## 2. Requisitos Funcionales
La aplicación deberá implementar las siguientes características operativas:
* **Módulo de Clientes**: Registro, actualización y consulta de clientes (Cédula/RIF, Nombre, Teléfono y Dirección en Maracaibo).
* **Registro de Transacciones (Llenado/Venta)**: Interfaz para registrar la cantidad de botellones de agua vendidos y asociados a un cliente específico, asignando automáticamente la fecha y hora exacta de la operación mediante base de datos.
* **Histórico de Operaciones**: Visualización de un registro histórico detallado con opciones de filtrado y paginación por cliente y fechas.
* **Generación de Reportes**: Capacidad de exportar reportes formales en formato **PDF** y **Excel** que detallen las operaciones realizadas, totales de botellones y marcas de tiempo.

## 3. Requisitos Técnicos y Stack Tecnológico
Para garantizar un desarrollo ágil, ligero y robusto, se utilizará la siguiente pila tecnológica:
* **Frontend**: 
  * HTML5, CSS3 y **Bootstrap** para un diseño responsivo y moderno.
  * **JavaScript (Vanilla / jQuery)** y **AJAX** para la comunicación asíncrona con el servidor sin recargar la página.
* **Backend**: 
  * **PHP** (procedural con `mysqli`) para la lógica del servidor y procesamiento de solicitudes.
* **Persistencia de Datos**: 
  * Base de datos relacional **MySQL** para el almacenamiento seguro de clientes, transacciones y registros.
* **Generación de Reportes**: 
  * Librerías en PHP (ej. FPDF, TCPDF o PhpSpreadsheet) para la exportación de reportes a PDF y Excel.
* **Control de Errores**: Validación de entradas tanto del lado del cliente como del servidor para mantener la integridad de los datos.

## 4. Lineamientos de Entrega y Evaluación
* **Repositorio GitHub**: El código fuente debe subirse a un repositorio en GitHub, manteniendo un historial de commits ordenado y un archivo `README.md` que explique la configuración de la base de datos y la puesta en marcha en un servidor local (como Apache/XAMPP).
* **Google Classroom**: Entregar el enlace directo al repositorio dentro del plazo establecido.
* **Defensa del Proyecto**: La aplicación será defendida y evaluada (demostración en vivo del funcionamiento y explicación técnica de los scripts PHP y consultas SQL) el día fijado para la entrega.