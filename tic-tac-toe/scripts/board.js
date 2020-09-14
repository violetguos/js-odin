class Board {
  constructor() {
    // bind funcs
    this._enableAllSquares = this._enableAllSquares.bind(this);
    this._checkWinner = this._checkWinner.bind(this);
    this._changeShape = this._changeShape.bind(this);
    this._initBoxes = this._initBoxes.bind(this);
    this._disableAllSquares = this._disableAllSquares.bind(this);
    this._removeSquare = this._removeSquare.bind(this);
    this._aiMove = this._aiMove.bind(this);
    // declare vars
    this.availableBoxes = this._initBoxes();
    this.player = 'X';
    this.ai = new Ai();
    this.clickedBoxes = {};

    // start game
    this._enableAllSquares();
  }

  _enableAllSquares() {
    console.log('enable squares');
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

  _removeSquare(square) {
    // disable clicking after one player's move
    square.removeEventListener('click', this._changeShape);
    const clickedIdx =
      parseInt(square.dataset.row * 3) + parseInt(square.dataset.col);
    this.clickedBoxes[clickedIdx] = square;

    // remove from available
    const index = this.availableBoxes.indexOf(square);
    if (index > -1) {
      this.availableBoxes.splice(index, 1);
    }
  }

  _aiMove() {
    this.ai._checkConnectedTwo();
    const boxesDivs = app.board.availableBoxes;
    if (boxesDivs.length !== 0) {
      let chosen = boxesDivs[0];
      chosen.textContent = 'O';
      this._removeSquare(chosen);
    }
  }

  _changeShape(event) {
    // change the text content of a square
    const square = event.currentTarget;
    square.textContent = this.player;
    this._removeSquare(square);
    // fire event to change player
    //check winner
    const winner = this._checkWinner();
    if (winner !== undefined) {
      const result = document.querySelector('#result');
      result.textContent = winner + ' won';

      // disbale all the boxes
      this._disableAllSquares();
    } else if (winner === undefined && this.availableBoxes.length === 0) {
      const result = document.querySelector('#result');
      result.textContent = 'TIE!';
    } else {
      this._aiMove();
    }
  }

  _initBoxes() {
    // Get all buttons as a NodeList
    const btns = document.querySelectorAll('#square');

    // Convert buttons NodeList to an array
    const btnsArr = Array.prototype.slice.call(btns);
    return btnsArr;
  }
}
