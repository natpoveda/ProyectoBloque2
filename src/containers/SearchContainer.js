import React from "react";
import { connect } from "react-redux";
import { getSearch } from "../actions";
import Search from "../components/Search";

console.log("getSeacrh", getSearch);

const mapStateToProps = (state, ownProps) => {
  console.log("stateHome", state);
  return {
    nodos: state.nodos,
    hasError: state.loadingError,
    isLoading: state.loadingInProgress,
    oProps: ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  const input = "";
  return {
    onGet: (input) => dispatch(getSearch(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
