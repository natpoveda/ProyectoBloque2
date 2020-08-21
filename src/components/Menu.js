import React from "react";
import { Link } from "react-router-dom";
import SearchContainer from "../containers/SearchContainer";
import logo from "../images/logo.png";

export const secciones = [
  { id: "1", nombre: "Política", icon: "group" },
  { id: "2", nombre: "Internacionales", icon: "flight" },
  { id: "3", nombre: "Tecnología", icon: "desktop_mac" },
  { id: "4", nombre: "Espectáculos", icon: "grade" },
  { id: "5", nombre: "Deportes", icon: "golf_course" },
];

const Menu = () => {
  return (
    <nav className="nav-extended">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          <img src={logo} />
        </a>
        <SearchContainer />
      </div>
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <li className="tab">
            <Link key="home00" to="/">
              <div className="user user-name">
                <i class="material-icons left">home</i>Home
              </div>
            </Link>
          </li>
          {secciones.map((red) => {
            return (
              <li className="tab" key={red.id}>
                <Link key={red.id} to={`/secciones/${red.id}`}>
                  <div className="item-name">
                    <i class="material-icons left">{red.icon}</i>
                    {red.nombre}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
