class Board {
  constructor() {
    // bind funcs
    this._enableAllSquares = this._enableAllSquares.bind(this);
    this._checkWinner = this._checkWinner.bind(this);
    this._changeShape = this._changeShape.bind(this);
    this._initBoxes = this._initBoxes.bind(this);
    this._determinePlayer = this._determinePlayer.bind(this);
    this._disableAllSquares = this._disableAllSquares.bind(this);
    // declare vars
    this.availableBoxes = this._initBoxes();

    this.clickedBoxes = {};

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

  _disableAllSquares() {
    const boxesDivs = document.querySelectorAll('#square');
    for (const box of boxesDivs) {
      box.removeEventListener('click', this._changeShape);
    }
  }

  _checkSquares(s1, s2, s3) {
    if (
      this.clickedBoxes[s1] != undefined &&
      this.clickedBoxes[s2] != undefined &&
      this.clickedBoxes[s3] != undefined
    ) {
      if (
        this.clickedBoxes[s1].textContent ===
          this.clickedBoxes[s2].textContent &&
        this.clickedBoxes[s1].textContent === this.clickedBoxes[s3].textContent
      )
        return this.clickedBoxes[s1].textContent;
    } else return undefined;
  }

  _checkWinner() {
    // need to check which player?
    let winner;
    // check rows
    for (let i = 0; i < 3; i++) {
      winner = this._checkSquares(i * 3, i * 3 + 1, i * 3 + 2);
      if (winner != undefined) return winner;
    }
    for (let i = 0; i < 3; i++) {
      winner = this._checkSquares(i, i + 3, i + 6);
      if (winner != undefined) return winner;
    }
    winner = this._checkSquares(0, 4, 8);
    if (winner != undefined) return winner;
    winner = this._checkSquares(2, 4, 6);
    if (winner != undefined) return winner;
  }

  _changeShape(event) {
    // change the text content of a square
    const square = event.currentTarget;
    square.textContent = this.player;

    // disable clicking after one player's move
    square.style.pointerEvents = 'none';
    const clickedIdx =
      parseInt(square.dataset.row * 3) + parseInt(square.dataset.col);
    this.clickedBoxes[clickedIdx] = square;

    // remove from available
    const index = this.availableBoxes.indexOf(square);
    if (index > -1) {
      this.availableBoxes.splice(index, 1);
    }

    // fire event to change player
    document.dispatchEvent(new CustomEvent('one-square-done'));
    // TODO: MOVE THIS
    const winner = this._checkWinner();
    if (winner != undefined) {
      console.log(winner);

      // disbale all the boxes
      this._disableAllSquares();
    } else if (winner === undefined && this.availableBoxes.length === 0)
      console.log('tie!');
  }

  _initBoxes() {
    // Get all buttons as a NodeList
    const btns = document.querySelectorAll('#square');

    // Convert buttons NodeList to an array
    const btnsArr = Array.prototype.slice.call(btns);
    return btnsArr;
  }

  _determinePlayer(event) {
    this.player = event.detail;
  }
}
