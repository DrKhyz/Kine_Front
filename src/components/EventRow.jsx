import React from "react";
import PropTypes from "prop-types";
import styles from "./EventRow.module.css";

const EventRow = ({ date, type, nature, volume, context, comment }) => {
  return (
    <div className={styles.main}>
      <div className={styles.time}>{date}</div>
      <div className={styles.info}>
        {type} - {nature}
        <br /> {context}
      </div>
      <div className={styles.volume}>{volume}</div>
    </div>
  );
};

EventRow.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  type: PropTypes.string.isRequired,
  nature: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  context: PropTypes.string,
  comment: PropTypes.string
};

export default EventRow;
