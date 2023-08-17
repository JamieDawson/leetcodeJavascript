class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var mergeInBetween = function (list1, a, b, list2) {
  let result = list1;
  let list1Pointer = list1;
  let list2Pointer = list2;
  let nodeAfterB = new ListNode(null);

  while (list1Pointer) {
    if (list1Pointer.next.val === a) break;
    list1Pointer = list1Pointer.next;
  }

  nodeAfterB.next = list1Pointer.next;
  list1Pointer.next = list2;

  while (nodeAfterB) {
    if (nodeAfterB.next.val === b) break;
  }
  nodeAfterB = nodeAfterB.next;

  //FOR TESTING ONLY - DELETE LATER
  while (result) {
    console.log(result.val);
    result = result.next;
  }

  return result;
};

/*
pointer for beginning of list1 to return
pointer for list1

Loop: if pointer.next ISN"T a
    keep scrolling

findB pointer

loop to find b
    if the next pointer isn't b, keep scrolling in list1.

scroll through the end of listb,

set the end of listb to findB.next pointer.

return pointer for beginning of list1 to return.
*/

let a = 3;
let b = 4;
let zero = new ListNode(1000000);
let one = new ListNode(1000001);
let two = new ListNode(1000002);
zero.next = one;
one.next = two;

let lzero = new ListNode(0);
let lone = new ListNode(1);
let ltwo = new ListNode(2);
let ltree = new ListNode(3);
let lfour = new ListNode(4);
let lfive = new ListNode(5);

lzero.next = lone;
lone.next = ltwo;
ltwo.next = ltree;
ltree.next = lfour;
lfour.next = lfive;

mergeInBetween(lzero, a, b, zero);
