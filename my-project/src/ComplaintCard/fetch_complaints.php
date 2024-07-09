<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("../db_connect.php");

// SQL query to fetch all complaints and join with users table to get user name and photo path, sorted by likes
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
        users.photo_path AS user_photo
    FROM 
        complaint
    JOIN 
        users ON complaint.user_id = users.id
    ORDER BY 
        complaint.likes DESC
";

$result = $conn->query($sql);

$complaints = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $complaints[] = $row;
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($complaints);
?>
