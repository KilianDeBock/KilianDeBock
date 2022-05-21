import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="container split-view">
      <div className="next-to-each-other">
        <img
          className="max-width-2"
          src="/media/images/tiny-blob-2.svg"
          alt="Icon"
        />
        <p className="txt__title">Stualyttle Kirry</p>
      </div>
      <nav>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
