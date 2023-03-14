// Initialize the game board
const boardSize = 5;
const board = [];
for (let i = 0; i < boardSize; i++) {
  board[i] = [];
  for (let j = 0; j < boardSize; j++) {
    board[i][j] = {
      isShip: false,
      isHit: false,
      htmlElement: null,
    };
  }
}

// Add ships to the board
const numShips = 3;
for (let i = 0; i < numShips; i++) {
  let row, col;
  do {
    row = Math.floor(Math.random() * boardSize);
    col = Math.floor(Math.random() * boardSize);
  } while (board[row][col].isShip);
  board[row][col].isShip = true;
}

// Render the board on the screen
const boardElement = document.getElementById("board");
for (let i = 0; i < boardSize; i++) {
  for (let j = 0; j < boardSize; j++) {
    const square = document.createElement("div");
    square.addEventListener("click", () => {
      if (board[i][j].isHit) {
        alert("You already hit that spot!");
      } else {
        board[i][j].isHit = true;
        if (board[i][j].isShip) {
          square.style.backgroundColor = "red";
          alert("Hit!");
        } else {
          square.style.backgroundColor = "gray";
          alert("Miss!");
        }
      }
    });
    board[i][j].htmlElement = square;
    boardElement.appendChild(square);
  }
}
