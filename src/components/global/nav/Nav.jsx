import "./nav.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Nav() {
  function menuSlider() {
    document.querySelector(".nav__menu-items").classList.toggle("menu-vision");
  }
  return (
    <div className="nav__menu-items">
      <HashLink className="subMenu" to="#main" onClick={menuSlider}>
        Главная
      </HashLink>
      <HashLink className="subMenu" to="#services" onClick={menuSlider}>
        Services
      </HashLink>
      <HashLink className="subMenu" to="#contacts" onClick={menuSlider}>
        Contacts
      </HashLink>
      <HashLink className="subMenu" to="#about" onClick={menuSlider}>
        About
      </HashLink>
    </div>
  );
}

export default Nav;
