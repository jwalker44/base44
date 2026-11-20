<?php
require __DIR__ . '/../vendor/autoload.php'; // adjust path if your script is in a subfolder

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


$honeypot = $_GET['website'] ?? '';
if (!empty($honeypot)) {
    echo "❌ BOT suspected";
    return false;
}

$mail = new PHPMailer(true);


$type = $_GET['type'] ?? '';
$firstName = $_GET['first-name'] ?? '';
$lastName = $_GET['last-name'] ?? '';
$email = $_GET['email'] ?? null;
$project = $_GET['description'] ?? '';


if (is_null($email)) {
    return;
}

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.mail.yahoo.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'jwalker44@frontier.com';
    $mail->Password   = 'kqjzkxpljlreutpk'; // Not your main Yahoo password!
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // or use TLS if port 587
    $mail->Port       = 465;

    // Recipients
    $mail->setFrom('jwalker44@frontier.com', 'base44');
    $mail->addAddress($email, 'Test Test');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'base44 - REQUEST';
    $mail->Body    = '<h1>base44 - Request for Service - '. $type . '</h1><p>Request received via website form...</p><p><strong>First Name:</strong> ' . $firstName . '<br /><strong>Last Name:</strong> ' . $lastName . '<br /><strong>Email:</strong> ' . $email . '<br /><strong>Project:</strong> ' . $project . '</p>';
    $mail->AltBody = 'Request for Service from Website.\nFirst Name: ' . $firstName . '\nLast Name: ' . $lastName . '\nEmail: ' . $email . '\nProject: ' . $project;

    $mail->send();
    echo '✅ Email sent successfully!';
} catch (Exception $e) {
    echo "❌ Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
