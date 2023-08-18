<?php

require_once 'connection.php'; // Include the database connection file



// Set CORS headers
header("Access-Control-Allow-Origin: *"); // Replace * with your frontend's origin if possible
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


// Get the data from the request
$data = json_decode(file_get_contents("php://input"), true);
$event_id = NULL;
$event_name = $data['event_name'];
$description = $data['description'];
$date = $data['date'];
$time = $data['time'];

$sql = "INSERT INTO events (event_id, event_name, description, date, time) VALUES ('$event_id','$event_name', '$description', '$date', '$time')";

if ($conn->query($sql) === TRUE) {
    echo "Event created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
