function ListNode(val) {
	this.val = val;
	this.next = null;
}

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

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

removeNthFromEnd(node1, 0);

//1. get lenght of list
//2. point around to delte node
//3. handle head delted
