import React from "react";

const AboutPage = () => {
  const hookL = "{";
  const hookR = "}";

  return (
    <section className="container">
      <h2>Portfolio Work</h2>
      <article className="code">
        <div className="code__line">
          const <span className="code__variable">belgianCityFestival</span>{" "}
          {hookL}
        </div>
        <div className="code__line code__tab-1">
          <span className="code__key">Pages</span>:{" "}
          <a
            className="code__value"
            href="https://kiliandebock.github.io/Gentse-Feesten-Clone/"
            target="_blank"
            rel="noreferrer"
          >
            https://kiliandebock.github.io/Gentse-Feesten-Clone/
          </a>
          ,
        </div>
        <div className="code__line code__tab-1">
          <span className="code__key">Code</span>:{" "}
          <a
            className="code__value"
            href="https://github.com/KilianDeBock/Gentse-Feesten-Clone"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/KilianDeBock/Gentse-Feesten-Clone
          </a>
        </div>
        <div className="code__line">{hookR}</div>
      </article>
    </section>
  );
};

export default AboutPage;
