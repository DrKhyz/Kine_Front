export const getSelectedDateSelector = store => store.Events.selectedDate;

export const getEventsSelector = store => store.Events.events;

//TODO : to test
export const getEventsOrderByASCSelector = store =>
  getEventsSelector(store).reverse();
