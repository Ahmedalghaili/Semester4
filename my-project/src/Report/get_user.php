<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require '../db_connect.php'; // Include your database connection file

// Get the user ID from the query parameter
$user_id = isset($_GET['user_id']) ? intval($_GET['user_id']) : 0;

if ($user_id > 0) {
    // Fetch user data
    $stmt = $conn->prepare('SELECT photo_path FROM users WHERE id = ?');
    $stmt->bind_param('i', $user_id); // Bind the user ID as an integer
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user) {
        echo json_encode($user);
    } else {
        echo json_encode(['error' => 'User not found']);
    }

    $stmt->close();
} else {
    echo json_encode(['error' => 'Invalid user ID']);
}

$conn->close();
?>
