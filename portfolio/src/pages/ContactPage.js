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
            <span className="code__value">"debockkilian@gmail.com"</span>,
          </div>
          <div className="code__line code__tab-1">
            <span className="code__key">telephone</span>:{" "}
            <span className="code__value">0032470216421</span>
          </div>
          <div className="code__line">{hookR}</div>
        </article>
      </div>
    </section>
  );
};

export default ContactPage;
