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
  function secondMenuSlider() {
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
        <div className="social-links">
          <a href="/">
            <div className="social-items">
              <img src={youtubeLogo} alt="youtubeLogo" />
            </div>
          </a>

          <a href="/">
            <div className="social-items">
              <img src={facebookLogo} alt="facebookLogo" />
            </div>
          </a>

          <a href="/">
            <div className="social-items">
              <img src={telegramLogo} alt="telegramLogo" />
            </div>
          </a>
        </div>
        <div className="contacts">
          <a href="tel:+996312000000">+996 312 000 000</a>
        </div>
      </div>
      <nav className="second__menu" onClick={secondMenuSlider}></nav>
    </header>
  );
}

export default Header;
