import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/directors/";

export function getDirectors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveDirector(director) {
  return fetch(baseUrl + (director.id || ""), {
    method: director.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(director),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteDirector(directorId) {
  return fetch(baseUrl + directorId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
