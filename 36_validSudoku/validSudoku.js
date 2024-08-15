var checkRows = (board) => {
  for (let i = 0; i < board.length; i++) {
    let mySet = new Set();
    for (let j = 0; j < board[0].length; j++) {
      let value = board[i][j].toString();
      if (value !== ".") {
        if (mySet.has(value)) {
          return false;
        }
        mySet.add(value);
      }
    }
  }
  return true;
};

var checkCol = (board) => {
  for (let i = 0; i < board.length; i++) {
    let mySet = new Set();
    for (let j = 0; j < board[0].length; j++) {
      let value = board[j][i].toString();
      if (value !== ".") {
        if (mySet.has(value)) {
          return false;
        }
        mySet.add(value);
      }
    }
  }
  return true;
};

var checkThreePartTwo = (board, row, col) => {
  let mySet = new Set();
  for (let i = row; i < row + 3; i++) {
    for (let j = col; j < col + 3; j++) {
      let value = board[i][j].toString();
      if (value !== ".") {
        if (mySet.has(value)) {
          return false;
        }
        mySet.add(value);
      }
    }
  }
  return true;
};

var checkThree = (board) => {
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      if (!checkThreePartTwo(board, i, j)) {
        return false;
      }
    }
  }
  return true;
};

var isValidSudoku = function (board) {
  let rowsBool = checkRows(board);
  if (!rowsBool) return false;

  let colBool = checkCol(board);
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

// let board = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// let board = [
//   ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

console.log(isValidSudoku(board));

/*
1) check all rows
2) check all columns
3) check all 3x3 squares.

*/
