(() => {
  const background = {
    initialize() {
      this.cacheElements();
      this.generateUI();
      this.startAnimation();
    },
    cacheElements() {
      this.$body = document.querySelector('body');
      this.$background = document.querySelector('.background');
      this.$backgroundLines = document.querySelectorAll('.background__line');
    },
    generateUI() {
      /**
       * Create a new array to generate the same div in.
       * Creating an empty array with 10 empty items in, than filling it with 0, so we can map it.
       * Mapping the same div.
       * Joining the array
       */
      const bgLines = new Array(10)
        .fill(0)
        .map(() => `<div class="background__line"></div>`)
        .join('');

      // Add to the bottom of the Body
      this.$body.innerHTML += `<div class="background">${bgLines}</div>`;

      // Re-Cache elements
      this.cacheElements();
    },
    startAnimation() {
      this.setLines(true);
      setTimeout(() => this.setLines(), 200);
    },
    setLines(noTimeout = false) {
      this.$backgroundLines.forEach(line => this.changePos(line, noTimeout))
    },
    changePos(line, noTimeout = false) {
        const {height, width, degrees, time} = this.getRandoms();
        line.style.transform =
          `translate(${width}vw, ${height}vh) ` +
          `rotate(${degrees}deg)`;
        line.style.transition = `transform ${time}ms ease-in-out 0s`;
        if (!noTimeout) setTimeout(() => this.changePos(line), time);
    },
    getRandoms() {
      const height = this.getRandomNumber(0, 50, true)
      const width = this.getRandomNumber(0, 50, true)
      const degrees = this.getRandomNumber(0, 360, true)
      const time = this.getRandomNumber(22, 33) * 1000

      return {height, width, degrees, time};
    },
    getMinusOrNot(number = 0) {
      return Math.random() > 0.5 ? -number : number;
    },
    getRandomNumber(min = 0, max = 1, minus = false) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (minus) return this.getMinusOrNot(randomNumber);
      return randomNumber;
    }
  };
  // Start initialization.
  background.initialize();
})();