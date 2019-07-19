export const UPDATE_DATE = "@event/UPDATE_DATE";
export const UPDATE_NATURE = "@event/UPDATE_NATURE";
export const UPDATE_KIND = "@event/UPDATE_KIND";
export const UPDATE_MEASURE = "@event/UPDATE_MEASURE";
export const UPDATE_CONTEXTS = "@event/UPDATE_CONTEXTS";
export const UPDATE_COMMENT = "@event/UPDATE_COMMENT";
export const RESET_EVENT = "@event/RESET_EVENT";

export const updateDate = date => {
  return { type: UPDATE_DATE, date };
};

export const updateNature = nature => {
  return { type: UPDATE_NATURE, nature };
};

export const updateKind = kind => {
  return { type: UPDATE_KIND, kind };
};

export const updateMeasure = measure => {
  return { type: UPDATE_MEASURE, measure };
};

export const updateContexts = contexts => {
  return { type: UPDATE_CONTEXTS, contexts };
};

export const updateComment = comment => {
  return { type: UPDATE_COMMENT, comment };
};

export const resetEvent = () => {
  return { type: RESET_EVENT };
};

export const getContexts = (valueContexts, checked) => {
  return (dispatch, getState) => {
    const contexts = getState().Event.contexts;
    if (checked === true) {
      contexts.push(valueContexts);
    } else if (checked === false) {
      const index = contexts.findIndex(i => i === valueContexts);
      if (index !== -1) {
        contexts.splice(index, 1);
      }
    }
    dispatch(updateContexts(contexts));
  };
};
