// resources/js/components/HelloReact.js

// resources/js/components/HelloReact.js

const React = require('react');
const ReactDOM = require('react-dom');
const { jsx: _jsx } = require("react/jsx-runtime");

// Rest of your HelloReact.js code


function HelloReact() {
    return (
        <h1>NEXO Chatbot</h1>
    );
}

if (document.getElementById('hello-react')) {
    ReactDOM.render(<HelloReact />, document.getElementById('hello-react'));

}

module.exports = HelloReact;