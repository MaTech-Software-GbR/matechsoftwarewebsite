<?php
session_start();

$siteOwnersEmail = 'kontakt@matech-software.de';
$error = array();

// Generate a CSRF token and store it in the session
if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = base64_encode(openssl_random_pseudo_bytes(32));
}

if ($_POST) {
    // Check CSRF token
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        die('Invalid CSRF token');
    }

    // Regenerate CSRF token
    $_SESSION['csrf_token'] = base64_encode(openssl_random_pseudo_bytes(32));

    $name = trim(stripslashes(htmlspecialchars($_POST['contactName'])));
    $email = trim(stripslashes(htmlspecialchars($_POST['contactEmail'])));
    $subject = trim(stripslashes(htmlspecialchars($_POST['contactSubject'])));
    $contact_message = trim(stripslashes(htmlspecialchars($_POST['contactMessage'])));

    // Check Name
    if (strlen($name) < 2) {
        $error['name'] = "Bitte geben Sie hier Ihren Namen ein.";
    }
    // Check Email
    // if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    //     $error['email'] = "Bitte geben Sie eine valide E-Mail Adresse ein.";
    // }
    // Check Message
    if (strlen($contact_message) < 15) {
        $error['message'] = "Bitte geben Sie hier Ihre Nachricht ein. 
        Sie sollte mindestens 15 Zeichen beinhalten.";
    }
    // Subject
    if ($subject == '') {
        $subject = "Contact Form Submission";
    }


    // Set Message
    $message = "Email from: " . $name . "<br />";
    $message .= "Email address: " . $email . "<br />";
    $message .= "Message: <br />";
    $message .= $contact_message;
    $message .= "<br /> ----- <br /> This email was sent from https://matech-software.de contact form. <br />";

    // Set From: header
    $from =  $name . " <" . $siteOwnersEmail . ">";

    // Email Headers
    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $siteOwnersEmail . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    if (!$error) {
        ini_set("sendmail_from", $siteOwnersEmail);
        $mail = mail($siteOwnersEmail, $subject, $message, $headers);

        if ($mail) {
            echo "OK";
        } else {
            echo "Das hat nicht funktioniert. Bitte versuchen Sie es erneut.";
        }
    } else {
        $response = (isset($error['name'])) ? $error['name'] . "<br /> \n" : null;
        $response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
        $response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;
        echo $response;
    }
}
