class ListNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

var isBalanced = function (tree) {
  let isBalanced = true;
  function dfs(t) {
    if (!t) return 0;
    const left = dfs(t.left);
    const right = dfs(t.right);
    console.log(left);
    if (Math.abs(left - right) > 1) {
      isBalanced = false;
    }
    return 1 + Math.max(left, right);
  }
  dfs(tree);
  return isBalanced;
};

let three = new ListNode(3);
let nine = new ListNode(9);
let twenty = new ListNode(20);
let fifteen = new ListNode(15);
let seven = new ListNode(7);

three.left = nine;
three.right = twenty;
twenty.left = fifteen;
twenty.right = seven;

console.log(isBalanced(three));
