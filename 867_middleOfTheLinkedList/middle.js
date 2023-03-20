function NodeList(val) {
  this.val = val;
  this.next = null;
}

function isEven(value) {
  let nodeToFindLength = value;
  let counter = 0;
  let actualMiddleLenght;
  let headNode = value;

  while (nodeToFindLength !== null) {
    nodeToFindLength = nodeToFindLength.next;
    counter++;
  }

  actualMiddleLenght = Math.round(counter / 2) - (counter % 2);
  counter = 0;

  while (counter < actualMiddleLenght) {
    headNode = headNode.next;
    counter++;
  }

  return headNode;
}

// var middleNode = function (head) {
// 	slow = fast = head;
// 	while (fast && fast.next) {
// 		slow = slow.next;
// 		fast = fast.next.next;
// 	}
// 	console.log(slow);
// 	return slow;
// };

let node1 = new NodeList(1);
let node2 = new NodeList(2);
let node3 = new NodeList(3);
let node4 = new NodeList(4);
let node5 = new NodeList(5);
//let node6 = new NodeList(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log(isEven(node1));
