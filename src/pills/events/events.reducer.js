import { REFRESH_EVENTS, UPDATE_SELECTED_DATE } from "./events.action";

const initialState = {
  events: [],
  selectedDate: new Date()
};

export default function Events(state = initialState, action) {
  switch (action.type) {
    case REFRESH_EVENTS:
      return { ...state, events: action.events };
    case UPDATE_SELECTED_DATE:
      return { ...state, selectedDate: action.date };
    default:
      return state;
  }
}
