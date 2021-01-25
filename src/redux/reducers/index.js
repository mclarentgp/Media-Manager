import { combineReducers } from "redux";
import mediaItems from "./mediaItemReducer";
import directors from "./directorReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  mediaItems,
  directors,
  apiCallsInProgress,
});

export default rootReducer;
