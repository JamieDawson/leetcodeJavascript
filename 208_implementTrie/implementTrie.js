class Node {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
    console.log(this.root);
  }

  insert(word) {
    //start with the root node
    let currentNode = this.root;
    //take every character in the word
    for (let letter of word) {
      if (!currentNode.children.has(letter)) {
        //if not add it to children
        currentNode.children.set(letter, new Node());
      }
      //process to the next depth of the trie
      currentNode = currentNode.children.get(letter);
    }
    currentNode.isEnd = true;
  }
  search(word) {
    if (!word.length) return false;
    //start with root node
    let currentNode = this.root;
    //for every character in the word
    for (let letter of word) {
      //check if it exist int he children and return false if not
      if (!currentNode.children.has(letter)) return false;
      //proceed to the next depth of the trie
      currentNode = currentNode.children.get(letter);
    }
    //we checked every letter of a word, but it is in the end of the trie?
    return currentNode.isEnd;
  }
  startsWith(prefix) {
    if (!prefix.length) return false;
    //start with root node
    let currentNode = this.root;
    //for every character in the word
    for (let letter of prefix) {
      //check if it exist int he children and return false if not
      if (!currentNode.children.has(letter)) return false;
      //proceed to next depth of the trie
      currentNode = currentNode.children.get(letter);
    }
    return true;
  }
}
//https://www.youtube.com/watch?v=9UZZ0i33h64

let trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

//functions:  insert,  search, startsWith

//HOW IT STARTS

// var Trie = function() {

// };

// /**
//  * @param {string} word
//  * @return {void}
//  */
// Trie.prototype.insert = function(word) {

// };

// /**
//  * @param {string} word
//  * @return {boolean}
//  */
// Trie.prototype.search = function(word) {

// };

// /**
//  * @param {string} prefix
//  * @return {boolean}
//  */
// Trie.prototype.startsWith = function(prefix) {

// };
// */
// /**
//  * Your Trie object will be instantiated and called as such:
//  * var obj = new Trie()
//  * obj.insert(word)
//  * var param_2 = obj.search(word)
//  * var param_3 = obj.startsWith(prefix)
//  */
