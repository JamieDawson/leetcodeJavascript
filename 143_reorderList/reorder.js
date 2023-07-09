class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const reorder = (l1, l2) => {
  let first = l1;
  let second = l2;
  let next = null;

  while (second.next) {
    next = first.next;
    first.next = second;
    first = next;

    next = second.next;
    second.next = first;
    second = next;
  }
};

var findMiddle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

var reverseNodes = (head) => {
  let current = head;
  let prev = null;

  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
};

var reorderList = function (head) {
  let current = head;
  let middle = findMiddle(current);
  middle = reverseNodes(middle);
  reorder(head, middle);
};

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);

one.next = two;
two.next = three;
three.next = four;
four.next = five;

reorderList(one);

/*
1) Find the middle of the list
2) reverse from the middle
3) swap values


*/
