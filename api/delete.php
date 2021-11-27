<?php
  require_once "config.php";

  if (isset($_POST)) {
    $first_name = $_POST['firstName'];
    $sql = "DELETE FROM student WHERE first_name = '$first_name'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_affected_rows($conn) > 0) {
      echo '<div class="status success">Record Deleted successfully</div>';
    } else {
      echo '<div class="status error">Operation failed</div>';
    }
  }
?>