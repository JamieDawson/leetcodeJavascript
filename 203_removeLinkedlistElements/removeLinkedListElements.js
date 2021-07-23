function NodeList(val) {
	this.val = val;
	this.next = null;
}

var removeElements = function (head, val) {
	if (head == null) {
		return null;
	} else {
		if (head.val == val) {
			return removeElements(head.next, val);
		} else {
			head.next = removeElements(head.next, val);
		}
	}
	//console.log(head);
	return head;
};

let node1 = new NodeList(1);
let node2 = new NodeList(2);
let node3 = new NodeList(6);
let node4 = new NodeList(3);
let node5 = new NodeList(4);
let node6 = new NodeList(5);
let node7 = new NodeList(6);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

let number = 6;

removeElements(node1, number);
