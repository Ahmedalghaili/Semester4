<?php

// Set HTTP headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Include the database connection script
include("../db_connect.php");

// Retrieve the complaint ID from the query parameters
$complaintId = isset($_GET['id']) ? intval($_GET['id']) : 0;

// SQL query to fetch complaint details and user information
$sql = "
    SELECT 
        complaint.id,
        complaint.category,
        complaint.title,
        complaint.region,
        complaint.description,
        complaint.image_path,
        complaint.created_at,
        complaint.state,
        complaint.likes,
        users.name AS user_name,
        users.photo_path 
    FROM 
        complaint
    JOIN 
        users ON complaint.user_id = users.id
    WHERE 
        complaint.id = ?
";

// Prepare and execute the SQL statement
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $complaintId);
$stmt->execute();
$result = $stmt->get_result();

// Fetch the result into an associative array
$complaint = $result->fetch_assoc() ?: [];

// If complaint data exists, add additional details
if ($complaint) {
    // Add attached files including the image path from the database
    $complaint['attached_files'] = [
        $complaint['image_path'],
    ];

    // Add user comments
    $complaint['comments'] = [
        [
            'id' => 1,
            'user' => 'Saipul Jamil',
            'content' => 'HEY SIR',
            'date' => '20-12-2024',
        ],
        [
            'id' => 2,
            'user' => 'Lendra Churvanof',
            'content' => 'relate bgt!',
            'date' => '20-12-2024',
        ],
        [
            'id' => 3,
            'user' => 'Kak Gem',
            'content' => 'kzl deh sama pemerintah yang gaperna peka sma warga nya sybul',
            'date' => '20-12-2024',
        ],
    ];
}

// Close the database connection
$conn->close();

// Output the final complaint details as JSON
header('Content-Type: application/json');
echo json_encode($complaint);

?>
