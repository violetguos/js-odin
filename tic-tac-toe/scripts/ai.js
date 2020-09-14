class Ai {
  constructor() {
    this._checkConnectedTwo = this._checkConnectedTwo.bind(this);
    this._upSert = this._upSert.bind(this);
  }

  _upSert(obj, key) {
    if (obj[key]) obj[key] += 1;
    else obj[key] = 1;
  }

  _checkConnectedTwo() {
    const connectedTwoCols = {};
    const connectedTwoRows = {};
    for (let key in app.board.clickedBoxes) {
      const box = app.board.clickedBoxes[key];
      if (box.textContent === 'X') {
        this._upSert(connectedTwoRows, box.dataset.row);
        this._upSert(connectedTwoCols, box.dataset.col);
      }
    }
    let row = undefined;
    let col = undefined;

    for (let key in connectedTwoCols) {
      if (connectedTwoCols[key] >= 2) {
        col = parseInt(key);
      }
    }
    for (let key in connectedTwoRows) {
      if (connectedTwoRows[key] >= 2) {
        row = parseInt(key);
      }
    }

    const chosenDiv = document.querySelector(
      `#square[data-col="${col}"][data-row="${row}"]`
    );
    console.log(chosenDiv, col, row);
  }
}
