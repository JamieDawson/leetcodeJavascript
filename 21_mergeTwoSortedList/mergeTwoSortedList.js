class ListNode {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

var mergeTwoLists = function (l1, l2) {};

/*
let current1 = l1
let current2 = l2

while current1 isn't null AND current2 isn't null
	if current1 va is smaller than current 2

*/

/*
OLD CODE:
*/

/*
	let dummy = new ListNode(-1);
	let head = dummy;

	while (l1 != null && l2 != null) {
		if (l1.val <= l2.val) {
			dummy.next = l1;
			l1 = l1.next;
		} else {
			dummy.next = l2;
			l2 = l2.next;
		}
		dummy = dummy.next;
	}

	if (l1 != null) {
		dummy.next = l1;
	} else {
		dummy.next = l2;
	}

	return head.next;
	*/
