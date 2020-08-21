import React from "react";
import { connect } from "react-redux";
import { getHome } from "../actions";
import Home from "../components/Home";

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
  return {
    onGet: () => dispatch(getHome()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
