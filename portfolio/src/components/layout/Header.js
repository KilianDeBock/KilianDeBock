import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <img
          className="max-width-2"
          src="/media/images/tiny-blob-2.svg"
          alt="Icon"
        />
        <p className="txt__title">Stualyttle Kirry</p>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
