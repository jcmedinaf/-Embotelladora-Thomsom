<?php
/**
 * =====================================================================
 * ARCHIVO: backend/clientes/delete_cliente.php
 * DESCRIPCIÓN: Elimina un cliente por su ID
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
    $stmt = $conexion->prepare("DELETE FROM clientes WHERE id = ?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Cliente eliminado con éxito."]);
    } else {
        echo json_encode(["success" => false, "message" => "No se pudo eliminar el cliente."]);
    }
    $stmt->close();
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
}
?>