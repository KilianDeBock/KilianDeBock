import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <a className="header__title" href="/">
        <img
          className="max-width-2"
          src="/media/images/tiny-blob-2.svg"
          alt="Icon"
        />
        <p className="txt__title">Stualyttle Kirry</p>
      </a>
      <Navigation />
    </header>
  );
};

export default Header;
