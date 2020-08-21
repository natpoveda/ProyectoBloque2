import React from "react";
import PropTypes from "prop-types";

const Search = ({ nodos, hasError, isLoading, onGet }) => {
  console.log("onGet", onGet);
  let _input;

  
  return (
    <div className="continput">
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => onGet(_input.value)}
              >
                Buscar
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Agrega una palabra"
              aria-label=""
              aria-describedby="basic-addon1"
              defaultValue=" "
              ref={(node) => (_input = node )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("stateHome", state);
  return {
    nodos: state.nodos,
    hasError: state.loadingError,
    isLoading: state.loadingInProgress,
  };
};

Search.propTypes = {
  onGet: PropTypes.func,
};

export default Search;
