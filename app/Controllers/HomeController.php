<?php

namespace App\Controllers;

use App\Controllers\Controller;
use PHPMailer\PHPMailer\PHPMailer;


class HomeController extends Controller
{
    public function index($request, $response, $args)
    {

        return $this->view->render($response, 'home.twig');
    }

    public function newsletter($request, $response, $args)
    {
        $mail = new PHPMailer;
        $email = $_POST['email'];
        $subject = 'New newsletter sign-up: ' . $email;

        $mail->setFrom($email);
        $mail->addAddress('info@innovativelifescapes.com', 'Innovative Lifescapes');
        $mail->addReplyTo('info@innovativelifescapes.com', 'Innovative Lifescapes');
        $mail->ReturnPath='info@innovativelifescapes.com';

        $mail->isHTML(true);

        $body = 'There has been a new newsletter signup. ' . $email . ' would like to be added to the subscription list.';

        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->AltBody = $body;

        if(!$mail->send()) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            echo 'Success!';
        }

    }
}
