import "./nav.scss";
import { Link } from "react-router-dom";

function Nav() {
  function menuSlider() {
    document.querySelector(".nav__menu-items").classList.toggle("menu-vision");
  }
  return (
    <div className="nav__menu-items">
      <Link to="/main" onClick={menuSlider}>
        Main
      </Link>
      <Link to="/services" onClick={menuSlider}>
        Services
      </Link>
    </div>
  );
}

export default Nav;
