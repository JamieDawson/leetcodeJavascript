function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var test = function (list) {
  let list1 = list.shift();
  let list2 = list1.shift();

  console.log(list1);
  console.log(list2);
};

let lists = [[1, 4, 5]];

test(lists);
