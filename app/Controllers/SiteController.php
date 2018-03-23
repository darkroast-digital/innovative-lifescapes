<?php

namespace App\Controllers;

use App\Controllers\Controller;
use PHPMailer\PHPMailer\PHPMailer;

class SiteController extends Controller
{
    public function about($request, $response, $args)
    {
        $team = json_decode(file_get_contents('resources/content/team.json'));

        return $this->view->render($response, 'about.twig', compact('team'));
    }

    public function careers($request, $response, $args)
    {
        return $this->view->render($response, 'careers.twig');
    }

    public function resumeSubmit($request, $response, $args)
    {
        $mail = new PHPMailer;
        $email = $_POST['email'];
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $resume = $_FILES['resume'];

        $subject = 'New resume from ' . $name;

        $mail->setFrom($email, $name);
        $mail->addAddress('info@innovativelifescapes.com', 'Innovative Lifescapes');
        $mail->addReplyTo('info@innovativelifescapes.com', 'Innovative Lifescapes');
        $mail->ReturnPath='info@innovativelifescapes.com';

        $mail->isHTML(true);
        $mail->AddAttachment($resume['tmp_name'], $resume['name']);

        $body = '<p>There has been a new application from the Innovative Lifescapes website:</p>' .
                '<p>Name: ' . $name . '<br/>' .
                'Email: ' . $email . '<br/>' .
                'Phone: ' . $phone . '</p>' . 
                '<p>' . $name . '\'s resume has been attached to this email.</p>';

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

    public function contact($request, $response, $args)
    {
        return $this->view->render($response, 'contact.twig');
    }

    public function contactSubmit($request, $response, $args)
    {
        $mail = new PHPMailer;
        $email = $_POST['email'];
        $name = $_POST['name'];
        $message = $_POST['message'];

        $subject = 'New message from ' . $name . ' through Innovative Lifescapes\' contact form';

        $mail->setFrom($email, $name);
        $mail->addAddress('info@innovativelifescapes.com', 'Innovative Lifescapes');
        $mail->addReplyTo('info@innovativelifescapes.com', 'Innovative Lifescapes');
        $mail->ReturnPath='info@innovativelifescapes.com';

        $mail->isHTML(true);

        $body = '<p>You have received a new message from the Innovative Lifescapes website:</p>' .
                '<p>Name: ' . $name . '<br/>' .
                'Email: ' . $email . '<br/>' .
                'Message: ' . $message . '</p>';

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

    public function faqs($request, $response, $args)
    {
        return $this->view->render($response, 'faqs.twig');
    }

    public function models($request, $response, $args)
    {
        return $this->view->render($response, 'models.twig');
    }

    public function partners($request, $response, $args)
    {
        $partners = json_decode(file_get_contents('resources/content/partners.json'));
        
        return $this->view->render($response, 'partners.twig', compact('partners'));
    }

    public function photos($request, $response, $args)
    {
        $gallery = json_decode(file_get_contents('resources/content/gallery.json'));

        return $this->view->render($response, 'photos.twig', compact('gallery'));
    }

    public function privacyPolicy($request, $response, $args)
    {
        return $this->view->render($response, 'privacy-policy.twig');
    }
}

