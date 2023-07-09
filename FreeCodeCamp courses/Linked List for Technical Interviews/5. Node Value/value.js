class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getNodeValue = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  getNodeValue(head.next, index - 1);
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(getNodeValue(a, 2)); // 'c'

/*
var current = points to head
var counter = 0 - helps with counting

findIndexFunc(current, counter, index)


FUNCTION: findIndexFunc(current, counter, index)
    if current is equal null OR counter is greater than index
        return null
    if(counter is equal index)
        return current.val
    findIndexFunc(current.next, counter++, index)
    

*/

/*
RECURSION
*/
/*
const getNodeValue = (head, index) => {
  let current = head;
  let counter = 0;

  return findIndexFunc(current, counter, index);
};

const findIndexFunc = (current, counter, index) => {
  console.log(counter);
  if (current === null || counter > index) return null;
  if (counter === index) return current.val;
  counter++;
  return findIndexFunc(current.next, counter, index);
};
*/

/*
Var current = pointer to head
coutner = 0

while current is NULL and counter is less than or equal to index
    if counter is equal to index
        return node value

return null
*/

/*
//ITERATIVE CODE
const getNodeValue = (head, index) => {
  let current = head;
  let counter = 0;

  while (current !== null && counter <= index) {
    if (counter === index) {
      return current.val;
    }
    current = current.next;
    counter++;
  }
  return null;
};
*/
