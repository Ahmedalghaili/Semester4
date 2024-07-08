<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Include the database connection script
include '../db_connect.php';

// Function to get chart data
function getChartData() {
    global $conn;

    // SQL query to count complaints per category
    $sql = "SELECT category, COUNT(*) as count FROM complaint GROUP BY category";
    $result = $conn->query($sql);

    if (!$result) {
        // Handle query error
        return [
            'success' => false,
            'message' => 'Error executing query: ' . $conn->error,
        ];
    }

    $categories = array();
    $counts = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $categories[] = $row['category'];
            $counts[] = $row['count'];
        }
    }

    return [
        'success' => true,
        'data' => [
            'labels' => $categories,
            'datasets' => [
                [
                    'label' => 'Number of Complaints',
                    'data' => $counts,
                    'borderColor' => 'rgba(75, 192, 192, 1)',
                    'backgroundColor' => 'rgba(75, 192, 192, 0.2)',
                ]
            ]
        ]
    ];
}

$data = getChartData();
echo json_encode($data);
?>
