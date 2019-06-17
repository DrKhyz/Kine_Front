const initialState = {
  date: new Date(),
  kind: "",
  measure: "",
  context: "Aucun",
  comment: ""
};

export default function event(state = initialState, action) {
  switch (action.type) {
    case "@event/UPDATE_DATE":
      return { ...state, date: action.date };
    case "@event/UPDATE_KIND":
      return { ...state, kind: action.kind };
    case "@event/UPDATE_MEASURE":
      return { ...state, measure: action.measure };
    case "@event/UPDATE_CONTEXT":
      return { ...state, context: action.context };
    case "@event/UPDATE_COMMENT":
      return { ...state, comment: action.comment };
    case "@event/RESET_EVENT":
      return initialState;
    default:
      return state;
  }
}