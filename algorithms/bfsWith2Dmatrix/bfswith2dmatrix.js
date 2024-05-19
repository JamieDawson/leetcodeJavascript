const bfs = (grid, start) => {
  let rowSize = grid.length;
  let colSize = grid[0].length;
  let visited = Array(rowSize).fill([]);
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  //fill the visited array with all false values.
  for (var i = 0; i < rowSize; i++) {
    for (var j = 0; j < colSize; j++) {
      visited[i][j] = "false";
    }
  }

  console.log(visited);
};

const grid = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
];

const start = [0, 0]; // Start at the top-left corner (row 0, column 0)

// Run BFS
bfs(grid, start);
