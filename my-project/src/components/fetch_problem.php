<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header('Content-Type: application/json');
include '../db_connect.php';

$sql = "SELECT id, category, title, region, description, image_path, created_at, user_id, state, likes, comments FROM complaint";
$result = $conn->query($sql);

$problems = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $problems[] = $row;
    }
}

echo json_encode($problems);

$conn->close();
?>
