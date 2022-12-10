import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.css";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <div className="nav-logo">
          <span>Logo</span>
        </div>
        <div className="menu-icon" onClick={toogleMenu}>
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={mobileMenu ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-links activated" : "nav-links"
              }
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "nav-links activated" : "nav-links"
              }
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "nav-links activated" : "nav-links"
              }
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
