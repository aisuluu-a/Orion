import "./header.scss";

function Header() {
  return (
    <header className="header">
      <div className="nav-menu">
        <nav className="nav">Menu</nav>
        <div className="logo">ORION</div>
      </div>
      <div className="contact-menu">
        <div className="links">Ссылки</div>
        <div className="contacts">Контакты</div>
      </div>
    </header>
  );
}

export default Header;
