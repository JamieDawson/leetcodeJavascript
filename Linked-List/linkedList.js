//ES6 version
class ListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const node = new ListNode(1);
node.next = new ListNode(2);
const head = new ListNode(0);
head.next = node;
console.log(head);

// let on = head;

// while (on !== null) {
//     console.log(on.val);
//     on = on.next;
// }
