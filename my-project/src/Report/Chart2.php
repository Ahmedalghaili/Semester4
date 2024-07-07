<?php
header('Access-Control-Allow-Origin: *'); // For development purposes
header('Content-Type: application/json');
include '../db_connect.php';

$query = "SELECT state, COUNT(*) as count FROM complaint GROUP BY state";
$result = $conn->query($query);
$data = array();
foreach ($result as $row) {
   $data[] = $row;
}
$result->close();
$conn->close();
echo json_encode($data);
?>
