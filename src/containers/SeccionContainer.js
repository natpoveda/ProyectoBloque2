import React from "react";
import { connect } from "react-redux";
import { getSeccion } from "../actions";
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
    onGet: (id) => dispatch(getSeccion(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
