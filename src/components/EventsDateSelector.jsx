import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import "moment/locale/fr";

import { shiftDate } from "../pills/events/events.action";
import { getSelectedDateSelector } from "../pills/events/events.selector";

const HistoryDateSelector = ({ shiftDate, selectedDate }) => {
  return (
    <div className="historyDateSelector">
      <div type="button" onClick={() => shiftDate("left")} className="btn">
        <FontAwesomeIcon icon={faCaretLeft} size="2x" />
      </div>
      {moment(selectedDate).format("dddd DD MMMM")}
      <div type="button" onClick={() => shiftDate("right")} className="btn">
        <FontAwesomeIcon icon={faCaretRight} size="2x" />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  selectedDate: getSelectedDateSelector(state)
});

const mapDispatchToProps = dispatch => ({
  shiftDate: direction => dispatch(shiftDate(direction))
});

HistoryDateSelector.propTypes = {
  shiftDate: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryDateSelector);
