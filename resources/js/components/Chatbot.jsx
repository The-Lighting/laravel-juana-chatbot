import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import config from './chatbot/Config';

// import 'Chatbot.css';

function App() {
  const [showChatbot, toggleChatbot] = useState(true);
  return (
    <div className='App'>

<div className="App-header">
          
            
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            
          
        </div>

        
          {/* <ButtonIcon className="app-chatbot-button-icon" /> */}
        
      {/* <div className="app-chatbot-container">
        {showChatbot && (
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        )}
      </div>

      <button
        className="app-chatbot-button"
        onClick={() => toggleChatbot(prev => !prev)}
      >
        Toggle Chatbot
      </button> */}
    </div>
  );
}

// Render the App component into the specified div
const chatbotContainer = document.getElementById('chatbot-App');
if (chatbotContainer) {
  ReactDOM.render(<App />, chatbotContainer);
}
