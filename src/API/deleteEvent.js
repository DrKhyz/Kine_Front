import axios from "axios";

import { getAPIconfig } from "./axiosConfig";
import { manageError } from "./manageErrors";

export function deleteEvent(id) {
  const { baseURL, headers } = getAPIconfig();

  const config = {
    method: "DELETE",
    baseURL,
    url: `events/${id}`,
    headers
  };

  return axios.request(config).catch(error => {
    return manageError(error);
  });
}
