(() => {
  const bgLines = {
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
      // Generate html
      const bgLines = new Array(10)
        .fill(0)
        .map(() => `<div class="background__line"></div>`)
        .join('');
      this.$body.innerHTML += `<div class="background">${bgLines}</div>`;

      // Re-Cache elements
      this.cacheElements();
    },
    startAnimation() {
      this.changePos();
      setInterval(() => this.changePos(), 20000);
      setTimeout(() => {
        this.$background.classList.add('active');
        this.changePos();
      }, 200);
    },
    changePos() {
      this.$backgroundLines.forEach(line => {
        const {randomHeight, randomWidth, randomDeg} = this.randomPosition();
        line.style.transform = `translate(${randomWidth}vw, ${randomHeight}vh) rotate(${randomDeg}deg)`;
      });
    },
    randomPosition() {
      const rh = Math.floor(Math.random() * 50);
      const rw = Math.floor(Math.random() * 50);
      const rd = Math.floor(Math.random() * 360);
      const randomDeg = Math.random() > 0.5 ? -rd : rd;
      const randomHeight = Math.random() > 0.5 ? -rh : rh;
      const randomWidth = Math.random() > 0.5 ? -rw : rw;

      return {randomHeight, randomWidth, randomDeg};
    }
  };
  // Start initialization.
  bgLines.initialize();
})();