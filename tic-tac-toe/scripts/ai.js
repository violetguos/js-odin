class Ai {
  constructor() {
    this._checkConnectedTwo = this._checkConnectedTwo.bind(this);
    this._upSert = this._upSert.bind(this);
  }

  _upSert(obj, key) {
    if (obj[key]) obj[key] += 1;
    else obj[key] = 1;
  }

  _checkDiag() {
    // testing on 048 only
    let row = undefined;
    let col = undefined;
    const connectedDiag048 = {};
    let connectedDiag246 = 0;
    for (let key in app.board.clickedBoxes) {
      const box = app.board.clickedBoxes[key];
      if (box.textContent === 'X') {
        if (box.dataset.col === '0' && box.dataset.row === '0') {
          this._upSert(connectedDiag048, '0');
        } else if (box.dataset.col === '1' && box.dataset.row === '1') {
          this._upSert(connectedDiag048, '4');
        }
      }
    }
    console.log('connected048', connectedDiag048);

    // find the available index in diag 048
    let index;
    const keys = ['0', '4', '8'];
    for (const key of keys) {
      if (!connectedDiag048[key]) index = key;
    }

    // convert to row and col
    row = Math.floor(index / 3);
    col = index % 3;

    console.log('check diag', index, row, col);
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
        col = key;
      }
    }
    for (let key in connectedTwoRows) {
      if (connectedTwoRows[key] >= 2) {
        row = key;
      }
    }

    // check all possible scenaarios

    if (row === undefined && col !== undefined) {
      for (const box of app.board.availableBoxes) {
        if (box.dataset.col === col) {
          row = box.dataset.row;
        }
      }
    } else if (row !== undefined && col === undefined) {
      for (const box of app.board.availableBoxes) {
        if (box.dataset.row === row) {
          col = box.dataset.col;
        }
      }
    } else if (row === undefined && col === undefined) {
      row = app.board.availableBoxes[0].dataset.row;
      col = app.board.availableBoxes[0].dataset.col;
    }

    const chosenDiv = document.querySelector(
      `#square[data-col="${col}"][data-row="${row}"]`
    );
    console.log(chosenDiv, col, row);
  }
}
