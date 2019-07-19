//TODO : to test
export function manageError(error) {
  if (error.response !== undefined) {
    return error.response.data.statusCode;
  }
}
