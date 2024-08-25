const bfs = (grid, start, target) => {
  let ROWS = grid.length;
  let COLS = grid[0].length;
  let queue = [start];
  let mySet = new Set([start].toString());
  let bfsLength = 0;

  while (queue.length > 0) {
    let size = queue.length;

    for (var i = 0; i < size; i++) {
      const [r, c] = queue.shift();

      if (r === target[0] && c === target[1]) return bfsLength;

      const directions = [
        [r + 1, c],
        [r - 1, c],
        [r, c + 1],
        [r, c - 1],
      ];

      for (let [row, col] of directions) {
        if (
          row >= 0 &&
          col >= 0 &&
          row < ROWS &&
          col < COLS &&
          !mySet.has([row, col].toString()) &&
          grid[row][col] === 0
        ) {
          queue.push([row, col]);
          mySet.add([row, col].toString());
        }
      }
    }
    bfsLength++;
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

/*
tracks lenght of rows and cols
create queue with start values
create set with start values. make it a string.
create lenght variable to track layers

while queue isn't empty
  get size of queue

    loop through everything in queue
      extract r and c from current queue (after shift())

      if grid[r] === target[0] AND grid[c] === target[1] return the length

      create directiosn for up, down, left, right

      loop [row, col] for all 4 directions
        if row < 0 AND col < 0 AND row > ROWS AND col > COLS and set doesn't ahve value AND grid[row][col] is equal to "0"
          store value in set (make string)
          add value to queue

*/
