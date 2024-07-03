<?php
// Allow from any origin
header("Access-Control-Allow-Origin: *");
// Allow methods and headers for preflight requests
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header("Content-Type: application/json; charset=UTF-8");

include '../db_connect.php'; // Include the database connection script

// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Get POST data
$data = json_decode(file_get_contents("php://input"));

if (isset($data->name) && isset($data->email) && isset($data->password)) {
    $name = $data->name;
    $email = $data->email;
    $password = password_hash($data->password, PASSWORD_BCRYPT); // Encrypt the password

    $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    if ($stmt === false) {
        echo json_encode(array("message" => "Prepare failed: " . $conn->error));
        exit;
    }

    $bind = $stmt->bind_param("sss", $name, $email, $password);
    if ($bind === false) {
        echo json_encode(array("message" => "Bind failed: " . $stmt->error));
        exit;
    }

    $exec = $stmt->execute();
    if ($exec) {
        echo json_encode(array("message" => "User registered successfully!"));
    } else {
        echo json_encode(array("message" => "Execute failed: " . $stmt->error));
    }

    $stmt->close();
} else {
    echo json_encode(array("message" => "Invalid input"));
}

$conn->close();
?>
