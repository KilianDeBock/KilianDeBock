function App() {
  return (
    <div>
      <header className="height-container__margin-fix">
        <nav className="main-nav">
          <span>Kilian De Bock</span>
          <ul className="main-nav__list">
            <li className="main-nav__item">
              Home
            </li>
            <li className="main-nav__item">
              About
            </li>
            <li className="main-nav__item">
              Services
            </li>
            <li className="main-nav__item">
              Contact Me
            </li>
          </ul>
        </nav>
        <section className="heading height-container">
          <h1 className="heading__title">
            Heye! I'm Kilian De Bock
          </h1>
          <h2 className="heading__subtitle">
            Also known as Stualyttle Kirry
          </h2>
          <p>I am a full-stack Web Developer!</p>
          <p>I like to try out new challenges and cool stuff</p>
        </section>
      </header>

      <main>
        <section className="height-container">
          <a href="Assignments/Portfolio/Deel-1/docs/src/app/App#" className="iframe-focus">
            <iframe className="height-container__fill"
                    src="https://kiliandebock.github.io/She-Code-Africa"></iframe>
          </a>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
