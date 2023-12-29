# Adding The /RequestACallback Route in the main JUSTNEXO Laravel Code.

## Description

this route is necessary to add the php mailer website which will be needed to send emails directly to the mail the user will type from the email of 'notify@justnexo.com' 

- Why did I build this project branch? 
- - this project contains the almost final code and a readme to fully complete its  implementation by adding a route including the half branch which contains the complete laravel code
  - Note: the main branch is basically broken currently
- What problem does it solve?
- - the user can request a callback from our side
- What did I learn?
- Literally anything you can ethically think of

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)

## Installation

These are the controller commands which need to be run at the root of the project. 
These commands are standard commands and these should run if there are no other problems with the main project itself

```console
foo@bar:~$ php artisan make:controller RequestACallbackController
```
Now add the following code in The newly created Controller method

```php
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
```

Now you need to define the Route in the routes/web.php just add the following code there
```
Route::get('/contact', [Contact::class, 'showContactForm']);
Route::post('/contact', [Contact::class, 'sendMail']);
```
This will generate the route and will handle sending the request and handling the frontend code too
But you will need to require the phpmailer library too for this to work so run the following command too in the root directory
```console
composer require phpmailer/phpmailer
```
All is done but you will need to create the view too so here is the code i generated for the same.
so creaet a new file in the resources/views named contact-form.blade.php
```blade.php
<!DOCTYPE html>
<html>

<head>
    <title>Contact Us</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>

<body>
    <main class="flex flex-col items-center justify-center p-10 bg-gray-100">
        <div
          class="border text-card-foreground w-3/5 max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
          data-v0-t="card"
        >
            <div class="flex flex-col space-y-1.5 bg-red-500 text-white p-6">
                <h2 class="text-2xl font-semibold">Contact Us</h2>
                <p class="text-white opacity-75">We're here to help and answer any questions you might have.</p>            
            </div>
            <div class="p-6 space-y-4">
                
                @if (Session::has('status'))
                    <div class="alert alert-success">{{ Session::get('status') }}</div>
                @endif

                <form action="" method="post">

                    {{ csrf_field() }}
                    <div class="space-y-2">
                        <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-red-500"
                          for="name"
                        >
                          Name
                        </label>
                        <input
                          class="form-control {{-- <- new --}} flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-red-500 focus:ring-red-500"
                          id="name"
                          name="name"   {{-- <- new --}}
                          type= "text"  {{-- <- new --}}
                          placeholder="Enter your name"
                          required=""
                        />
                    </div>
                    {{-- <label for="name">Name</label> --}}
                    {{-- <input class="form-control" type="text" name="name" placeholder="yo"/> --}}

                    <div class="space-y-2">
                        <label
                          class=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-red-500"
                          for="email"
                        >
                          Email
                        </label>
                        <input
                          class="form-control {{-- <- new --}}flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-red-500 focus:ring-red-500"
                          id="email"
                          name="email" {{-- <- new --}}
                          placeholder="Enter your email"
                          required=""
                          type="email"
                        />
                    </div>
                    {{-- <label for="email">Email</label> --}}
                    {{-- <input class="form-control" type="email" name="email" placeholder="your email address please" /> --}}

                    <div class="space-y-2">
                        <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-red-500"
                          for="message"
                        >
                          Message
                        </label>
                        <textarea
                          class="form-control {{-- <- new --}} flex w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px] border-red-500 focus:ring-red-500"
                          id="message"
                          name= "message" {{-- <- new --}}
                          placeholder="Enter your message. Including your Instructions for us (so we can prepare to contact you)"
                          required=""
                        ></textarea>
                    </div>
                    {{-- <label for="message">Message</label> --}}
                    {{-- <textarea class="form-control" name="message" id="" placeholder="please provide us with all the detail regarding your query as we will be receiving this as an email" cols="30" --}}
                        {{-- rows="10"></textarea> --}}

                    <br><br>
                    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-red-500 text-white hover:bg-red-700">
                        Submit
                    </button>

                    {{-- <button class="btn btn-primary btn-block">Send</button> --}}
                </form>
                
            </div>
        </div>
    </div>

</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</html>
```

## Usage

You will need to start the project and go to the /contact route or the one you configured

    ```md
    ![alt text](assets/images/screenshot.png)
    ```


---

🏆 

## Features

You are able to send Emails from the predetermined smtp email to anyone who types their emails in, in the frontend
