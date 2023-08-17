class OrderedStream {
  constructor(n) {
    this.map = new Map();
    this.key = 1;
  }
  insert(idKey, value) {
    this.map.set(idKey, value); // add the key-value to the map
    const result = [];
    // until able to find the key in the map, add it to the resultant chunk
    // each time the next greater key is found, it will start the result from that key value
    while (this.map.has(this.key)) {
      // O(n)
      result.push(this.map.get(this.key));
      ++this.key;
    }
    return result;
  }
}

let os = new OrderedStream(5);
os.insert(3, "ccccc"); // Inserts (3, "ccccc"), returns [].
os.insert(1, "aaaaa"); // Inserts (1, "aaaaa"), returns ["aaaaa"].
os.insert(2, "bbbbb"); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
os.insert(5, "eeeee"); // Inserts (5, "eeeee"), returns [].
os.insert(4, "ddddd"); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].
// Concatentating all the chunks returned:
// [] + ["aaaaa"] + ["bbbbb", "ccccc"] + [] + ["ddddd", "eeeee"] = ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"]
