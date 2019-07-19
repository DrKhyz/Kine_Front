import React from "react";
import PropTypes from "prop-types";

import "./OptionSelector.scss";

const OptionSelector = ({ options, onClick, activeOption, title, bold }) => {
  return (
    <div className="optionSelector">
      <h2>{title}</h2>
      <div className="btnGroup">
        {options.map((option, i) => {
          let styleButton = bold ? "btn volume" : "btn";
          if (activeOption === option) {
            styleButton = "btn selected";
          }
          return (
            <button
              className={styleButton}
              key={i}
              onClick={() => onClick(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

OptionSelector.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  bold: PropTypes.bool,
  activeOption: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default OptionSelector;
