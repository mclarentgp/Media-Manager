import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function mediaItemReducer(
  state = initialState.mediaItems,
  action
) {
  switch (action.type) {
    case types.CREATE_MEDIA_ITEM_SUCCESS:
      return [...state, { ...action.savedMediaItem }];
    case types.UPDATE_MEDIA_ITEM_SUCCESS:
      return state.map((savedMediaItem) =>
        savedMediaItem.id === action.savedMediaItem.id
          ? action.savedMediaItem
          : savedMediaItem
      );
    case types.LOAD_MEDIA_ITEMS_SUCCESS:
      return action.mediaItems;
    default:
      return state;
  }
}
