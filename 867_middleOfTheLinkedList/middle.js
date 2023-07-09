//TIME: O(n) - going through the entire linked list once. Then a different loop goes to the middle. The first loop being the worst case senerio
//SPACE: O(1) - Just creating pointers and basic counter variables.

function NodeList(val) {
  this.val = val;
  this.next = null;
}

function isEven(value) {
  let current = head;
  let counter = 0;

  while (current !== null) {
    current = current.next;
    counter++;
  }

  current = head;
  counter = Math.floor(counter / 2);

  for (var i = 0; i < counter; i++) {
    current = current.next;
  }
  return current;
}

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

/*
OLD CODE:
*/

/*
var middleNode = function(head) {
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
};
*/
