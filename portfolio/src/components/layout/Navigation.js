import { useLocation } from "react-router-dom";
import { useRef } from "react";

const Navigation = () => {
  const { pathname } = useLocation();

  const isActive = (location) => {
    return location === pathname ? "main-nav__item active" : "main-nav__item";
  };

  const menu = useRef(null);

  const handleHamburgerClick = (e) => {
    menu.current.classList.toggle("active");
  };

  return (
    <nav className="main-nav">
      <div ref={menu} className="main-nav__menu">
        <ul className="main-nav__items">
          <li>
            <a className={isActive("/")} href="/">
              Home
            </a>
          </li>
          <li>
            <a className={isActive("/about")} href="/about">
              About
            </a>
          </li>
          <li>
            <a className={isActive("/portfolio")} href="/portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className={isActive("/contact")} href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="main-nav__brother"></div>
      <button
        onClick={(e) => handleHamburgerClick(e)}
        className="main-nav__hamburger"
      ></button>
    </nav>
  );
};

export default Navigation;
