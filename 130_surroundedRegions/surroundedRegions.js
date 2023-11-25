var solve = function (board) {
  for (var r = 0; r < board.length; r++) {
    for (var c = 0; c < board[0].length; c++) {
      if (board[r][c] === "O") {
        flipO(board, r, c);
      }
    }
  }
};

var flipO = (board, r, c) => {
  if (r - 1 < 0 || r + 1 > board.length || c - 1 < 0 || c + 1 > board[0].length)
    return;

  board[r][c] = "X";
};

let board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

solve(board);
