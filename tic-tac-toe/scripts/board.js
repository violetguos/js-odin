class Board {
  constructor() {
    // bind funcs
    this._enableAllSquares = this._enableAllSquares.bind(this);
    this._checkWinner = this._checkWinner.bind(this);
    this._changeShape = this._changeShape.bind(this);
    this._initBoxes = this._initBoxes.bind(this);
    this._determinePlayer = this._determinePlayer.bind(this);

    this.clickedBoxes = this._initBoxes();

    // declare vars
    this.availableBoxes = [];

    // start game
    this._enableAllSquares();

    // always listen to the alternator
    document.addEventListener('next-square', this._determinePlayer);
  }

  _enableAllSquares() {
    const boxesDivs = document.querySelectorAll('#square');
    for (const box of boxesDivs) {
      box.addEventListener('click', this._changeShape);
    }
  }

  _checkWinner() {
    // need to check which player?
    const colBoxes = {};

    for (const box of this.clickedBoxes) {
      if (colBoxes[box.dataset.col]) colBoxes[box.dataset.col] += 1;
      else colBoxes[box.dataset.col] = 1;
    }
    for (let key in colBoxes) {
      if (colBoxes[key] == 3) console.log('winner');
    }
  }

  _changeShape(event) {
    // change the text content of a square
    const square = event.currentTarget;
    square.textContent = this.player;

    // disable clicking after one player's move
    square.style.pointerEvents = 'none';
    this.clickedBoxes.push(square);

    // remove from available
    const index = this.availableBoxes.indexOf(square);
    if (index > -1) {
      availableBoxes.splice(index, 1);
    }

    // fire event to change player
    document.dispatchEvent(new CustomEvent('one-square-done'));

    // TODO: MOVE THIS
    this._checkWinner();
  }

  _initBoxes() {
    // Get all buttons as a NodeList
    const btns = document.querySelectorAll('button');

    // Convert buttons NodeList to an array
    const btnsArr = Array.prototype.slice.call(btns);
    return btnsArr;
  }

  _determinePlayer(event) {
    this.player = event.detail;
  }
}
