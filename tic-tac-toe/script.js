const clickedBoxes = [];

function checkWinner() {
  // map col -> # of boxes
  const colBoxes = {};

  for (const box of clickedBoxes) {
    if (colBoxes[box.dataset.col]) colBoxes[box.dataset.col] += 1;
    else colBoxes[box.dataset.col] = 1;
  }
  for (let key in colBoxes) {
    if (colBoxes[key] == 3) console.log('winner');
  }
}

function changeShape(event) {
  // change the text content of a square
  const square = event.currentTarget;
  square.textContent = 'X';
  // disable clicking after one player's move
  square.style.pointerEvents = 'none';
  clickedBoxes.push(square);
  console.log(clickedBoxes[0].dataset.col);
  checkWinner();
}

//const s = document.querySelector('div[data-col="1"][data-row="1"]');
const boxesDivs = document.querySelectorAll('#square');
for (const box of boxesDivs) {
  box.addEventListener('click', changeShape);
}
