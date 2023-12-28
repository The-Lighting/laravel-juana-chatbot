import React from "react";

import "./Options.css";

const BaseOptions = (props) => {
  const options = [
    { text: "Courses we offer", handler: props.actionProvider.handleCourse, id: 1 },// handle game based learning // experiential learning // personal development
    { text: "Visit Store", handler: props.actionProvider.handleStore, id: 2 },
    { text: "Know our Instructors", handler: props.actionProvider.handleInstructor, id: 3 },
    { text: "Verify Certificate?", handler: props.actionProvider.handleCertificate, id: 4 },
    { text: "Contact us or Know More", handler: props.actionProvider.handlecontactus, id:5 },
    { text: "Where did all this start ?",handler: props.actionProvider.handleJuanaNexo, id:6 }
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

export default BaseOptions;

