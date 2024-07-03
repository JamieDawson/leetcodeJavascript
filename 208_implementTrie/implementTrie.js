class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (!node[c]) node[c] = {};
      node = node[c];
    }
    node.isWord = true;
  }

  search(word) {
    let node = this.root;
    for (let c of word) {
      if (node[c]) {
        node = node[c];
      } else {
        return false;
      }
    }
    return node.isWord === true;
  }

  startsWith(prefix) {
    let node = this.root;

    for (let c of prefix) {
      if (node[c]) {
        node = node[c];
      } else {
        return false;
      }
    }
    return true;
  }
}

const trie = new Trie();

// Insert words into the trie
trie.insert("apple");
trie.insert("app");

// // Test the search method
// console.log(trie.search("apple")); // true
// console.log(trie.search("app"));   // true
// console.log(trie.search("appl"));  // false
// console.log(trie.search("banana")); // false

// // Test the startsWith method
// console.log(trie.startsWith("app"));  // true
// console.log(trie.startsWith("ap"));   // true
// console.log(trie.startsWith("apple")); // true
// console.log(trie.startsWith("ban"));   // false
