<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Créez le corps de l'e-mail avec les informations récupérées
    $email_body = "Nom : $name\n";
    $email_body .= "E-mail : $email\n";
    $email_body .= "Sujet : $subject\n";
    $email_body .= "Message : $message\n";

    // Envoi de l'e-mail
    $to = 'penna.julien@gmail.com';
    $subject = 'CONTACT | julienpenna.com';
    $headers = "From: contact@julienpenna.com\r\n";
    mail($to, $subject, $email_body, $headers);

    header('Location: https://www.julienpenna.com');
    exit();
}
?>
