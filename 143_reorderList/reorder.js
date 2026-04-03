class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    let slow = head;
    let fast = head;

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = slow.next;
    slow.next = null;

    let prev = null;

    while(second) {
        let nextNode = second.next;
        second.next = prev;
        prev = second;
        second = nextNode
    }

    second = prev;
    let first = head;
    let final = head;

    while(second){
        let one = first.next;
        let two = second.next;

        first.next = second;
        second.next = one;

        first = one;
        second = two
    }

};

/*
slow/fast pointer

reverse middle list

reorder.


*/
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);

one.next = two;
two.next = three;
three.next = four;
four.next = five;

reorderList(one);

/*
1) Find the middle of the list
2) reverse from the middle
3) swap values
*/
