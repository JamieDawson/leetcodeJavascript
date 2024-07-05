const bfs = (grid, start, target) => {
  let ROWS = grid.length;
  let COLS = grid[0].length;
  let visited = new Set([start].toString());
  let queue = [start];
  let length = 0;

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [r, c] = queue.shift();

      if (target[0] === r && target[1] === c) {
        return length;
      }

      const directions = [
        [r + 1, c],
        [r - 1, c],
        [r, c + 1],
        [r, c - 1],
      ];

      for (let [row, col] of directions) {
        if (
          row >= 0 &&
          row < ROWS &&
          col >= 0 &&
          col < COLS &&
          !visited.has([row, col].toString()) &&
          grid[row][col] === 0
        ) {
          queue.push([row, col]);
          visited.add([row, col].toString());
        }
      }
    }
    length++;
  }
  return -1;
};

// Example usage:
const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

console.log(bfs(grid, [0, 0], [3, 3])); // Output: 6
