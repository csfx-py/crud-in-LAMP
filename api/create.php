<?php
  require_once "config.php";

  if (isset($_POST)) {
    $first_name = $_POST['firstName'];
    $last_name = $_POST['lastName'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $sql = "INSERT INTO student (first_name, last_name, address, email) VALUES ('$first_name', '$last_name', '$address', '$email')";
    $result = mysqli_query($conn, $sql);
    if ($result) {
      $id = mysqli_insert_id($conn);
      echo '<div class="status success">New record created successfully, ID: ' . $id . '</div>';
    } else {
      echo '<div class="status error">Operation failed</div>';
    }
  }
?>