import React from "react";

const ContactPage = () => {
  const hookL = "{";
  const hookR = "}";

  return (
    <section className="container">
      <h2>Contact me</h2>
      <div className="grid">
        <article className="code code--fill">
          <div className="code__line">
            const <span className="code__variable">Contact</span> {hookL}
          </div>
          <div className="code__line code__tab-1">
            <span className="code__key">email</span>:{" "}
            <span className="code__value">
              <a href="mailto:debockkilian@gmail.com">
                "debockkilian@gmail.com"
              </a>
            </span>
            ,
          </div>
          <div className="code__line code__tab-1">
            <span className="code__key">telephone</span>:{" "}
            <span className="code__value">
              <a href="tel:0032470216421">0032470216421</a>
            </span>
          </div>
          <div className="code__line">{hookR}</div>
        </article>
        <form action="#">
          <span className="form__text">ContactForm</span>
          <label>
            <span className="label__text">email</span>
            <input
              type="email"
              placeholder="me@kiliandebock.be (ps; you can type here)"
            />
          </label>
          <label>
            <span className="label__text">message</span>
            <input
              type="text"
              placeholder="Hello, world! (ps; you can type here)"
            />
          </label>
          <div className="end">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
