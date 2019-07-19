import React from "react";
import PropTypes from "prop-types";

const EventButton = ({ text, onClick, backgroundColor }) => {
  // Component style
  const style = {
    button: {
      margin: "5px",
      borderRadius: "50px",
      backgroundSize: "cover",
      fontSize: "3em",
      color: "black",
      backgroundColor: backgroundColor
    }
  };

  // Render
  return (
    <button style={style.button} onClick={onClick}>
      {text}
    </button>
  );
};

EventButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default EventButton;
