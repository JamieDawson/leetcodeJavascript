function bfsGrid(grid, row, col) {
  let queue = [[row, col]];
  let seen = new Set([`${row},${col}`]);
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    let [qr, qc] = queue.shift();
    console.log(qr, qc);

    for (let [dr, dc] of directions) {
      let newRow = qr + dr;
      let newCol = qc + dc;

      if (
        newRow >= 0 &&
        newCol >= 0 &&
        newRow < grid.length &&
        newCol < grid[0].length &&
        grid[newRow][newCol] === "1" &&
        !seen.has(`${newRow},${newCol}`)
      ) {
        queue.push([newRow, newCol]);
        seen.add(`${newRow},${newCol}`);
      }
    }
  }
}

let grid = [
  ["1", "1", "0"],
  ["0", "1", "0"],
  ["0", "0", "1"],
];

bfsGrid(grid, 0, 0);
// 0 0
// 0 1
// 1 1

/*
Make a queue and get starting row/col in it.
Make seen SET and put row/col in it using ``
Make directions = [0,1, etc]

loop while queue isn't empy
  shift vlaues from queue.
    loop through all 4 directions
      new row val
      new col val
      check out of bounds + if value is 1
        console log the row/col to show that it's a 1!

*/

/*
function bfsGrid(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;

  let queue = [[row, col]];
  let seen = new Set([`${row},${col}`]);

  while (queue.length) {
    let [r, c] = queue.shift();
    console.log(r, c);

    let dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let [dr, dc] of dirs) {
      let nr = r + dr,
        nc = c + dc;

      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < rows &&
        nc < cols &&
        grid[nr][nc] === "1" &&
        !seen.has(`${nr},${nc}`)
      ) {
        seen.add(`${nr},${nc}`);
        queue.push([nr, nc]);
      }
    }
  }
}

*/
