import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const Navigation = () => {
  const { pathname } = useLocation();

  const isActive = (location) => {
    return location === pathname ? "main-nav__item active" : "main-nav__item";
  };

  const navigation = useRef(null);
  const navigationContainer = useRef(null);

  const changeHamburger = () => {
    navigation.current.classList.toggle("active");
    navigationContainer.current.classList.toggle("active");
  };

  const closeHamburger = () => {
    navigation.current.classList.remove("active");
    navigationContainer.current.classList.remove("active");
  };

  useEffect(closeHamburger, [pathname]);

  return (
    <div ref={navigationContainer} className="main-nav">
      <div onClick={closeHamburger} className="main-nav__quit-box"></div>
      <nav ref={navigation} className="main-nav__nav">
        <div className="main-nav__menu">
          <ul className="main-nav__items">
            <li>
              <Link className={isActive("/")} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={isActive("/about")} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={isActive("/portfolio")} to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className={isActive("/contact")} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={changeHamburger}
          className="main-nav__hamburger"
        ></button>
      </nav>
    </div>
  );
};

export default Navigation;
