let grid = [
  [0, 0, 1],
  [0, 1, 0],
  [0, 0, 0],
];

bfsArray(grid);

/*
Create visted 2d array
create rows length variable
create cols length variable
create queue empty

create directions 2d array

while queue lenght IS GREATER than 0
  shift row and col from queue.

  for loop for all 4 directions.
    newRow = row + dr
    newCol = col + dc

    push in queue and set vsited to true if
    newRow is great tahn or equal to 0
    newRow is less than rows
    newCol is greater than or equal to 0
    newCol is less than col
    visited[newRow][newCol] is false
    grid[newRow][newCol] is 0
*/

/*
const bfsArray = (grid) => {
  let visited = [];
  let rows = grid.length;
  let cols = grid[0].length;
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let queue = [];

  for (let i = 0; i < grid.length; i++) {
    visited.push([]);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      visited[i][j] = false;
    }
  }

  queue.push([0, 0]);
  visited[0][0] = true;

  while (queue.length > 0) {
    const [row, col] = queue.shift();

    for (const [dr, dc] of directions) {
      let newRow = row + dr;
      let newCol = col + dc;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        visited[newRow][newCol] === false &&
        grid[newRow][newCol] !== 1
      ) {
        console.log(newRow, newCol);
        queue.push([newRow, newCol]);
        visited[newRow][newCol] = true;
      }
    }
  }
};
*/
