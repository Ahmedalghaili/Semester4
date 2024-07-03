<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$response = array("message" => "Hello from PHP!");
echo json_encode($response);
?>
