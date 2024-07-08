<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

include '../db_connect.php'; // Include the database connection script

function getStats() {
    global $conn;
    $stats = [
        'TotalVerified' => 0,
        'TotalSolved' => 0,
        'TotalOnProgress' => 0,
    ];

    $sql = "SELECT LOWER(state) as state, COUNT(*) as count FROM complaint GROUP BY state";
    $result = $conn->query($sql);

    if (!$result) {
        // Handle query error
        return [
            'success' => false,
            'message' => 'Error executing query: ' . $conn->error,
        ];
    }

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            switch ($row['state']) {
                case 'verified':
                    $stats['TotalVerified'] = $row['count'];
                    break;
                case 'solved':
                    $stats['TotalSolved'] = $row['count'];
                    break;
                case 'on-progress':
                    $stats['TotalOnProgress'] = $row['count'];
                    break;
            }
        }
    } else {
        return [
            'success' => false,
            'message' => 'No data found',
        ];
    }

    return [
        'success' => true,
        'data' => $stats,
    ];
}

$stats = getStats();
echo json_encode($stats);
?>
