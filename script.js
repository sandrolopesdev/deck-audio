const recoveredBoardContainer = document.getElementById('section-board-container');

let divSize = 9;

const createDivBoard = (size) => {
  for (let index = 1; index <= size; index += 1) {
    const createSizeBoard = document.createElement('div');
    recoveredBoardContainer.appendChild(createSizeBoard);
    createSizeBoard.className = 'div-board';
  }
};
createDivBoard(divSize);
