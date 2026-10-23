# 🚰 Sistema de Control y Gestión de Llenado - Embotelladora Thomsom

## 📄 Descripción
Este proyecto consiste en el diseño y desarrollo de una aplicación de escritorio desarrollada en **Java** bajo el paradigma de **Programación Orientada a Objetos (POO)**. Su propósito es automatizar el control de llenado, el registro de ventas de botellones de agua y la generación de reportes detallados para la empresa embotelladora **Thomsom**, atendiendo a sus clientes ubicados en Maracaibo.

---

## 🚀 Requisitos Funcionales

La aplicación incluye las siguientes funcionalidades clave:

- **👤 Módulo de Clientes**: Registro, edición y consulta de clientes (Cédula/RIF, Nombre, Teléfono y Dirección en Maracaibo).
- **📦 Registro de Transacciones (Llenado/Venta)**:
  - Registro de la cantidad de botellones vendidos asociados a un cliente.
  - Registro automático de la fecha y hora exacta ($YYYY-MM-DD\ HH:mm:ss$) del llenado.
- **📜 Histórico de Operaciones**: Visualización de transacciones realizadas con capacidad de filtrado por cliente y rango de fechas.
- **📊 Generación de Reportes PDF**: Exportación automatizada de reportes formales en formato PDF que incluyen el encabezado corporativo, desglose de operaciones y totales.

---

## 🛠️ Requisitos Técnicos y Tecnologías

- **Lenguaje**: Java (JDK 11 o superior).
- **Interfaz Gráfica (GUI)**: JavaFX o Swing.
- **Base de Datos**: MySQL o SQLite (conexión mediante JDBC).
- **Librería de PDF**: iText (v5.x o superior) o Apache PDFBox.
- **Arquitectura**: Patrón MVC (Modelo - Vista - Controlador) o separación por capas (DAO / Servicios / GUI).
- **Manejo de Excepciones**: Validaciones estrictas de entradas de datos y control de errores en runtime.

---

## 📋 Estructura Sugerida del Proyecto

```text
src/
├── config/         # Conexión a Base de Datos
├── dao/            # Data Access Objects (SQL queries)
├── model/          # Modelos de datos (Cliente, Venta, etc.)
├── service/        # Lógica de negocio y generación de PDF
└── view/           # Interfaz gráfica (Controllers/Views)
```

---

## 📌 Lineamientos de Entrega y Evaluación

1. **GitHub**: Subir el código fuente a un repositorio en GitHub con un historial claro de commits y el presente archivo `README.md`.
2. **Google Classroom**: Adjuntar el enlace directo al repositorio de GitHub antes de la fecha límite.
3. **Defensa Presencial/Virtual**: Evaluación teórica y práctica mediante demostración en vivo del software y explicación de su arquitectura.