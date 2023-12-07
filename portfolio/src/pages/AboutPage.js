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
                  <img alt="HTML" src="https://mirror.lyttle.it/icons/html-5.svg" />
                  "HTML"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img alt="CSS" src="https://mirror.lyttle.it/icons/css.svg" />
                  "CSS"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img
                    alt="JavaScript"
                    src="https://mirror.lyttle.it/icons/javascript.svg"
                  />
                  "JavaScript"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img alt="JSON" src="https://mirror.lyttle.it/icons/json.svg" />
                  "JSON"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img alt="PHP" src="https://mirror.lyttle.it/icons/php.svg" />
                  "PHP"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img
                    alt="TypeScript"
                    src="https://mirror.lyttle.it/icons/typescript.svg"
                  />
                  "TypeScript"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img
                    alt="Java"
                    src="https://mirror.lyttle.it/icons/java.svg"
                  />
                  "Java"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img alt="React" src="https://mirror.lyttle.it/icons/react.svg" />
                  "React"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img alt="Svelte" src="https://mirror.lyttle.it/icons/svelte.svg" />
                  "Svelte"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img alt="Python" src="https://mirror.lyttle.it/icons/python.svg" />
                  "Python"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img alt="YAML" src="https://mirror.lyttle.it/icons/yaml.svg" />
                  "YAML"
                </span>
                ,
              </div>
              <div className="code__line code__tab-1">
                <span className="code__value">
                  <img alt="SQL" src="https://mirror.lyttle.it/icons/sql.svg" />
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
