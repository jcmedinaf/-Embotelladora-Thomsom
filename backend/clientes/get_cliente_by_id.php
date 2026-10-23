<?php
/**
 * =====================================================================
 * ARCHIVO: backend/clientes/get_cliente_by_id.php
 * DESCRIPCIÓN: Obtiene un cliente específico por su ID para edición
 * =====================================================================
 */
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/../config/conexion.php';

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

if ($id <= 0) {
    echo json_encode(["success" => false, "message" => "ID inválido."]);
    exit();
}

try {
    $stmt = $conexion->prepare("SELECT id, cedula_rif, nombre, telefono, direccion FROM clientes WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($fila = $resultado->fetch_assoc()) {
        echo json_encode(["success" => true, "data" => $fila]);
    } else {
        echo json_encode(["success" => false, "message" => "Cliente no encontrado."]);
    }
    $stmt->close();
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
}
?>