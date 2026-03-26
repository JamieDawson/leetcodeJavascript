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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let current = new ListNode(-1);
    let temp = current;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
            current = current.next;
        } else {
            current.next = list2;
            list2 = list2.next;
            current = current.next;
        }
    }

    if (list1) current.next = list1;
    if (list2) current.next = list2;

    return temp.next;
};

/*
Time: O(n + m)
Space: O(1)

*/