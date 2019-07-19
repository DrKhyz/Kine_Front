import { getTokenSelector } from "../pills/login/login.selectors";
import store from "../store";

export function getAPIconfig() {
  return {
    baseURL: "https://upday.herokuapp.com/",
    headers: {
      authorization: getTokenSelector(store.getState())
    }
  };
}
