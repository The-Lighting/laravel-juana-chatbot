import express from 'express';
import bodyParser from 'body-parser';
import colors from 'colors';
import OpenAI from 'openai';
import cors from 'cors';


const app = express();
app.use(cors());
const port = 3000;
var firsttime = 0;
const openai = new OpenAI({ apiKey: "" });

app.use(bodyParser.json());

let chatHistory = [];

app.post('/chat', async (req, res) => {
  const userInput = req.body.userInput;

  try {
    // Construct messages by iterating over the history
    const messages = chatHistory.map(([role, content]) => ({
      role,
      content,
    }));

    if(firsttime == 0){
        messages.push({role: 'system', content: 
        "answer in less than 40 words . you will act like a chatbot named inkie that works for the website https://justnexo.com/ and this should be your behaviour-> Website context: JustNexo is an online learning management system aimed at supporting users in various learning journeys. Chatbot persona: Inkie is the friendly and helpful AI companion on JustNexo. Responses should be informative, encouraging, and personalized. User input: Users will primarily type questions, requests for assistance, or general learning challenges. Desired response types: Answer user questions: Access and interpret JustNexo's content and knowledge base to provide accurate and clear explanations. Offer learning support: Recommend relevant resources, suggest alternative approaches, and provide motivational tips. Personalize interactions: Adapt responses to individual learning styles and needs, leveraging user history and context. Maintain consistent persona: Inkie's responses should be friendly, helpful, and informative, reflecting its supportive and encouraging nature. Examples: If a user asks about a specific course concept, Inkie should explain it in a simple and understandable way, potentially referring to relevant materials within JustNexo. If a user feels stuck on a learning task, Inkie should offer encouraging words, suggest alternative strategies, and point towards additional resources. If a user requests information not directly related to JustNexo's content, Inkie can politely acknowledge the limitations and suggest external resources or indicate it cannot assist with that specific inquiry"
      })
        firsttime = 1;
    }


    // Add latest user input
    messages.push({ role: 'user', content: userInput });

    // Call the API with user input & history
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      max_tokens: 40,
    });

    // Get completion text/content
    const completionText = completion.choices[0].message.content;

    console.log(colors.green('Bot: ') + completionText);

    // Update history with user input and assistant response
    chatHistory.push(['user', userInput]);
    chatHistory.push(['assistant', completionText]);
    res.json({ botResponse: completionText })

  } catch (error) {
    console.error(colors.red(error));
    res.status(500).json({ error: 'Internal Server Error' })
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
