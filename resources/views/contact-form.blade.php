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