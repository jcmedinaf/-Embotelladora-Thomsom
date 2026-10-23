CREATE DATABASE IF NOT EXISTS bd_embotelladora_thomsom DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;
USE bd_embotelladora_thomsom;

-- 1. TABLA DE USUARIOS DEL SISTEMA (Administrador / Operador)
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cedula VARCHAR(20) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    clave VARCHAR(255) NOT NULL,
    rol ENUM('ADMINISTRADOR', 'OPERADOR') DEFAULT 'OPERADOR',
    status ENUM('ACTIVO', 'INACTIVO') DEFAULT 'ACTIVO',
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. TABLA DE CLIENTES DE MARACAIBO
CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cedula_rif VARCHAR(20) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    direccion VARCHAR(255) DEFAULT 'Maracaibo, Zulia',
    status ENUM('ACTIVO', 'INACTIVO') DEFAULT 'ACTIVO',
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. TABLA DE REGISTRO DE LLENADO Y VENTA DE BOTELLONES
CREATE TABLE IF NOT EXISTS llenados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    cantidad_botellones INT NOT NULL,
    monto_total DECIMAL(10, 2) DEFAULT 0.00,
    fecha_hora DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    usuario_id INT,
    observaciones TEXT,
    CONSTRAINT fk_llenados_cliente FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE,
    CONSTRAINT fk_llenados_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- DATOS DE PRUEBA INICIALES
INSERT INTO usuarios (cedula, nombre, usuario, clave, rol) 
VALUES ('12257039', 'Juan Carlos Medina', 'admin', '$2y$10$e.g.hashdeprueba', 'ADMINISTRADOR');

INSERT INTO clientes (cedula_rif, nombre, telefono, direccion) VALUES 
('V-12345678', 'Comercializadora El Sol C.A.', '0414-6123456', 'Sector Bella Vista, Maracaibo'),
('V-87654321', 'Abarrotes La Marina', '0424-6987654', 'Av. Las Delicias, Maracaibo');