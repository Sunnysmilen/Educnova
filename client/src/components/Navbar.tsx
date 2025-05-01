import educnova from "../assets/images/EducNova.png";
import "../assets/styles/navbar.css";

function navbar() {
  return (
    <nav>
      <img src={educnova} alt="Logo Educnova" className="educnova" />
    </nav>
  );
}

export default navbar;
