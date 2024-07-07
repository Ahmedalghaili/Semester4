<?php

// Allow CORS from any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Include the database connection file
include '../db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $category = $conn->real_escape_string($_POST['category']);
    $title = $conn->real_escape_string($_POST['title']);
    $region = $conn->real_escape_string($_POST['region']);
    $description = $conn->real_escape_string($_POST['description']);
    $user_id = $conn->real_escape_string($_POST['user_id']); // Added user_id
    $image_path = "";

    // Debugging output
    echo "Received user_id: $user_id";

    // Handle image upload
    if (isset($_FILES['file-upload']) && $_FILES['file-upload']['error'] == 0) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["file-upload"]["name"]);
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        // Create uploads directory if it doesn't exist
        if (!is_dir($target_dir)) {
            mkdir($target_dir, 0777, true);
        }

        // Check file size
        if ($_FILES["file-upload"]["size"] > 10000000) {
            echo "Sorry, your file is too large.";
            exit;
        }

        // Allow certain file formats
        $allowed_types = ['jpg', 'jpeg', 'png', 'gif'];
        if (!in_array($imageFileType, $allowed_types)) {
            echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
            exit;
        }

        if (move_uploaded_file($_FILES["file-upload"]["tmp_name"], $target_file)) {
            $image_path = $target_file;
        } else {
            echo "Sorry, there was an error uploading your file.";
            exit;
        }
    }

    // Insert data into the database using prepared statements
    $stmt = $conn->prepare("INSERT INTO complaint (category, title, region, description, image_path, user_id) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $category, $title, $region, $description, $image_path, $user_id); // Added user_id

    if ($stmt->execute()) {
        echo "New complaint submitted successfully";
    } else {
        echo "New complaint submission error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
