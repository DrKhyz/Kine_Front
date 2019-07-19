import {
  UPDATE_DATE,
  UPDATE_NATURE,
  UPDATE_KIND,
  UPDATE_MEASURE,
  UPDATE_CONTEXTS,
  UPDATE_COMMENT,
  RESET_EVENT
} from "./event.action";

const initialState = {
  date: new Date(),
  kind: "",
  nature: "",
  measure: "",
  contexts: [],
  comment: ""
};

export default function event(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DATE:
      return { ...state, date: action.date };
    case UPDATE_NATURE:
      return { ...state, nature: action.nature };
    case UPDATE_KIND:
      return { ...state, kind: action.kind };
    case UPDATE_MEASURE:
      return { ...state, measure: action.measure };
    case UPDATE_CONTEXTS:
      return { ...state, contexts: [...action.contexts] };
    case UPDATE_COMMENT:
      return { ...state, comment: action.comment };
    case RESET_EVENT:
      return { ...initialState, contexts: [], date: new Date() };
    default:
      return state;
  }
}
