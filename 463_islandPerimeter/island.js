let findFirstIsland = (grid) => {
  for (var i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        return [[i, j]];
      }
    }
  }
};

function islandPerimeter(grid: number[][]): number {
  let counter = 0;
  let visited = [];
  let rows = grid.length;
  let cols = grid[0].length;
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let i = 0; i < rows; i++) {
    visited.push([]);
  }
  console.log(visited);

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      visited[i][j] = false;
    }
  }

  let queue = findFirstIsland(grid);
  let [startRow, startCol] = queue[0];
  visited[startRow][startCol] = true;

  while (queue.length > 0) {
    const [r, c] = queue.shift();
    for (let [dr, dc] of directions) {
      let newRow = r + dr;
      let newCol = c + dc;

      if (
        newRow < 0 ||
        newRow >= rows ||
        newCol < 0 ||
        newCol >= cols ||
        grid[newRow][newCol] === 0
      ) {
        counter++;
      } else if (
        grid[newRow][newCol] === 1 &&
        visited[newRow][newCol] === false
      ) {
        queue.push([newRow, newCol]);
        visited[newRow][newCol] = true;
      }
    }
  }

  console.log(counter);
  return counter;
}

/*
BFS
1 = land
0 = water

Counter variable set to 0. Count the edges.
Create a visited array of arrays, set all spots to false
Create directiosn array to loop through
Go through array of arrays to find the first instance of 1, store it in the queue.
Once you got the first spot in the queue, use BFS on it!

Checkers to increase counter IF current grid value is 1:
row < 0 OR row > grid lenght OR col < 0 OR col > grid[0] lenght

*/
