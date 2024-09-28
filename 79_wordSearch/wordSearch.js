const bfs = (row, col, board, word, visited, index) => {
  const numRows = board.length;
  const numCols = board[0].length;

  if (index === word.length) {
    return true; // Found all characters of the word
  }

  if (
    row < 0 ||
    row >= numRows ||
    col < 0 ||
    col >= numCols ||
    board[row][col] !== word[index] ||
    visited[row][col]
  ) {
    return false; // Out of bounds or not matching or already visited
  }

  // Mark as visited
  visited[row][col] = true;

  // Explore neighbors (right, down, left, up)
  const direction = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
  ];

  for (const [dRow, dCol] of direction) {
    const newRow = row + dRow;
    const newCol = col + dCol;

    if (bfs(newRow, newCol, board, word, visited, index + 1)) {
      return true; // Found the word sequence
    }
  }

  // Backtrack and unmark this cell
  visited[row][col] = false;
  return false;
};

var exist = function (board, word) {
  const numRows = board.length;
  const numCols = board[0].length;
  const visited = Array.from({ length: numRows }, () =>
    Array(numCols).fill(false)
  );
  console.log(visited);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (bfs(i, j, board, word, visited, 0)) {
        return true; // Found the word
      }
    }
  }
  return false; // Word not found
};

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let word = "ABCCED";

console.log(exist(board, word)); // Should return true

/*
This will be a BFS solution.

Done - map thorugh board and make a 2d array iwth all spots where the first letter of word appears

Use BFS with every row/col in the created 2d array to find the word.

*/

/*
BFS - send in: board[], foundArray[], word[]
numRows = grid lenghts
numCOls = grid[0] lenght
visited = empty array
queue = [foundArray values]
trackerArr = [] used to compare foundArray and trackerArr

create directions[01 10 0-1 -10] right down left up

Set visited [startrow][startcol] to true

while queue length is greater than 0
  shift row,col out of queue


  for dRow, dCol of direction 
    newRow = row + dRow
    newCol = col + dCol

    if out of obunds check
      set visted[][] = true
      if this value is ith in the foundArray
        push into 



compare trackerArr and foundArray. If they're the same, return true.
*/
