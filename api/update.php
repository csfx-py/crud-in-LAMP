<?php
  require_once "config.php";

  if (isset($_POST)) {
    $id = $_POST['Id'];
    $first_name = $_POST['firstName'];
    $last_name = $_POST['lastName'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $sql = "UPDATE student SET first_name = '$first_name', last_name = '$last_name', address = '$address', email = '$email' WHERE id = $id";
    $result = mysqli_query($conn, $sql);
    if (mysqli_affected_rows($conn) > 0) {
      echo '<div class="status success">Record Updated successfully</div>';
    } else {
      echo '<div class="status error">Operation failed</div>';
    }
  }
?>