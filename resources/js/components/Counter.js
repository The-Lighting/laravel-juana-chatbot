// resources/js/components/Counter.js

const React = require('react');
const { useState } = require('react');
const ReactDOM = require('react-dom');

function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    React.createElement('div', null,
      React.createElement('button', { onClick: handleDecrement }, '-'),
      React.createElement('span', null, ' ', count, ' '),
      React.createElement('button', { onClick: handleIncrement }, '+')
    )
  );
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Counter;
}

if (document.getElementById('counter')) {
  ReactDOM.render(React.createElement(Counter, null), document.getElementById('counter'));
}
