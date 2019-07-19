import React from "react";
import PropTypes from "prop-types";

const EventRow = ({ date, type, nature, volume, contexts, comment }) => {
  return (
    <div className="eventRow">
      <div className="eventTime">{date}</div>
      <div className="eventNature">{nature}</div>
      <div className="eventVolume">{volume}</div>
      <div className="rowDetails">
        <div className="eventType">{type}</div>
        <ul className="eventContext">
          {contexts
            ? contexts.map((contextItem, index) => (
                <li key={index}>{contextItem}</li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

EventRow.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  nature: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  contexts: PropTypes.arrayOf(PropTypes.string),
  comment: PropTypes.string
};

export default EventRow;
