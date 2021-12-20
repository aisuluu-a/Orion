import "./nav.scss";
import { Link } from "react-router-dom";

function Nav() {
  function menuSlider() {
    document.querySelector(".nav__menu-items").classList.toggle("menu-vision");
  }
  return (
    <div className="nav__menu-items">
      <Link className="subMenu" to="/main" onClick={menuSlider}>
        Главная
      </Link>
      <Link className="subMenu" to="/services" onClick={menuSlider}>
        Services
      </Link>
      <Link className="subMenu" to="/about" onClick={menuSlider}>
        About
      </Link>
    </div>
  );
}

export default Nav;
