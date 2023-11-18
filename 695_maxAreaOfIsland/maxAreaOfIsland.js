var maxAreaOfIsland = (grid) => {
  let maxScore = 0;

  for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[0].length; c++) {
      maxScore = Math.max(maxScore, DFS(grid, r, c));
    }
  }

  console.log(maxScore);
  return maxScore;
};

var DFS = (grid, r, c) => {
  if (
    r < 0 ||
    r >= grid.length ||
    c < 0 ||
    c >= grid[0].length ||
    grid[r][c] !== 1
  )
    return 0;

  grid[r][c] = 2;

  let up = DFS(grid, r + 1, c);
  let down = DFS(grid, r - 1, c);
  let right = DFS(grid, r, c + 1);
  let left = DFS(grid, r, c - 1);

  return 1 + up + down + right + left;
};

grid = [
  [0, 1],
  [0, 1],
  [0, 1],
  [0, 1],
];

maxAreaOfIsland(grid);
