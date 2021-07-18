function NodeList(val) {
	this.val = val;
	this.next = null;
}

var hasCycle = function (head) {
	let slow = head;
	let fast = head;

	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) return false;
	}
	return true;
};

let node1 = new NodeList(1);
let node2 = new NodeList(2);
let node3 = new NodeList(3);
let node4 = new NodeList(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node1;
