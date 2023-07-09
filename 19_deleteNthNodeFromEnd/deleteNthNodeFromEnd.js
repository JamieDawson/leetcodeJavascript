function ListNode(val) {
  this.val = val;
  this.next = null;
}

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(null);
  dummy.next = head;
  let left = dummy;
  let right = head;

  for (var i = 0; i < n; i++) {
    right = right.next;
  }

  while (right) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;

  return dummy.next;
};

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

removeNthFromEnd(node1, 2);

//1. get lenght of list
//2. point around to delte node
//3. handle head delted

/*
var removeNthFromEnd = function (head, n) {
	let on = head;
	let length = 1;
	while (on) {
		length++;
		on = on.next;
	}

	let leftIndex = length - n - 1;
	if (leftIndex === 0) {
		return head.next;
	}

	on = head;
	while (leftIndex-- > 1) {
		on = on.next;
	}

	on.next = on.next.next;
	return head;
};
*/
