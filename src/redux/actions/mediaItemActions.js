import * as types from "./actionTypes";
import * as mediaItemApi from "../../api/mediaItemApi";
import { beginApiCall } from "./apiStatusActions";

export function loadMediaItems() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return mediaItemApi
      .getMediaItems()
      .then((mediaItems) => {
        dispatch({ type: types.LOAD_MEDIA_ITEMS_SUCCESS, mediaItems });
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveMediaItem(mediaItem) {
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return mediaItemApi
      .saveMediaItem(mediaItem)
      .then((savedMediaItem) => {
        mediaItem.id
          ? dispatch({ type: types.UPDATE_MEDIA_ITEM_SUCCESS, savedMediaItem })
          : dispatch({ type: types.CREATE_MEDIA_ITEM_SUCCESS, savedMediaItem });
      })
      .catch((error) => {
        throw error;
      });
  };
}
