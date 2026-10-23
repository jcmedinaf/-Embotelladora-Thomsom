<?php
/**
 * =====================================================================
 * ARCHIVO: backend/config/conexion.php
 * DESCRIPCIÓN: Conexión a la base de datos MySQL para Embotelladora Thomsom
 * =====================================================================
 */

$host = "localhost";
$usuario = "root";
$password = ""; // Cambiar si tu entorno local tiene contraseña
$base_datos = "bd_embotelladora_thomsom";

// Crear conexión
$conexion = new mysqli($host, $usuario, $password, $base_datos);

// Verificar conexión
if ($conexion->connect_error) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        "success" => false,
        "message" => "Error de conexión a la base de datos: " . $conexion->connect_error
    ]);
    exit();
}

// Establecer el juego de caracteres a utf8mb4
$conexion->set_charset("utf8mb4");
?>