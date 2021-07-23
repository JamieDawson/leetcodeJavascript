function NodeList(val) {
	this.val = val;
	this.next = null;
}

var reverse = function (head) {
	let prev = null;
	while (head !== null) {
		let NextNode = head.next;
		head.next = prev;
		prev = head;
		head = NextNode;
	}
	return prev;
};

var addTwoNumbers = function (l1, l2) {
	l1 = reverse(l1);
	l2 = reverse(l2);

	let sum1Number = 0;

	while (l1 !== null) {
		sum1Number = sum1Number.concat(l1.val);
		l1 = l1.next;
	}
	console.log(sum1Number);
};

let n1a = new NodeList(2);
let n2a = new NodeList(4);
let n3a = new NodeList(3);

n1a.next = n2a;
n2a.next = n3a;

let n1b = new NodeList(5);
let n2b = new NodeList(6);
let n3b = new NodeList(4);

n1b.next = n2b;
n2b.next = n3b;

addTwoNumbers(n1a, n1b);
