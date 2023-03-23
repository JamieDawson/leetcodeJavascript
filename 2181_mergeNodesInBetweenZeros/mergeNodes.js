class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

var mergeNodes = function (head) {
  let sum = 0;
  let res = new ListNode();
  let ans = res;
  let current = head.next;

  while (current != null) {
    if (current.value != 0) {
      sum = sum + current.value;
    } else {
      res.next = new ListNode(sum);
      sum = 0;
      res = res.next;
    }
    current = current.next;
  }

  return ans.next;
};

let one = new ListNode(0);
let two = new ListNode(1);
let three = new ListNode(0);
let four = new ListNode(3);
let five = new ListNode(0);
let six = new ListNode(2);
let seven = new ListNode(2);
let eight = new ListNode(0);

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = seven;
seven.next = eight;

// let test1 = new ListNodes(0);
// let test2 = new ListNodes(0);
// let test3 = new ListNodes(0);
// test1.next = test2;
// test2.next = test3;
mergeNodes(one);

/*
Create sum variable to collect numbers between zeros
create res LinkedList to start adding them. Make it empty
Make ans  LinkedList to point to res. We will turn the ans.next value at the end.
Make variable called current to track 

while the current pointer isn't null
  if the current value isn't zero
    make sum equal sum + current value
  else
    make res.next equal a Node equal to sum
    set sum to zero
    move res to the next spot
  move current point to next pointer

  return ans.next because

*/

//https://leetcode.com/problems/merge-nodes-in-between-zeros/

/*
//CORRECT
    var res = new ListNode()
    var ans = res ;
    var current = head.next;
    var sum = 0;
    while(current){
              
            if(current.val != 0){
                sum = sum + current.val;
            }else{
                res.next = new ListNode(sum);
                sum = 0;
                res = res.next;
            }
        current = current.next;
            
    }
    return ans.next;
    */
