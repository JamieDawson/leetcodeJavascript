function dfsGrid(grid, r, c, visited) {
  const rows = grid.length,
    cols = grid[0].length;
  if (r < 0 || c < 0 || r >= rows || c >= cols) return;
  if (grid[r][c] === "0" || visited.has(`${r},${c}`)) return;

  visited.add(`${r},${c}`);

  dfsGrid(grid, r + 1, c, visited);
  dfsGrid(grid, r - 1, c, visited);
  dfsGrid(grid, r, c + 1, visited);
  dfsGrid(grid, r, c - 1, visited);
}

let grid = [
  ["1", "1", "0"],
  ["0", "1", "0"],
  ["0", "1", "1"],
];
let visited = new Set();
dfsGrid(grid, 0, 0, visited);
console.log(visited.size); // 4
