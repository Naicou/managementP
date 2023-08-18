 <?php

    require_once 'connection.php'; // Include the database connection file


    $servername = 'localhost'; // Replace with your database server name
    $username = 'root'; // Replace with your database username
    $password = ''; // Replace with your database password
    $dbname = 'managementp'; // Replace with your database name



    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (!$conn) {
        die('Connection failed: ' . mysqli_connect_error());
    }

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
