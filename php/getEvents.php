<?php
// getEvents.php

require_once 'connection.php'; // Include the database connection file

// Set CORS headers
header("Access-Control-Allow-Origin: *"); // Replace * with your frontend's origin if possible
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


// Fetch events from the database
$sql = "SELECT * FROM events";
$result = $conn->query($sql);

$events = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $events[] = $row;
    }
}

// Return events as JSON
header('Content-Type: application/json');
echo json_encode($events);

$conn->close();
