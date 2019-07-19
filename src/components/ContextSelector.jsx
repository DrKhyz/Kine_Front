import React from "react";
import PropTypes from "prop-types";

import "./ContextSelector.scss";

const ContextSelector = ({ options, onChange, contexts, title }) => {
  return (
    <div className="context">
      <h2>{title}</h2>
      {options.map((option, i) => {
        return (
          <div className="allLine" key={i}>
            <label className="switch">
              <input
                type="checkbox"
                checked={contexts.includes(option)}
                onChange={e => onChange(option, e.target.checked)}
              />
              <span className="slider round" />
            </label>
            <span className="text">{option}</span>
          </div>
        );
      })}
    </div>
  );
};

ContextSelector.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  contexts: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
};

export default ContextSelector;
