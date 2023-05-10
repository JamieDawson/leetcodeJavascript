//https://structy.net/problems/linked-list-values

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValues = (head) => {
  let arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListValues(a);

/*
//RECURSIVE
*/
const linkedListValues = (head) => {
  let values = [];
  fillValues(head, values);
  return values;
};

const fillValues = (head, values) => {
  if (head === null) return;

  values.push(head.val);
  fillValues(head.next, values);
};
