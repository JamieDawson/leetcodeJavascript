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
var reverseListR = function (on, prev = null) {
	if (on === null) return prev;

	let temp = on.next;
	on.next = prev;

	console.log(JSON.stringify(temp));
	console.log(JSON.stringify(on));
	console.log(`\n`);

	return reverseListR(temp, on);
};

let node1 = new NodeList(1);
let node2 = new NodeList(2);
let node3 = new NodeList(3);
node1.next = node2;
node2.next = node3;
let test = null;

reverseListR(node1, test);
