import React from "react";

import "./option.css";

const SingleOptionWithLink = (props) => {
  const options = props.option;

  const optionsMarkup = options.map((option) => (
    <button
      className="option-button"
      key={option.id}
      onclick="location.href='{option.url}.html';"
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default SingleOptionWithLink;

