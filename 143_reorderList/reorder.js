class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var reorderList = function (head) {
  let mid = findMiddle(head);
  let reversedFromMiddle = reverseList(mid);

  reorder(head, reversedFromMiddle);
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

var reverseList = (head) => {
  let prev = null;

  while (head) {
    let nextNode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }
  return prev;
};

var reorder = (l1, l2) => {
  let next = null;
  let first = l1;
  let second = l2;

  while (second.next) {
    next = first.next;
    first.next = second;
    first = next;

    next = second.next;
    second.next = first;
    second = next;
  }
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
