function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  const dummyHead = new ListNode(null);
  let tail = dummyHead;
  let carry = 0;
  let current1 = l1;
  let current2 = l2;

  while (current1 !== null || current2 !== null || carry === 1) {
    const val1 = current1 === null ? 0 : current1.val;
    const val2 = current2 === null ? 0 : current2.val;
    const sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;
    const digit = sum % 10;

    if (current1 !== null) current1 = current1.next;
    if (current2 !== null) current2 = current2.next;

    tail.next = new ListNode(digit);
    tail = tail.next;
  }
  console.log(dummyHead.next);
  return dummyHead.next;
};

let n1a = new ListNode(2);
let n2a = new ListNode(4);
let n3a = new ListNode(3);

n1a.next = n2a;
n2a.next = n3a;

let n1b = new ListNode(5);
let n2b = new ListNode(6);
let n3b = new ListNode(4);

n1b.next = n2b;
n2b.next = n3b;

addTwoNumbers(n1a, n1b);

/*
var addTwoNumbers = function (l1, l2) {
  const dummyHead = new ListNode(null);
  let tail = dummyHead;
  let carry = 0;
  let current1 = l1;
  let current2 = l2;

  while (current1 !== null || current2 !== null || carry === 1) {
    const val1 = current1 === null ? 0 : current1.val;
    const val2 = current2 === null ? 0 : current2.val;
    const sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;
    const digit = sum % 10;

    if (current1 !== null) current1 = current1.next;
    if (current2 !== null) current2 = current2.next;

    tail.next = new ListNode(digit);
    tail = tail.next;
  }
  console.log(dummyHead.next);
  return dummyHead.next;
};

*/
