function NodeList(val) {
	this.val = val;
	this.next = null;
}

var length = function (head) {
	var size = 0;
	while (head) {
		head = head.next;
		size++;
	}
	return size;
};

var getIntersectionNode = function (headA, headB) {
	var sizeA = length(headA);
	var sizeB = length(headB);
	//console.log(sizeA);
	//console.log(sizeB);

	while (sizeA > sizeB) {
		headA = headA.next;
		sizeA--;
	}

	while (sizeA < sizeB) {
		headB = headB.next;
		sizeB--;
	}

	while (headA != headB) {
		headA = headA.next;
		headB = headB.next;
	}

	console.log(headA);
	return headA;
};

let nodea1 = new NodeList(4);
let nodea2 = new NodeList(1);
let nodea3 = new NodeList(8);
let nodea4 = new NodeList(4);
let nodea5 = new NodeList(5);

nodea1.next = nodea2;
nodea2.next = nodea3;
nodea3.next = nodea4;
nodea4.next = nodea5;

let nodeb1 = new NodeList(5);
let nodeb2 = new NodeList(6);
let nodeb3 = new NodeList(1);

nodeb1.next = nodeb2;
nodeb2.next = nodeb3;
nodeb3.next = nodea3;

getIntersectionNode(nodea1, nodeb1);
