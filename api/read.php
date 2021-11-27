<?php
    require_once "config.php";
    
    $sql = "SELECT * FROM student";
    $result = mysqli_query($conn, $sql);
    $students = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($students);
?>