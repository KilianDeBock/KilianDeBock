import { useLocation } from "react-router-dom";

const Navigation = () => {
  const { pathname } = useLocation();

  const isActive = (location) => {
    return location === pathname ? "active" : "";
  };

  return (
    <nav>
      <ul>
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
          <a className={isActive("/contact")} href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
