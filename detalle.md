Especificación del Proyecto: Sistema de Control y Gestión de Llenado - Embotelladora Thomsom
1. Contexto y Objetivo
Diseñar y desarrollar una aplicación en Java (bajo el paradigma de Programación Orientada a Objetos) para la empresa embotelladora Thomsom, con el fin de automatizar el control de llenado, el registro de ventas de botellones de agua y la generación de reportes para sus clientes ubicados en Maracaibo.

2. Requisitos Funcionales
La aplicación deberá implementar las siguientes características operativas:

Módulo de Clientes: Registro, actualización y consulta de clientes (Cédula/RIF, Nombre, Teléfono y Dirección en Maracaibo).

Registro de Transacciones (Llenado/Venta): Interfaz o proceso para registrar la cantidad de botellones de agua vendidos y asociados a un cliente específico, asignando automáticamente la fecha y hora exacta de la operación.

Histórico de Operaciones: Visualización de un registro histórico detallado con opciones de consulta o filtrado por cliente y fechas.

Generación de Reportes: Capacidad de exportar un reporte formal en formato PDF que detalle las operaciones realizadas, incluyendo encabezado de la empresa, totales de botellones y marcas de tiempo.

3. Requisitos Técnicos y Tecnologías Sugeridas
Para garantizar un desarrollo robusto y estandarizado, se recomienda el uso de las siguientes tecnologías y herramientas:

Lenguaje de Programación: Java (JDK 11 o superior).

Interfaz Gráfica de Usuario (GUI):

Se puede implementar utilizando JavaFX (recomendado por su diseño moderno) o Swing.

Persistencia de Datos:

Almacenamiento relacional mediante MySQL o base de datos embebida SQLite utilizando JDBC (Java Database Connectivity).

Generación de Archivos PDF:

Utilización de librerías especializadas como iText o Apache PDFBox para la creación automatizada de los reportes en PDF.

Arquitectura:

Aplicación estructurada bajo un patrón de capas limpio (ej. separación entre Modelo, Vista/Controlador o Clases de Conexión a Base de Datos y Lógica de Negocio).

Manejo de Errores: Validación estricta de entradas de datos (ej. evitar cantidades negativas o campos vacíos) y control de excepciones.

4. Lineamientos de Entrega y Evaluación
Repositorio GitHub: El código fuente debe subirse a un repositorio en GitHub, manteniendo un historial de commits ordenado y un archivo README.md que explique detalladamente cómo configurar la base de datos, compilar y ejecutar el proyecto.

Google Classroom: Entregar el enlace directo al repositorio dentro del plazo establecido.

Defensa del Proyecto: La aplicación será defendida y evaluada (demostración en vivo del funcionamiento y explicación técnica de la arquitectura del código) el día fijado para la entrega.
