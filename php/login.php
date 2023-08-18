<?php
// Allow requests from your React app's domain and port
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Content-Type: application/json');

// Handle preflight (OPTIONS) requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 86400');
    exit();
}

require_once 'connection.php'; // db connection

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Sanitize and validate data
$email = mysqli_real_escape_string($conn, $data['email']);
$password = $data['password'];

// Check if user exists
$query = "SELECT * FROM users WHERE email = '$email'";
$result = mysqli_query($conn, $query);

if ($row = mysqli_fetch_assoc($result)) {
    // Verify password
    if (password_verify($password, $row['password'])) {
        $response = array('message' => 'Login successful', 'user_id' => $row['user_id']);
        echo json_encode($response);
    } else {
        $response = array('error' => 'Incorrect password');
        echo json_encode($response);
    }
} else {
    $response = array('error' => 'User not found');
    echo json_encode($response);
}

mysqli_close($conn);
