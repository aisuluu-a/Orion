import "./header.scss";
import { Link } from "react-router-dom";
import menuImg from "../global-img/menu.svg";
import logo from "../global-img/logo.svg";
import youtubeLogo from "../global-img/youtube.svg";
import facebookLogo from "../global-img/facebook.svg";
import telegramLogo from "../global-img/telegram.svg";

import Nav from "../nav/Nav";

function Header() {
  function menuSlider() {
    document.querySelector(".nav__menu-items").classList.toggle("menu-vision");
  }

  return (
    <header className="header">
      <div className="nav">
        <nav className="nav__menu" onClick={menuSlider}>
          <img src={menuImg} alt="Menu" />
        </nav>
        <Nav />
        <div className="logo">
          <a href="/">
            <img className="logo-img" src={logo} alt="Logo" />
          </a>
        </div>
      </div>
      <div className="contact-menu">
        <ul className="social-links">
          <a href="/">
            <li className="social-items">
              <img src={youtubeLogo} alt="youtubeLogo" />
            </li>
          </a>

          <a href="/">
            <li className="social-items">
              <img src={facebookLogo} alt="facebookLogo" />
            </li>
          </a>

          <a href="/">
            <li className="social-items">
              <img src={telegramLogo} alt="telegramLogo" />
            </li>
          </a>
        </ul>
        <div className="contacts">
          <a href="tel:+996312000000">+996 312 000 000</a>
        </div>
      </div>
      <nav className="nav__menu" onClick={menuSlider}>
        <img src={menuImg} alt="Menu" />
      </nav>
    </header>
  );
}

export default Header;
