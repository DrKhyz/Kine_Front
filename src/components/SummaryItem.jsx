import React from "react";
import PropTypes from "prop-types";
import "./Summary.scss";

const SummaryItem = ({ label, value, bold }) => {
  let stylePlus = bold ? "stylePlus" : "";
  return (
    <div className="summaryItems">
      <h2>{label}</h2>
      <p className={stylePlus}>{value}</p>
    </div>
  );
};

SummaryItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default SummaryItem;
