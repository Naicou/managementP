<?php
// Set appropriate headers

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Rest of your PHP code...


// Include your database connection
require_once 'connection.php';

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate and sanitize input (you should enhance this)
$user_id = NULL;
$email = mysqli_real_escape_string($conn, $data['email']);
$password = password_hash($data['password'], PASSWORD_DEFAULT); // Hash the password

// Check if email and password are empty 
if ($email === '' || $password === '') {
    $response = array('error' => 'Email and password cannot be empty');
    echo json_encode($response);
    exit();
    //check if email is missing '@' symbol
} elseif (strpos($email, '@') === false) {
    $response = array('error' => 'Email must include "@" symbol');
    echo json_encode($response);
    exit();
}
// Insert user into the database
$query = "INSERT INTO users (user_id, email, password) VALUES ('$user_id', '$email', '$password')";

if (mysqli_query($conn, $query)) {
    $response = array('message' => 'Registration successful');
    echo json_encode($response);
} else {
    $response = array('error' => 'Registration failed');
    echo json_encode($response);
}

// Close the database connection
mysqli_close($conn);
