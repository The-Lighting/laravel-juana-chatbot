<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- Your other head elements -->

    <script src="{{ asset('js/app.js') }}" defer></script>
</head>
<body class="antialiased">
    <!-- Button to open the chatbot -->
    <div id="hello-react"></div>
    <!-- Container for the chatbot component -->
    <div id="chatbot-App" class="fixed bottom-20 right-20 hidden">
    </div>

    
</body>
</html>
