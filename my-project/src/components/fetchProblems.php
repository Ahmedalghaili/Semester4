<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

include '../db_connect.php';

$status = $_GET['status'] ?? 'on-progress';

$stmt = $conn->prepare("SELECT id, category, title, region, description, image_path, created_at, user_id, state AS status, likes, comments FROM complaint WHERE state = ?");
$stmt->bind_param('s', $status);
$stmt->execute();
$result = $stmt->get_result();

$problems = [];
while ($row = $result->fetch_assoc()) {
    $problems[] = $row;
}

$stmt->close();
$conn->close();

echo json_encode($problems);
