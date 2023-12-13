import React from 'react';
import ReactDOM from 'react-dom';
import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import config from './chatbot/Config';

function App() {
  return (
    <div className='App'>

{/* <div className="App-header">
          <ConditionallyRender
            ifTrue={showChatbot}
            show={
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            }
          />
        </div>

        <button
          className="app-chatbot-button"
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          <ButtonIcon className="app-chatbot-button-icon" />
        </button> */}
    
      
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
    </div>
  );
}

// Render the App component into the specified div
const chatbotContainer = document.getElementById('chatbot-App');
if (chatbotContainer) {
  ReactDOM.render(<App />, chatbotContainer);
}
