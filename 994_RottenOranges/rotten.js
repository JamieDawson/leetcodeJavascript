function orangesRotting(grid: number[][]): number {
  let queue = [];
  let seen = new Set();
  let fresh = 0;
  let minutes = 0;
  let freshFound = false;

  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 2) queue.push([row, col]);
      if (grid[row][col] === 1) fresh++;
    }
  }

  if (fresh === 0) return 0;

  while (queue.length) {
    let size = queue.length;
    freshFound = false;

    for (let i = 0; i < size; i++) {
      let [qr, qc] = queue.shift();

      for (let [dr, dc] of directions) {
        let newRow = qr + dr;
        let newCol = qc + dc;

        if (
          newRow >= 0 &&
          newCol >= 0 &&
          newRow < grid.length &&
          newCol < grid[0].length &&
          grid[newRow][newCol] === 1 &&
          !seen.has(`${newRow},${newCol}`)
        ) {
          freshFound = true;
          fresh--;
          grid[newRow][newCol] = 2;
          queue.push([newRow, newCol]);
          seen.add(`${newRow},${newCol}`);
        }
      }
    }
    if (freshFound === true) minutes++;
  }

  if (fresh > 0) return -1;

  return minutes;
}

/*
loop through grid
    count fresh oranges
    put rotten oranges in queue

Start BFS by having queue.lenght checked
    set minute var to false
        do directions
            if good (found fresh)
                decrease fresh
                turn to 2
                put in queue
                set minutes to true
    if minute is true? increae minute var tracker.

*/
