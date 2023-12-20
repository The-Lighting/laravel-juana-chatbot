<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- Your other head elements -->

    <script src="{{ mix('js/app.js') }}" defer></script>
</head>

<style>
    body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #f0f0f0;
    }

    .chatbot-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #eb5959e9;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .chatbot-button:hover {
        cursor: help;
        background-color: #e5c4c4;
    }

    #chatbot-App {
        display: none;
        position: fixed;
        bottom: 70px;
        right: 20px;
        padding: 1px;
        background-color: #eed5d5;
        border: 1px solid #c4b3b3;
        border-radius: 5px;
    }
</style>

<body>
    <!-- Button to open the chatbot -->
    <div id="hello-react"></div>
    {{-- This is welcome.blade.php --}}
    <div id="chatbot-App"></div>
    <button class="chatbot-button" onclick="toggleChatbot()">Ask Inkie?</button>

    <script>
        function toggleChatbot() {
            var chatbotDiv = document.getElementById('chatbot-App');
            chatbotDiv.style.display = (chatbotDiv.style.display === 'block') ? 'none' : 'block';
        }
    </script>
</body>
</html>