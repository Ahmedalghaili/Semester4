<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

include '../db_connect.php'; // Include the database connection script

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) && isset($data->password)) {
    $email = $data->email;
    $password = $data->password;

    $stmt = $conn->prepare("SELECT * FROM admin WHERE email = ?");
    if ($stmt === false) {
        echo json_encode(array("message" => "Prepare failed: " . $conn->error));
        exit;
    }

    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            echo json_encode(array("message" => "Login successful!", "user" => $row));
        } else {
            echo json_encode(array("message" => "Invalid password!"));
        }
    } else {
        echo json_encode(array("message" => "No user found with this email!"));
    }

    $stmt->close();
} else {
    echo json_encode(array("message" => "Invalid input"));
}

$conn->close();
?>
