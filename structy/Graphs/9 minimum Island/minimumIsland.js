const minimumIsland = (grid) => {
  let min = 0;
  let visited = new Set();

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      let check = lookAtGrid(grid, i, j, visited);

      min = Math.min(min, check);
    }
  }

  return min;
};

const lookAtGrid = (grid, i, j, visited) => {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return 0;

  if (grid[i][j] === "W") return 0;

  const pos = i + "," + j;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  size += lookAtGrid(grid, i + 1, j, visited);
  size += lookAtGrid(grid, i - 1, j, visited);
  size += lookAtGrid(grid, i, j + 1, visited);
  size += lookAtGrid(grid, i, j - 1, visited);

  return size;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

minimumIsland(grid); // -> 2
