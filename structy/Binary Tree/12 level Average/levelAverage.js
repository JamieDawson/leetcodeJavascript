// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const levelAverages = (root) => {
  if (root === null) return [];
  let queue = [[root, 0]]; //bfs
  let allArrays = [];

  while (queue.length > 0) {
    let [current, level] = queue.shift();

    if (!allArrays[level]) {
      allArrays.push([]);
      allArrays[level].push(current.val);
    } else {
      allArrays[level].push(current.val);
    }

    if (current.left !== null) queue.push([current.left, level + 1]);
    if (current.right !== null) queue.push([current.right, level + 1]);
  }

  for (var i = 0; i < allArrays.length; i++) {
    allArrays[i] = getSum(allArrays[i]);
  }

  return allArrays;
};

const getSum = (arr) => {
  let sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

levelAverages(a); // -> [ 3, 7.5, 1 ]
