class LRUCache {
  constructor(capacity) {
    //initialize hash map, linked list, save capacity, size
    this.map = {};
    this.list = new DoublyLinkedList();
    this.capacity = capacity;
    this.size = 0;
  }

  // return value, or -1
  get(key) {
    //if key does NOT exist, return -1
    if (!this.map[key]) return -1;
    //if key exist,
    //move to front of linked list
    //return value
    const node = this.map[key];
    this.list.move2Front(node);
    return node.value;
  }
  put(key, value) {
    //key exist
    // -> update value, move to front
    if (this.map[key]) {
      const node = this.map[key];
      node.value = value;
      this.list.move2Front(node);
      return;
    }
    //key doesn't exist
    //if at capacity => remove last node from listed list and hash map
    //derement size
    if (this.size === this.capacity) {
      const lastNode = this.list.removeLast();
      delete this.map[lastNode.key];
      this.size -= 1;
    }

    //add to linked list
    //save to hash mpa
    // increment size
    const newNode = new ListNode(key, value);
    this.list.add(newNode);
    this.map[key] = newNode;
    this.size += 1;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new ListNode();
    this.tail = new ListNode();
    this.connect(this.head, this.tail);
  }

  add(node) {
    this.connect(node, this.head.next);
    this.connect(this.head, node);
  }
  //return node it's deleting.
  removeLast() {
    const lastNode = this.tail.prev;
    this.delete(lastNode);
    return lastNode;
  }
  move2Front(node) {
    this.delete(node);
    this.add(node);
  }
  connect(node1, node2) {
    node1.next = node2;
    node2.prev = node1;
  }
  delete(node) {
    this.connect(node.prev, node.next);
  }
}

class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

//HOW IT STARTS:

// /**
//  * @param {number} capacity
//  */
// var LRUCache = function (capacity) {};

// /**
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function (key) {};

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {};
