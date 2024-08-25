let checkRows = (board) => {
  for (let i = 0; i < board.length; i++) {
    let mySet = new Set();
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== ".") {
        if (mySet.has(board[i][j].toString())) {
          return false;
        }
      }
      mySet.add(board[i][j].toString());
    }
  }
  return true;
};

let checkCols = (board) => {
  for (let i = 0; i < board.length; i++) {
    let mySet = new Set();
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] !== ".") {
        if (mySet.has(board[j][i].toString())) {
          return false;
        }
      }
      mySet.add(board[j][i].toString());
    }
  }
  return true;
};

let finalThreeCheck = (board, row, col) => {
  let mySet = new Set();
  for (let i = row; i < row + 3; i++) {
    for (let j = col; j < col + 3; j++) {
      if (board[i][j] !== ".") {
        if (mySet.has(board[i][j].toString())) {
          return false;
        }
        mySet.add(board[i][j].toString());
      }
    }
  }
  return true;
};

let checkThree = (board) => {
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      // console.log(i, j);
      let insideThreeBool = finalThreeCheck(board, i, j);
      if (!insideThreeBool) return false;
    }
  }
  return true;
};

var isValidSudoku = function (board) {
  let rowBool = checkRows(board);
  if (!rowBool) return false;

  let colBool = checkCols(board);
  if (!colBool) return false;

  let threeBool = checkThree(board);
  if (!threeBool) return false;

  return true;
};

let board = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];

console.log(isValidSudoku(board));

/*
1) check all rows
2) check all columns
3) check all 3x3 squares.

*/
