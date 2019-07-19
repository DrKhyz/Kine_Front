import axios from "axios";

import { getAPIconfig } from "./axiosConfig";
import { manageError } from "./manageErrors";

const dataSelection = response => response.data;

const dataNormalization = events => {
  let normalizedData = events.map(event => {
    let id = event.id;
    let date = new Date(event.date);
    let type = event.type;
    let nature = event.nature;
    let volume = event.volume;
    let contexts = event.context;
    let comment = event.comment;

    return {
      id,
      date,
      type,
      nature,
      volume,
      contexts,
      comment
    };
  });
  return normalizedData;
};

export function getEvents(userUuid) {
  const { baseURL, headers } = getAPIconfig();

  const config = {
    method: "get",
    baseURL,
    url: `events`,
    headers
  };

  return axios
    .request(config)
    .then(response => {
      return dataSelection(response);
    })
    .then(events => dataNormalization(events))
    .catch(error => {
      return manageError(error);
    });
}
