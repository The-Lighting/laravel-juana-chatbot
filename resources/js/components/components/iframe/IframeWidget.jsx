import React from 'react';

const IframeWidget = (props) => {
  return (
    <iframe
      src={props.src}
      width={props.width}
      height={props.height}
      style={props.style}
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      webkitallowfullscreen
      mozallowfullscreen
      msallowfullscreen
    ></iframe>
  );
};

export default IframeWidget;
