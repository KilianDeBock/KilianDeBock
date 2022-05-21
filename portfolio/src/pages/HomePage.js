const HomePage = () => {
  const hookL = "{";
  const hookR = "}";
  return (
    <div className="big-background">
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
      <article className="code">
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
  );
};

export default HomePage;
