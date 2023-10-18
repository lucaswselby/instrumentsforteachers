<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Set the recipient email address
  $to = "lucaswselby@gmail.com";

  // Set the subject
  $subject = "New form submission from $name";

  // Compose the email message
  $messageBody = "Name: $name\n";
  $messageBody .= "Email: $email\n";
  $messageBody .= "Message: $message\n";

  // Send the email
  mail($to, $subject, $messageBody);

  // Redirect to a thank you page
  header("Location: index.html");
}
?>