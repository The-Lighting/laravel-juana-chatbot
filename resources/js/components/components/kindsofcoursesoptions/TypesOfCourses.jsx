import React from "react";

import "../baseOptions/Options.css";

const MoreCourseOptions = (props) => {
  const options = [
    { text: "Game Based Learning", handler: props.actionProvider.handlegamebasedlearning, id: 1 },// handle game based learning // experiential learning // personal development
    { text: "Experiential Learing", handler: props.actionProvider.handlexperientiallearning, id: 3 },
    { text: "Personal Development", handler: props.actionProvider.handlepersonaldevelopment, id: 4 },
   
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default MoreCourseOptions;

