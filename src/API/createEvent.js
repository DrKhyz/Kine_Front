import axios from "axios";

import { getAPIconfig } from "./axiosConfig";
import { manageError } from "./manageErrors";

export function createEvent(date, nature, kind, measure, context, comment) {
  const body = {
    date,
    nature,
    type: kind,
    volume: measure
  };
  if (context.length !== 0) {
    body.context = context;
  }
  if (comment) {
    body.comment = comment;
  }

  const { baseURL, headers } = getAPIconfig();

  const config = {
    method: "POST",
    baseURL,
    url: "/events",
    headers,
    data: body
  };

  return axios.request(config).catch(error => {
    return manageError(error);
  });
}
