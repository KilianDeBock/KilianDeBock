const Footer = () => {
  const hookL = "{";
  const hookR = "}";

  return (
    <footer className="footer container">
      <div className="grid">
        <article className="code code--fill">
          <div className="code__line">
            const <span className="code__variable">Socials</span> = {hookL}
          </div>
          <div className="code__line code__tab-1">
            <span className="code__key">discord</span>:{" "}
            <a
              href="discord://discord.com/users/132487290835435521"
              target="_blank"
              rel="noreferrer"
            >
              <span className="code__value">"Stualyttle Kirry#2000"</span>
            </a>
            ,
          </div>
          <div className="code__line code__tab-1">
            <span className="code__key">github</span>:{" "}
            <a
              href="https://github.com/Stualyttle"
              target="_blank"
              rel="noreferrer"
            >
              <span className="code__value">"Stualyttle"</span>
            </a>
            ,
          </div>
          <div className="code__line code__tab-1">
            <span className="code__key">linkedin</span>:{" "}
            <a
              href="https://www.linkedin.com/in/kiliandebock/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="code__value">"Kilian De Bock"</span>
            </a>
          </div>
          <div className="code__line">{hookR}</div>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
