//TIME: O(n) - going through the entire linked list once. Then a different loop goes to the middle. The first loop being the worst case senerio
//SPACE: O(1) - Just creating pointers and basic counter variables.

function NodeList(val) {
  this.val = val;
  this.next = null;
}

function isEven(value) {
  let nodeToFindLength = head;
  let counter = 0;
  let actualMiddleLenght;

  while (nodeToFindLength !== null) {
    nodeToFindLength = nodeToFindLength.next;
    counter++;
  }

  nodeToFindLength = head;
  actualMiddleLenght = Math.floor(counter / 2);
  counter = 0;

  while (counter < actualMiddleLenght) {
    nodeToFindLength = nodeToFindLength.next;
    counter++;
  }

  return nodeToFindLength;
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
