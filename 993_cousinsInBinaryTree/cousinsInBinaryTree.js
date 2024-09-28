class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const bfs = (root) => {
  let queue = [[root, 0, -0]];
  let store = [];

  while (queue.length > 0) {
    let [value, level, parent] = queue.shift();

    store.push([value.val, level, parent]);
    parent = value.val;
    if (value.left !== null) queue.push([value.left, level + 1, parent]);
    if (value.right !== null) queue.push([value.right, level + 1, parent]);
  }
  return store;
};

const findLevels = (queue, x, y) => {
  let holdX;
  let holdY;
  for (var i = 0; i < queue.length; i++) {
    if (queue[i][0] === x) holdX = queue[i];
    if (queue[i][0] === y) holdY = queue[i];
  }

  return [holdX, holdY];
};

var isCousins = function (root, x, y) {
  let queue = bfs(root);
  console.log(queue);
  let findLevelsVar = findLevels(queue, x, y);

  if (findLevelsVar[0][1] !== findLevelsVar[1][1]) return false;
  if (findLevelsVar[0][2] === findLevelsVar[1][2]) return false;

  return true;
};
let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);

one.left = two;
one.right = three;
two.right = four;
three.right = five;

isCousins(one, 5, 4);

/*
1) use BFS - queue
Store them all in a queue tracking the level and value in an 2D array.
2) Go through the array to find the 2 numbers and track them.

Two main checks
1) if the levels arn't the same - return FALSE
2) If the value assoicated wiht level - 1 is the same - return FALSE

Return true/

*/
