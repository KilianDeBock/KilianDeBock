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
              const <span className="code__variable">Person</span> {hookL}
            </div>
            <div className="code__line code__tab-1">
              <span className="code__key">firstname</span>:{" "}
              <span className="code__value">"Kilian"</span>,
            </div>
            <div className="code__line code__tab-1">
              <span className="code__key">lastname</span>:{" "}
              <span className="code__value">"De Bock"</span>
            </div>
            <div className="code__line">{hookR}</div>
          </article>
          <article className="code margin-left-5">
            <div className="code__line">
              const <span className="code__variable">MetaData</span> {hookL}
            </div>
            <div className="code__line code__tab-1">
              <span className="code__key">profession</span>:{" "}
              <span className="code__value">"Fullstack Developer"</span>,
            </div>
            <div className="code__line code__tab-1">
              <span className="code__key">markup</span>: {hookL}{" "}
              <span className="code__value">"HTML"</span>,{" "}
              <span className="code__value">"CSS"</span>,{" "}
              <span className="code__value">"JS"</span>,{" "}
              <span className="code__value">"TS"</span> {hookR},
            </div>
            <div className="code__line code__tab-1">
              <span className="code__key">education</span>:{" "}
              <span className="code__value">"Artevelde University"</span>
            </div>
            <div className="code__line">{hookR}</div>
          </article>
        </div>
      </section>
      <section className="container grid grid--4 grid--end">
        <article className="code code--fill code--text code--space">
          <span className="code__title">2013</span>
          I've had my first introduction to the world-famous game; Minecraft,
          after a few weeks I started my own server. First just to play with my
          brothers, but eventually also to the public. We hit a total number of
          ever played players of 3,356 players, and concurrent players are 23 at
          the same time. I used public plugins and asked a friend to also write
          plugins for me.
        </article>
        <article className="code code--fill code--text code--space">
          <span className="code__title">2017</span>
          The server stopped in 2017 due to budget shortage. I myself started
          working for a friend's server where I supervised staff members and did
          the distribution of tasks.
        </article>
        <article className="code code--fill code--text code--space">
          <span className="code__title">2020</span>
          This was my first introduction to code. I needed a script to
          distribute plugins across different servers from one central location.
          This friend of mine said he'd be happy if we did it together and I
          could learn from it. I started it so I could do it later by myself. So
          the ball started rolling, I wrote my first bot in Python which has
          since been implemented by 10 communities in Discord. I also code bots
          for friends with specific community bots needs.
        </article>
        <article className="code code--fill code--text code--space">
          <span className="code__title">2021</span>
          In 2021, the year I graduated high school from child care I decided to
          do a 360 turn and start a higher education named programming. This
          turned out to be a great success and something I really like to do.
          Until now I am busy with the course and I am having the time of my
          life!
        </article>
      </section>
      <section className="container">
        <h2>Portfolio Work</h2>
        <div className="grid grid--3-highlight grid--center">
          <article className="code code--fill code--img">
            <img
              src="/media/images/gent.jpg"
              alt="Remake Site Gentse Feesten"
            />
          </article>
          <article className="code code--fill code--img code--img__highlight">
            <img
              src="/media/images/she.png"
              alt="Remake Site She Code Africa"
            />
          </article>
          <article className="code code--fill code--img">
            <img src="/media/images/arne.png" alt="Remake Site Arne Quinze" />
          </article>
        </div>
      </section>
    </>
  );
};

export default HomePage;
