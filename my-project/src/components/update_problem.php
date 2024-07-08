<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Content type header
header('Content-Type: application/json');

// Include database connection
include '../db_connect.php';

// Get the JSON data
$data = json_decode(file_get_contents("php://input"), true);

// Validate received data
if (!isset($data['id']) || !isset($data['state'])) {
    echo json_encode(["success" => false, "error" => "Invalid input"]);
    exit();
}

// Extract variables and sanitize input
$id = $conn->real_escape_string($data['id']);
$state = $conn->real_escape_string($data['state']);

// Update query
$sql = "UPDATE complaint SET state = '$state' WHERE id = '$id'";

// Execute query and check result
if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $conn->error]);
}

// Close the connection
$conn->close();
?>
