class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const sumList = (head) => {
//   if (head === null) return 0;
//   let current = head;
//   let sum = 0;
//   while (current !== null) {
//     sum += current.val;
//     current = current.next;
//   }
//   console.log(sum);
//   return sum;
// };

const sumList = (head) => {
  let sum = 0;
  let current = head;

  sum = fillSum(current, sum);
  return sum;
};

const fillSum = (current, sum) => {
  if (current === null) {
    return sum;
  }
  sum += current.val;
  return fillSum(current.next, sum);
};

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

console.log(sumList(a));
