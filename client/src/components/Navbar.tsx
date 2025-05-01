import { useState } from "react";
import { NavLink } from "react-router";
import "../assets/styles/navbar.css";

import educnova from "../assets/images/EducNova.png";

function Navbar() {
  const [active, setActive] = useState(false);
  const ToggleMenu = () => {
    setActive(!active);
  };
  return (
    <>
      <nav>
        <div className="menu_burger" onMouseDown={ToggleMenu}>
          <span />
          <span />
          <span />
        </div>
        <img src={educnova} alt="Logo Educnova" className="educnova" />
        <div className={`sidenav ${active ? "active" : ""}`}>
          <button
            type="button"
            className="closeBtn"
            onClick={() => setActive(false)}
          >
            X
          </button>
          <ul>
            <li>
              <NavLink to="/Accueil">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/Etablissement">Etablissement</NavLink>
            </li>
            <li>
              <NavLink to="/Equipe_scolaire">Equipe scolaire</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/Calendrier_scolaire">Calendrier scolaire</NavLink>
            </li>
            <li>
              <NavLink to="/Programmes">Programmes</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
