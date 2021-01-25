import * as types from "./actionTypes";
import * as directorApi from "../../api/directorApi";
import { beginApiCall } from "./apiStatusActions";

export function loadDirectors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return directorApi
      .getDirectors()
      .then((directors) => {
        dispatch({ type: types.LOAD_DIRECTORS_SUCCESS, directors });
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveDirector(director) {
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return directorApi
      .saveDirector(director)
      .then((savedDirector) => {
        director.id
          ? dispatch({ type: types.UPDATE_DIRECTOR_SUCCESS, savedDirector })
          : dispatch({ type: types.CREATE_DIRECTOR_SUCCESS, savedDirector });
      })
      .catch((error) => {
        throw error;
      });
  };
}
