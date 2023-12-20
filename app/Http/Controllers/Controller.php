<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;// new
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
//     public function fetchChatbotApp(Request $request)//new
// {
//     // Get chatbot content (dynamically generated or from storage)
//     $chatbotContent = 'chatbot-App'; // Replace with your logic

//     return response()->json([
//         'content' => $chatbotContent,
//     ]);
// }
}
