export function getUuidSelector(state) {
  return state.Login.uuid;
}

export function getTokenSelector(state) {
  return state.Login.token;
}

export function getStatusCodeSelector(state) {
  return state.Login.statusCode;
}
