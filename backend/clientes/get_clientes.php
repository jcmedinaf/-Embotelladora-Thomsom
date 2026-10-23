<?php
/**
 * =====================================================================
 * ARCHIVO: backend/clientes/get_clientes.php
 * DESCRIPCIÓN: Devuelve en formato JSON la lista de clientes registrados
 * =====================================================================
 */
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/../config/conexion.php';

try {
    $sql = "SELECT id, cedula_rif, nombre, telefono, direccion FROM clientes ORDER BY id DESC";
    $resultado = $conexion->query($sql);

    $clientes = [];
    while ($fila = $resultado->fetch_assoc()) {
        $clientes[] = $fila;
    }

    echo json_encode([
        "success" => true,
        "data" => $clientes
    ]);
} catch (Exception $e) {
    echo json_encode([
        "success" => false,
        "message" => "Error al consultar los clientes: " . $e->getMessage()
    ]);
}
?>