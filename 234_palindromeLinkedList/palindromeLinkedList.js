function NodeList(val) {
	this.val = val;
	this.next = null;
}

/*
    two pointers for begining and end
    make end get to the end.
    while
*/
var isPalindrome = function (head) {
	//console.log(head);
};

let node1 = new NodeList(1);
let node2 = new NodeList(2);
let node3 = new NodeList(2);
let node4 = new NodeList(1);
node1.next = node2;
node2.next = node3;
node3.next = node4;

isPalindrome(node1);
