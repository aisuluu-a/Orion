import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="nav-menu">
        <nav className="nav">
          MENU
          <Link to="/main">Main</Link>
          <Link to="/services">Services</Link>
        </nav>
        <div className="logo">ORION</div>
      </div>
      <div className="contact-menu">
        <div className="links">Links</div>
        <div className="contacts">Контакты</div>
      </div>
    </header>
  );
}

export default Header;
