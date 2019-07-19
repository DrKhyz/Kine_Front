import React from "react";
import PropTypes from "prop-types";

import "./Summary.scss";

const SummaryContextItem = ({ label, values }) => {
  return (
    <div className="summaryItems">
      <h2>{label}</h2>
      <ul>
        {values.length !== 0
          ? values.map((value, i) => (
              <li key={i}>
                {value}
                <br />
              </li>
            ))
          : "Aucun"}
      </ul>
    </div>
  );
};

SummaryContextItem.propTypes = {
  label: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SummaryContextItem;
