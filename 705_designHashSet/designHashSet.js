class MyHashSet {
  constructor() {
    this.arr = [];
  }

  add(key) {
    if (this.contains(key) === true) {
      return;
    } else {
      this.arr.push(key);
    }
  }

  remove(key) {
    const index = this.arr.indexOf(key);
    if (index > -1) {
      this.arr.splice(index, 1);
    }
    return this.arr;
  }

  contains(key) {
    for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === key) {
        return true;
      }
    }
    return false;
  }
}

let myHashSet = new MyHashSet();
myHashSet.add(1); // set = [1]
console.log(myHashSet);
myHashSet.add(2); // set = [1, 2]
console.log(myHashSet);
myHashSet.contains(1); // return True
console.log(myHashSet);
myHashSet.contains(3); // return False, (not found)
console.log(myHashSet);
myHashSet.add(2); // set = [1, 2]
console.log(myHashSet);
myHashSet.contains(2); // return True
myHashSet.remove(2); // set = [1]
console.log(myHashSet);
myHashSet.contains(2); // return False, (already removed)

//https://leetcode.com/problems/design-hashset/solutions/3578070/pure-javascript/
