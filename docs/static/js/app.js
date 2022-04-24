(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.generateUI();
    },
    cacheElements() {
      this.$bgLines = document.querySelectorAll('.bg-lines__line');
      // this. = document.querySelector('selector');
    },
    generateUI() {
      this.changePos();
      setInterval(() => this.changePos(), 20000);
    },
    changePos() {
      this.$bgLines.forEach(line => {
        const randomNr = Math.floor(Math.random() * 360);
        const {randomHeight, randomWidth} = this.randomPosition();
        line.style.transform = `translate(calc(${randomWidth}% - 50%), calc(${randomHeight}vh - 50%)) rotate(${randomNr}deg)`;
      });
    },
    randomPosition() {
      const randomHeight = Math.floor(Math.random() * 25);
      const randomWidth = Math.floor(Math.random() * 25);

      return {randomHeight, randomWidth};
    }
  };
  // Start initialization.
  app.initialize();
})();