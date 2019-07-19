import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faCheckCircle
} from "@fortawesome/free-regular-svg-icons";

import "./TopBar.scss";

const TopBar = ({ title, leftButtonInfo, rightButtonInfo }) => {
  return (
    <div className="topBar">
      {leftButtonInfo.isVisible && (
        <div className="btn left" onClick={leftButtonInfo.onClick}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
        </div>
      )}
      <h1 className="title">{title}</h1>
      {rightButtonInfo.isVisible && rightButtonInfo.isActive ? (
        <div className="btn right isActive" onClick={rightButtonInfo.onClick}>
          <FontAwesomeIcon icon={faCheckCircle} size="2x" />
        </div>
      ) : rightButtonInfo.isVisible ? (
        <div className="btn right">
          <FontAwesomeIcon icon={faCheckCircle} size="2x" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

// PropTypes
TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  leftButtonInfo: PropTypes.shape({
    onClick: PropTypes.func,
    isVisible: PropTypes.bool.isRequired
  }),
  rightButtonInfo: PropTypes.shape({
    onClick: PropTypes.func,
    isVisible: PropTypes.bool.isRequired
  })
};

export default TopBar;
