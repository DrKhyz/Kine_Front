import { combineReducers } from "redux";
import Login from "./pills/login/login.reducer.js";
import Event from "./pills/event/event.reducer.js";
import Events from "./pills/events/events.reducer.js";

export default combineReducers({
  Login,
  Event,
  Events
});
