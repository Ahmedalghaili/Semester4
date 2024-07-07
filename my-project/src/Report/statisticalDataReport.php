<?php
header('Access-Control-Allow-Origin: *'); // For development purposes
header('Content-Type: application/json');
include '../db_connect.php';

// Query to get the dates
$query = "SELECT DATE_FORMAT(created_at, '%Y-%m-%d') as date, COUNT(*) as count FROM complaint GROUP BY date ORDER BY created_at";
$result = $conn->query($query);

$data = array();
foreach ($result as $row) {
    // Generate a random count between 1 and 10 for each date
    $row['count'] = rand(1, 10);
    $data[] = $row;
}
$result->close();
$conn->close();

echo json_encode($data);
?>
