class App {
  constructor() {
    const restartButton = document.querySelector('button');
    restartButton.addEventListener('click', () => {
      const boxesDivs = document.querySelectorAll('#square');
      for (const box of boxesDivs) {
        box.textContent = '';
      }
      const result = document.querySelector('#result');
      result.textContent = '';
      this.board = new Board();
    });
  }
}
const app = new App();
