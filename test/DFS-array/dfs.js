const dfs = (arr, i, j) => {
  let rows = arr.length;
  let cols = arr[0].length;
  let visited = [];

  if (i < 0 || j < 0 || i >= rows || j >= cols || arr[i][j] !== 1) return;

  arr[i][j] = -1;

  dfs(arr, i + 1, j);
  dfs(arr, i - 1, j);
  dfs(arr, i, j + 1);
  dfs(arr, i, j - 1);
};

let arr = [
  [1, 1, 1],
  [0, 1, 0],
  [1, 0, 0],
];

dfs(arr, 0, 0);

console.log(arr);

/*
Visit all connected 1's

let queue = [];
let visited = [];

checks:
rows >= 0 rows < arr.length cols >= arr[0] cols < arr.length

store in visited;

up,down,left,right

*/
