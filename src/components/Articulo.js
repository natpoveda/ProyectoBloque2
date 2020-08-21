import React from "react";
import noimgfound from "../images/no-image-found.jpg";

const Articulo = (props) => {
  return (
    <div className="col s12 m4">
      <div className="card medium">
        <div className="card-image">
          <img
            src={props.img_url || noimgfound}
            width="380px"
            height="300px"
          ></img>
          <span className="card-title">{props.title}</span>
        </div>
        <div className="card-content">
          <h5 class="blue-text text-darken-4">
            <i class="material-icons left">track_changes</i> Fuente:{" "}
            {props.source}{" "}
          </h5>
        </div>
        <div className="card-action">
          <a
            class="waves-effect waves-light red lighten-1 btn"
            href={props.url}
            target="_blank"
          >
            <i class="material-icons left">chevron_right</i>Ver Más
          </a>
        </div>
      </div>
    </div>
  );
};

export default Articulo;
