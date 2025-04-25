const dfsArray = (grid) => {
  let visited = [];

  for (let i = 0; i < grid.length; i++) {
    visited.push([]);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      visited[i][j] = false;
    }
  }

  const dfs = (row, col) => {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      visited[row][col] === true ||
      grid[row][col] === 1
    ) {
      return;
    }
    console.log(row, col);

    visited[row][col] = true;

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  dfs(0, 0);
};

let grid = [
  [0, 0, 1],
  [0, 1, 0],
  [0, 0, 0],
];

dfsArray(grid);

/*
Create visited array.
Create DFS function and pass in row = 0 and col = 0

check  row<0, row >= grid.length, col<0 col >= grid[0].length if visited is true 

return;

set visited[row][col] to true

go 
UP
DOWN
LEFT
RIGHt

  */

/*
const dfsArray = (grid) => {
  let visited = [];

  for (let i = 0; i < grid.length; i++) {
    visited.push([]);
  }

  // console.log(visited);

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      visited[i][j] = false;
    }
  }

  //  console.log(visited);

  const dfs = (row, col) => {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      visited[row][col] === true ||
      grid[row][col] === 1
    ) {
      return;
    }
    console.log(row, col, visited[row][col]);
    visited[row][col] = true;

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  dfs(0, 0);
};

const grid = [
  [0, 0, 1],
  [0, 1, 0],
  [0, 0, 0],
];

dfsArray(grid);
*/
