const HomePage = () => {
  const hookL = "{";
  const hookR = "}";
  return (
    <>
      <section className="split-view">
        <div className="split-view un-growable flex-start">
          <div>
            <img
              className="max-width-7"
              src="/media/images/tiny-blob-1.svg"
              alt="Icon"
            />
            <img
              className="max-width-5"
              src="/media/images/tiny-blob-2.svg"
              alt="Icon"
            />
          </div>
          <div className="split-view__align-left">
            <img
              className="max-width-18"
              src="/media/images/memoji.png"
              alt="Icon"
            />
          </div>
        </div>
        <div className="margin-top-10">
          <h1>Heye,</h1>
          <h2>Hello there!</h2>
          <article className="code">
            <div className="code__line">
              <span className="code__variable">Person</span> {hookL}
            </div>
            <div className="code__line code__tab-1">
              <span className="code__key">firstName</span>:{" "}
              <span className="code__value">Kilian</span>,
            </div>
            <div className="code__line code__tab-1">
              <span className="code__key">lastName</span>:{" "}
              <span className="code__value">De Bock</span>
            </div>
            <div className="code__line">{hookR}</div>
          </article>
          <article className="code margin-left-5">
            <div className="code__line">
              <span className="code__variable">MetaData</span> {hookL}
            </div>
            <div className="code__line code__tab-1">
              <span className="code__key">profession</span>:{" "}
              <span className="code__value"> Fullstack Developer</span>,
            </div>
            <div className="code__line code__tab-1">
              <span className="code__key">markup</span>: {hookL}{" "}
              <span className="code__value">HTML</span>,{" "}
              <span className="code__value">CSS</span>,{" "}
              <span className="code__value">JS</span>,{" "}
              <span className="code__value">TS</span> {hookR},
            </div>
            <div className="code__line code__tab-1">
              <span className="code__key">education</span>:{" "}
              <span className="code__value">Artevelde University</span>
            </div>
            <div className="code__line">{hookR}</div>
          </article>
        </div>
      </section>
    </>
  );
};

export default HomePage;
