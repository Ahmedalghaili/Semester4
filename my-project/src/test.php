<?php
// Allow from any origin
header("Access-Control-Allow-Origin: *");
// Allow methods and headers for preflight requests
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header("Content-Type: application/json; charset=UTF-8");

$response = array("message" => "Hello from PHP!");
echo json_encode($response);
?>
