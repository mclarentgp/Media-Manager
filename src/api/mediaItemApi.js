import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/mediaItems/";

export function getMediaItems() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveMediaItem(mediaItem) {
  return fetch(baseUrl + (mediaItem.id || ""), {
    method: mediaItem.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(mediaItem),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteMediaItem(mediaItemId) {
  return fetch(baseUrl + mediaItemId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
