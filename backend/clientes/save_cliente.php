<?php
/**
 * =====================================================================
 * ARCHIVO: backend/clientes/save_cliente.php
 * DESCRIPCIÓN: Procesa la inserción o actualización de un cliente
 * =====================================================================
 */
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/../config/conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = isset($_POST['id']) ? trim($_POST['id']) : '';
    $cedula_rif = isset($_POST['cedula_rif']) ? trim($_POST['cedula_rif']) : '';
    $nombre = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';
    $telefono = isset($_POST['telefono']) ? trim($_POST['telefono']) : '';
    $direccion = isset($_POST['direccion']) ? trim($_POST['direccion']) : 'Maracaibo, Zulia';

    if (empty($cedula_rif) || empty($nombre)) {
        echo json_encode(["success" => false, "message" => "La cédula/RIF y el nombre son obligatorios."]);
        exit();
    }

    try {
        if (!empty($id)) {
            // Actualizar
            $stmt = $conexion->prepare("UPDATE clientes SET cedula_rif = ?, nombre = ?, telefono = ?, direccion = ? WHERE id = ?");
            $stmt->bind_param("ssssi", $cedula_rif, $nombre, $telefono, $direccion, $id);
        } else {
            // Insertar nuevo
            $stmt = $conexion->prepare("INSERT INTO clientes (cedula_rif, nombre, telefono, direccion) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("ssss", $cedula_rif, $nombre, $telefono, $direccion);
        }

        if ($stmt->execute()) {
            echo json_encode(["success" => true, "message" => "Cliente guardado con éxito."]);
        } else {
            echo json_encode(["success" => false, "message" => "Error al guardar en la base de datos: " . $stmt->error]);
        }

        $stmt->close();
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => "Excepción: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Método no permitido."]);
}
?>