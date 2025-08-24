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

/*
const bfs = (row, col, grid, seen) => {
    let queue = [[row, col]];
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    let track = 1;
    seen.add(`${row},${col}`)

    while (queue.length) {
        let [qr, qc] = queue.shift();

        for (let [dr, dc] of directions) {
            let newRow = qr + dr
            let newCol = qc + dc;

            if (newRow >= 0 && newCol >= 0 && newRow < grid.length && newCol < grid[0].length && grid[newRow][newCol] === 1 && !seen.has(`${newRow},${newCol}`)) {
                track++;
                queue.push([newRow, newCol]);
                seen.add(`${newRow},${newCol}`)
            }
        }
    }
    return track;
}

function maxAreaOfIsland(grid: number[][]): number {
    let max = 0
    let count = 0
    let seen = new Set();

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                count = bfs(row, col, grid, seen);
                max = Math.max(max, count);
            }
        }
    }

    return max;
};


*/
