class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

var getDecimalValue = function (head) {
  let finalResult = 0;
  let startPoint = 0;
  let arr = [128, 64, 32, 16, 8, 4, 2, 1];
  let hold = head;
  let count = 0;

  while (hold) {
    count++;
    hold = hold.next;
  }

  startPoint = 8 - count;

  // count = 8 - count;
  // console.log(count);

  hold = head;
  while (hold) {
    if (hold.value == 1) {
      finalResult += arr[startPoint];
    }
    hold = hold.next;
    startPoint++;
  }

  console.log(finalResult);
  return finalResult;
};

const val1 = new ListNode(1);
const val2 = new ListNode(0);
const val3 = new ListNode(1);

val1.next = val2;
val2.next = val3;
getDecimalValue(val1);

//https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

/*
128 64 32 16  8  4 2 1
[0   1  2  3  4  5 6 7]
Create varible called "finalResult" and set it to zero. 
create varible called startPoint to point in the array
Create array for 

Get size of linked list by going through each node.
    example: Size is 3.
    8 - 3 = 5
    Start pointing at the 5th spot in the array.

Loop through Linked List again.
    if node value is 1
        take array[#] and add it to finalResult.

Return finalResult.

*/
