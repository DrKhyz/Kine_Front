import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

import { loadState, saveState } from "./localstorage";

const peristantState = loadState();

let store = createStore(
  reducer,
  peristantState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : a => a
  )
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
