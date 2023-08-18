<?php
// deleteCard.php
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Allow POST and OPTIONS methods
header("Access-Control-Allow-Headers: Content-Type"); // Allow Content-Type header

include('connection.php'); // Include the database connection file

// Get the event_id from the request
$data = json_decode(file_get_contents('php://input'), true);
$event_id = $data['event_id'];

// Prepare and execute the DELETE query
$sql = "DELETE FROM events WHERE event_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $event_id);

if ($stmt->execute()) {
    echo 'Event deleted successfully';
} else {
    echo 'Error deleting event: ' . $conn->error;
}

$stmt->close();
$conn->close();
