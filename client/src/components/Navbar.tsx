import { NavLink } from "react-router";
import educnova from "../assets/images/EducNova.png";
import "../assets/styles/navbar.css";

function navbar() {
  return (
    <nav>
      <NavLink to="/Accueil">Accueil</NavLink>
      <NavLink to="/Etablissement">Etablissement</NavLink>
      <NavLink to="/Equipe scolaire">Equipe scolaire</NavLink>
      <NavLink to="/Calendrier scolaire">Calendrier scolaire</NavLink>
      <NavLink to="/Programmes">Programmes</NavLink>

      <img src={educnova} alt="Logo Educnova" className="educnova" />
    </nav>
  );
}

export default navbar;
