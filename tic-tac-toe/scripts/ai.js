class Ai {
  constructor() {
    this._checkConnectedTwo = this._checkConnectedTwo.bind(this);
    this._upSert = this._upSert.bind(this);
    this._checkDiag = this._checkDiag.bind(this);
    this._convertIndexToColRow = this._convertIndexToColRow.bind(this);
    this._checkTwo = this._checkTwo.bind(this);
  }

  _upSert(obj, key) {
    if (obj[key]) obj[key] += 1;
    else obj[key] = 1;
  }

  // TODO
  // check any two of three are filled and return the unfilled

  _checkTwo(s1, s2, s3) {
    const arr = [s1, s2, s3];
    let count = 0;

    for (const b of arr) {
      if (app.board.clickedBoxes[b] !== undefined) {
        if (app.board.clickedBoxes[b].textContent === 'X') {
          count += 1;
        }
      }
    }
    return count === 2 ? arr : undefined;
  }

  _checkDiag() {
    let winner;
    for (let i = 0; i < 3; i++) {
      winner = this._checkTwo(i * 3, i * 3 + 1, i * 3 + 2);
      if (winner !== undefined) return winner;
    }
    for (let i = 0; i < 3; i++) {
      winner = this._checkTwo(i, i + 3, i + 6);
      if (winner !== undefined) return winner;
    }
    winner = this._checkTwo(0, 4, 8);
    if (winner !== undefined) return winner;
    winner = this._checkTwo(2, 4, 6);

    if (winner !== undefined) {
      return winner;
    }
  }

  _convertIndexToColRow(i) {
    const index = parseInt(i);

    const row = Math.floor(index / 3);
    const col = Math.floor(index % 3);

    return [row, col];
  }

  _checkConnectedTwo() {
    const spotInThree = this._checkDiag();
    if (spotInThree !== undefined) {
      let availableSpot = undefined;
      for (const b of spotInThree) {
        if (app.board.clickedBoxes[b] === undefined) availableSpot = b;
      }
      if (availableSpot !== undefined) {
        const coord = this._convertIndexToColRow(availableSpot);
        const row = coord[0].toString();
        const col = coord[1].toString();
        const chosenDiv = document.querySelector(
          `#square[data-col="${col}"][data-row="${row}"]`
        );
        return chosenDiv;
      }
    }
    return undefined;
  }
}
