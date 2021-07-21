function NodeList(val) {
	this.val = val;
	this.next = null;
}

var deleteDuplicates = function (head) {
	let cur = head;

	while (cur != null && cur.next != null) {
		if (cur.next.val == cur.val) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}
	console.log(head);
	return head;
};

let node1 = new NodeList(1);
let node2 = new NodeList(2);
let node3 = new NodeList(3);
let node4 = new NodeList(4);
let node5 = new NodeList(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

deleteDuplicates(node1);
