function NodeList(val) {
	this.val = val;
	this.next = null;
}

var reverseList = function (head) {
	let prev = null;
	let on = head;
	while (on !== null) {
		let temp = on.next;
		on.next = prev;
		prev = on;
		on = temp;
	}
	return prev;
};

//tail recursion
// var reverseListR = function (on, prev = null) {
// 	console.log(prev);
// 	if (on === null) return prev;

// 	let temp = on.next;
// 	on.next = prev;
// 	return reverseListR(temp, on);
// };

var reverseListR = function (head) {
	let prev = null;

	while (head !== null) {
		let NextNode = head.next;
		head.next = prev;
		prev = head;
		head = NextNode;
	}
	console.log(prev);
	return prev;
};

let node1 = new NodeList(1);
let node2 = new NodeList(2);
let node3 = new NodeList(3);
node1.next = node2;
node2.next = node3;
let test = null;

reverseListR(node1, test);
