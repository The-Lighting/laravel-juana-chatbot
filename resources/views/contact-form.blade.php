<!DOCTYPE html>
<html>

<head>
    <title>Contact Us</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="{{ url('css/app.css') }}" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>

<body>

    <div class="container mx-auto mt-5">
        <div class="row ">
            <div class="">

                <h4>Make Contact with us</h4>
                <p>Have any question or feedback?(or requesting a callback?)</p>

                @if (Session::has('status'))
                    <div class="alert alert-success">{{ Session::get('status') }}</div>
                @endif

                <form action="" method="post">

                    {{ csrf_field() }}
                    <label for="name">Name</label>
                    <input class="form-control" type="text" name="name" placeholder="your name please" />

                    <label for="email">Email</label>
                    <input class="form-control" type="email" name="email" placeholder="your email address please" />

                    <label for="message">Message</label>
                    <textarea class="form-control" name="message" id="" placeholder="please provide us with all the detail regarding your query as we will be receiving this as an email" cols="30"
                        rows="10"></textarea>

                    <br><br>

                    <button class="btn btn-primary btn-block">Send</button>
                </form>
            </div>
        </div>
    </div>

</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</html>