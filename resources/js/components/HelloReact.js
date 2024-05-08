// resources/js/components/HelloReact.js

// resources/js/components/HelloReact.js

const React = require('react');
const { useState, useEffect } = require('react');
const ReactDOM = require('react-dom');
const { jsx: _jsx } = require("react/jsx-runtime");

// Rest of your HelloReact.js code

function HelloReact() {
    const [showChatbot, setShowChatbot] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const chatbotDiv = document.getElementById('chatbot-App');
            if (chatbotDiv) {
                chatbotDiv.style.display = 'block';
            }
            setShowChatbot(true);
        }, 10000);

        // Clear the timer if the component unmounts or when showChatbot is true
        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div>
            <h1>NEXO Chatbot</h1>
            {showChatbot && <div id="chatbot-App">Chatbot Content</div>}
        </div>
    );
}

if (document.getElementById('hello-react')) {
    ReactDOM.render(<HelloReact />, document.getElementById('hello-react'));
}

module.exports = HelloReact;