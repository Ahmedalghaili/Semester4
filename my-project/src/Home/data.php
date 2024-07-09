<?php
// data.php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow any origin to access this resource
header('Access-Control-Allow-Methods: GET, POST, OPTIONS'); // Allow GET, POST, and OPTIONS methods
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allow specific headers

// Include the database connection file
include '../db_connect.php';

// Check if this is a preflight request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Get total number of complaints
$totalResult = $conn->query("SELECT COUNT(*) as total FROM complaint");
$totalRow = $totalResult->fetch_assoc();
$totalComplaints = $totalRow['total'];

// Get the count of each category
$sql = "SELECT category, COUNT(*) as count FROM complaint GROUP BY category ORDER BY category ASC";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $row['percentage'] = round(($row['count'] / $totalComplaints) * 100, 2);
        $data[] = $row;
    }
} else {
    echo json_encode(array());
}

$conn->close();

echo json_encode($data);
?>
