import "./nav.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="nav__menu-items">
      <Link
        className="subMenu"
        to="/main"
        onClick={() => setOpenMenu(!openMenu)}
      >
        Главная
      </Link>
      <Link
        className="subMenu"
        to="/services"
        onClick={() => setOpenMenu(!openMenu)}
      >
        Services
      </Link>
      <Link
        className="subMenu"
        to="/about"
        onClick={() => setOpenMenu(!openMenu)}
      >
        About
      </Link>
    </div>
  );
}

export default Nav;
