import { combineReducers } from "redux";
import * as actionsType from "../actions/actionsType";

const loadingError = (state = false, { type, payload }) => {
  switch (type) {
    case "LOADING_ERROR":
      return payload.hasErrored;
    default:
      return state;
  }
};

const loadingInProgress = (state = false, { type, payload }) => {
  switch (type) {
    case actionsType.LOADING_IN_PROGRESS:
      return payload.isLoading;
    default:
      return state;
  }
};

const nodos = (state = [], { type, payload }) => {
  console.log("state reducer", state);
  switch (type) {
    case actionsType.LOADING_SUCCESS_HOME: {
      console.log("ActionSUCCESS ", payload);
      return payload.items;
    }

    case "CLEAR_ALL":
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  nodos,
  loadingError,
  loadingInProgress,
});
