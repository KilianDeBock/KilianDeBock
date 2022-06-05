import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link className="header__title" to="/">
        <img
          className="max-width-2"
          src="/media/images/tiny-blob-2.svg"
          alt="Icon"
        />
        <p className="txt__title">Stualyttle Kirry</p>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
