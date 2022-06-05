import React from "react";

const AboutPage = () => {
  const hookL = "{";
  const hookR = "}";

  return (
    <section className="container">
      <h2>About me</h2>
      <div className="grid">
        <article className="code code--fill">
          <div className="code__line">
            const <span className="code__variable">Person</span> {hookL}
          </div>
          <div className="code__line code__tab-1">
            <span className="code__key">firstname</span>:{" "}
            <span className="code__value">"Kilian"</span>,
          </div>
          <div className="code__line code__tab-1">
            <span className="code__key">lastname</span>:{" "}
            <span className="code__value">"De Bock"</span>,
          </div>
          <div className="code__line code__tab-1">
            <span className="code__key">metaData</span>: {hookL}{" "}
            <div className="code__line code__tab-1">
              <span className="code__key">profession</span>:{" "}
              <span className="code__value">"Fullstack Developer"</span>,
            </div>
            <div className="code__line code__tab-1">
              <span className="code__key">education</span>:{" "}
              <span className="code__value">"Artevelde University"</span>,
            </div>
            <div className="code__line code__tab-1">
              <span className="code__key">memory</span>:{" "}
              <span className="code__value">64MiB</span>,
            </div>
            <div className="code__line code__tab-1">
              <span className="code__key">storage</span>:{" "}
              <span className="code__value">16PB</span>,
            </div>
            <div className="code__line code__tab-1">
              <span className="code__key">markup</span>: {hookL}
              <div className="code__line code__tab-1">
                <span className="code__value">"HTML"</span>,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">"CSS"</span>,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">"JS"</span>,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">"JSON"</span>,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">"PHP"</span>,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">"TS"</span>,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">"React"</span>,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">"Svelte"</span>,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">"Python"</span>,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">"YAML"</span>,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">"SQL"</span>
              </div>
              {hookR}
            </div>
            <div className="code__line">{hookR}</div>
          </div>
          <div className="code__line">{hookR}</div>
        </article>
      </div>
    </section>
  );
};

export default AboutPage;
