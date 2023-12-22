function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var rightSideView = function (root, level = 0, rightSide = []) {
  const isBaseCase = root === null;
  if (isBaseCase) return rightSide;

  const isLastNode = level === rightSide.length;
  if (isLastNode) rightSide.push(root.val);

  return dfs(root, level, rightSide);
};

const dfs = (root, level, rightSide) => {
  if (root.right) rightSideView(root.right, level + 1, rightSide);
  if (root.left) rightSideView(root.left, level + 1, rightSide);

  return rightSide;
};

var rightSideView = function (root) {
  if (!root) return [];

  let queue = [[root, 0]];
  let finalArray = [];

  while (queue.length > 0) {
    let [current, level] = queue.shift();
    // console.log(current.val);

    if (!finalArray[level]) {
      finalArray.push([]);
      finalArray[level].push(current.val);
    } else {
      finalArray[level].push(current.val);
    }

    if (current.left !== null) queue.push([current.left, level + 1]);
    if (current.right !== null) queue.push([current.right, level + 1]);
  }

  for (var i = 0; i < finalArray.length; i++) {
    finalArray[i] = findLastValueInArray(finalArray[i]);
  }

  return finalArray;
};

const findLastValueInArray = (arr) => {
  const end = arr.length - 1;

  return arr[end];
};
