import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import EventsView from "./events.view";
import { getEventsList, formatedDateWithoutHours } from "./events.action";
import { getUuidSelector } from "../login/login.selectors";
import {
  getSelectedDateSelector,
  getEventsOrderByASCSelector
} from "./events.selector";

const EventsContainer = ({ selectedDate, events, userUuid, getEvents }) => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  useEffect(() => {
    const newFilteredEvents = events.filter(event => {
      const eventMoment = formatedDateWithoutHours(event.date);
      const selectedMoment = formatedDateWithoutHours(selectedDate);
      return eventMoment === selectedMoment;
    });
    setFilteredEvents(newFilteredEvents);
  }, [events, selectedDate]);

  useEffect(() => {
    getEvents();
  }, [userUuid, getEvents]);

  return (
    <div className="historyContainer">
      <EventsView events={filteredEvents} getEvents={getEvents} />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => dispatch(getEventsList())
  };
};

const mapStateToProps = state => ({
  selectedDate: getSelectedDateSelector(state),
  events: getEventsOrderByASCSelector(state),
  userUuid: getUuidSelector(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsContainer);
