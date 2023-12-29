<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class Contact extends Controller
{
    function showContactForm()
    {
        return view('contact-form');
    }

    function sendMail(Request $request)
    {

        $subject = "Contact from " . $request->input('name');
        $name = $request->input('name');
        $emailAddress = $request->input('email');
        $message = $request->input('message');

        $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
        try {
            // Server settings
            $mail->SMTPDebug = 0;                              // Enable verbose debug output
            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'smtp-mail.outlook.com';                       // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = 'notify@justnexo.com';          // SMTP username
            $mail->Password = 'Sat18520';                 // SMTP password
            $mail->SMTPSecure = 'TLS';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port = 587;                                    // TCP port to connect to

            // who sent the email
            $mail->setFrom("notify@justnexo.com", "Admin");

            // who will receive the email
            $request->validate([
                'email' => 'required|email',
            ]);
            $mail->addAddress($request->email, $name . ' ('.$request->email.')');     // Add a recipient
            // $mail->addAddress('ellen@example.com');                        // Name is optional

            // to whome will we reply the email
            $mail->addReplyTo($emailAddress, $name);

            // $mail->addCC('cc@example.com');
            // $mail->addBCC('bcc@example.com');

            //Attachments
            // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
            // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name


            //Content
            $mailContent = "
                <body>
                <center>
                    $message
                </center>
                </body>
            ";
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = $subject;
            $mail->Body    = $mailContent;
            $mail->AltBody = $mailContent;

            $mail->send();

            $request->session()->flash('status', 'Thank you, we have received your message');
            return view('contact-form');
        } catch (Exception $e) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        }
    }
}