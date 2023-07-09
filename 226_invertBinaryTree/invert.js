//Iterative solution:

var invertTree = function (root) {
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    if (current !== null) {
      stack.push(current.left);
      stack.push(current.right);
      let temp = current.left;
      current.left = current.right;
      current.right = temp;
    }
  }
  return root;
};

/*
Time: O(n) - going through entire Linked List
Space: O(n) - Creating a stack for every call

*/

// Recusrive soltuion:
var invertTree = function (root) {
  if (root === null) return null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root; //return entire root since it's been inverted.
};

//TIME: O(n) - loop through each node
//SPACE: O(n) - Creating call stack which adds space.
//n is number of nodes inside head!
//1. if root is null, return null
//2. Create temp var and assing it to root.left
//3. Change root.left to equal root.right
//4. Change root.right to equal to temp var
//5. invertTree(root.left)
//6. invertTree(root.right)
