class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var swapNodes = function (head, k) {
  let fullLength = 0;
  let current = head;

  while (current) {
    fullLength++;
    current = current.next;
  }
  console.log(fullLength);
};

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

swapNodes(a);

/*
1. Get lenght of LL
2. subtract lenght - k to find where to swap with k
3. loop through 
*/
