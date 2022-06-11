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
                <span className="code__value">
                  <img alt="HTML" src="https://f.lyttle.it/wZs7ssJ5e2.png" />
                  "HTML"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img alt="CSS" src="https://f.lyttle.it/HqcyCljrcu.png" />
                  "CSS"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img
                    alt="JavaScript"
                    src="https://f.lyttle.it/DuaNti2sbq.png"
                  />
                  "JS"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img alt="JSON" src="https://f.lyttle.it/6H0dUROCBL.png" />
                  "JSON"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img alt="PHP" src="https://f.lyttle.it/FOzpjHvynE.png" />
                  "PHP"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img
                    alt="TypeScript"
                    src="https://f.lyttle.it/sqg2FShDke.png"
                  />
                  "TS"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img alt="React" src="https://f.lyttle.it/06wUaDBk9K.png" />
                  "React"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img alt="Svelte" src="https://f.lyttle.it/78g7xA2X0n.png" />
                  "Svelte"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img alt="Python" src="https://f.lyttle.it/AyopWNjiUL.png" />
                  "Python"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img alt="YAML" src="https://f.lyttle.it/3FZcg9LkIg.png" />
                  "YAML"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img alt="SQL" src="https://f.lyttle.it/T3pVq8aOEj.png" />
                  "SQL"
                </span>
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
