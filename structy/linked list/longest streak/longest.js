class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const longestStreak = (head) => {
  let maxStreak = 0;
  let currentStreak = 0;
  let prevVal = null;
  let current = head;

  while (current) {
    if (current.val === prevVal) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }

    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }

    prevVal = current.val;
    current = current.next;
  }
  return maxStreak;
};

const a = new Node(3);
const b = new Node(3);
const c = new Node(3);
const d = new Node(3);
const e = new Node(9);
const f = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 3 -> 3 -> 3 -> 3 -> 9 -> 9

console.log(longestStreak(a)); // 4
