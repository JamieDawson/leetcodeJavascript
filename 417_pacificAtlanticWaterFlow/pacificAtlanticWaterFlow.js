var pacificAtlantic = function (heights) {
  const ROWS = heights.length,
    COLS = heights[0].length;
  const pac = new Set(),
    atl = new Set();
  const res = [];

  function dfs(r, c, visit, prevHeight) {
    // if (
    //   visit.has(r + "," + c) ||
    //   r < 0 ||
    //   c < 0 ||
    //   r === ROWS ||
    //   c === COLS ||
    //   heights[r][c] < prevHeight
    // )
    //   return;

    if (visit.has(r + "," + c)) return;
    if (r < 0) return;
    if (c < 0) return;
    if (r === ROWS) return;
    if (c === COLS) return;
    if (heights[r][c] < prevHeight) return;

    visit.add(r + "," + c);
    dfs(r + 1, c, visit, heights[r][c]);
    dfs(r - 1, c, visit, heights[r][c]);
    dfs(r, c + 1, visit, heights[r][c]);
    dfs(r, c - 1, visit, heights[r][c]);
  }

  for (let c = 0; c < COLS; c++) {
    dfs(0, c, pac, heights[0][c]);
    dfs(ROWS - 1, c, atl, heights[ROWS - 1][c]);
  }

  for (let r = 0; r < ROWS; r++) {
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, COLS - 1, atl, heights[r][COLS - 1]);
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (pac.has(r + "," + c) && atl.has(r + "," + c)) res.push([r, c]);
    }
  }

  return res;
};

let heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
pacificAtlantic(heights);
