class App {
  constructor() {
    const restartButton = document.querySelector('button');
    restartButton.addEventListener('click', () => {
      const boxesDivs = document.querySelectorAll('#square');
      for (const box of boxesDivs) {
        box.textContent = '';
      }
      this.board = new Board();
      this.player = new Player();
    });
  }
}
const app = new App();
