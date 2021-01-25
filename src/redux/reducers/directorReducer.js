import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function directorReducer(
  state = initialState.directors,
  action
) {
  switch (action.type) {
    case types.CREATE_DIRECTOR_SUCCESS:
      return [...state, { ...action.savedDirector }];
    case types.UPDATE_DIRECTOR_SUCCESS:
      return state.map((savedDirector) =>
        savedDirector.id === action.savedDirector.id
          ? action.savedDirector
          : savedDirector
      );
    case types.LOAD_DIRECTORS_SUCCESS:
      return action.directors;
    default:
      return state;
  }
}
