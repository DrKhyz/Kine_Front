import moment from "moment";

import { getUuidSelector } from "../login/login.selectors";
import { getEvents } from "../../API/getEvents";
import { getSelectedDateSelector, getEventsSelector } from "./events.selector";

//TODO : test
export const formatedDateWithoutHours = date =>
  moment(date).format("YYYY MM DD");

// ACTIONS
export const REFRESH_EVENTS = "@events/REFRESH_EVENTS";
export const SHIFT_DATE = "@events/SHIFT_DATE";
export const UPDATE_SELECTED_DATE = "@events/UPDATE_SELECTED_DATE";

// ACTION CREATORS
export const refreshEvents = events => {
  return { type: REFRESH_EVENTS, events };
};

export function getEventsList() {
  return async (dispatch, getState) => {
    const store = getState();
    const userUuid = getUuidSelector(store);
    const events = await getEvents(userUuid);
    if (typeof events !== "undefined") {
      dispatch(refreshEvents(events));
    }
  };
}

export function updateSelectedDate(date) {
  return { type: UPDATE_SELECTED_DATE, date };
}

export function shiftDate(direction) {
  return (dispatch, getState) => {
    const store = getState();
    const events = getEventsSelector(store);
    const selectedDate = getSelectedDateSelector(store);
    // Creates an array containing (unique) sorted dates from events
    const sortedUniqueDates = [
      ...new Set(
        events.sort((a, b) => a.date - b.date).map(event => event.date)
      )
    ];
    if (direction === "left") {
      const filteredSortedDate = sortedUniqueDates.filter(
        date =>
          formatedDateWithoutHours(date) <
          formatedDateWithoutHours(selectedDate)
      );
      if (filteredSortedDate.length > 0) {
        const newDate = new Date(
          filteredSortedDate[filteredSortedDate.length - 1]
        );
        dispatch(updateSelectedDate(newDate));
      }
    } else if (direction === "right") {
      const filteredSortedDate = sortedUniqueDates.filter(
        date =>
          formatedDateWithoutHours(date) >
          formatedDateWithoutHours(selectedDate)
      );
      if (filteredSortedDate.length > 0) {
        const newDate = new Date(filteredSortedDate[0]);
        dispatch(updateSelectedDate(newDate));
      }
    }
  };
}
