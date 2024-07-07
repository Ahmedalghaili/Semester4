<?php
// Allow from any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header("Content-Type: application/json; charset=UTF-8");

include '../db_connect.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if (isset($_POST['email']) && isset($_POST['password']) && isset($_POST['name'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    // Handle image upload
    $imagePath = null;
    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $targetDir = "../uploads/";
        if (!file_exists($targetDir)) {
            mkdir($targetDir, 0777, true); // Create the directory if it doesn't exist
        }
        $targetFile = $targetDir . basename($_FILES["image"]["name"]);
        $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
        
        $check = getimagesize($_FILES["image"]["tmp_name"]);
        if ($check !== false) {
            if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
                $imagePath = $targetFile;
            } else {
                echo json_encode(array("message" => "Error uploading your file."));
                exit;
            }
        } else {
            echo json_encode(array("message" => "File is not an image."));
            exit;
        }
    }

    // Check if email already exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    if ($stmt === false) {
        echo json_encode(array("message" => "Prepare failed: " . $conn->error));
        exit;
    }
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();
    
    if ($stmt->num_rows > 0) {
        echo json_encode(array("message" => "Email already exists!"));
        $stmt->close();
        $conn->close();
        exit;
    }
    $stmt->close();

    // Insert new user
    $stmt = $conn->prepare("INSERT INTO users (name, email, password, photo_path) VALUES (?, ?, ?, ?)");
    if ($stmt === false) {
        echo json_encode(array("message" => "Prepare failed: " . $conn->error));
        exit;
    }

    $bind = $stmt->bind_param("ssss", $name, $email, $password, $imagePath);
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
