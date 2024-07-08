<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("../db_connect.php");

$complaintId = isset($_GET['id']) ? intval($_GET['id']) : 0;

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

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $complaintId);
$stmt->execute();
$result = $stmt->get_result();

$complaint = $result->fetch_assoc() ?: [];

if ($complaint) {
    $complaint['attached_files'] = [
        'https://i.imgur.com/zQZSWrt.jpg',
        'https://i.imgur.com/zQZSWrt.jpg',
        'https://i.imgur.com/zQZSWrt.jpg'
    ];

    $complaint['timeline'] = [
        [
            'id' => 1,
            'content' => 'The report is being verified',
            'iconBackground' => 'bg-black',
            'isActive' => true,
        ],
      
        [
            'id' => 3,
            'content' => 'The problems in this report have been resolved by the relevant parties',
            'iconBackground' => 'bg-gray-400',
            'isActive' => false,
        ],
        [
            'id' => 4,
            'content' => 'Completed',
            'iconBackground' => 'bg-gray-400',
            'isActive' => false,
        ],
    ];

    $complaint['comments'] = [
        [
            'id' => 1,
            'user' => 'Saipul jamil',
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

$conn->close();

header('Content-Type: application/json');
echo json_encode($complaint);
?>
