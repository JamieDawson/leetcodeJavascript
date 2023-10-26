var cloneGraph = function (node, copy = new Map()) {
  if (!node) return null;

  if (!copy.has(node.val)) {
    copy.set(node.val, new Node(node.val));
    copy.get(node.val).neighbors = node.neighbors.map((neighbor) =>
      cloneGraph(neighbor, copy)
    );
  }

  return copy.get(node.val);
};

/*
SOLUTION: Use DFS recursive to check if the map has the value, set the key has the main node and the value as the copy of the new node. Then attach the neighbords from node to the copy by mapping through them. Return the copy.
TIME: O(n) = edges + vertices 
SPACE: O(n) = edges + vertices 
*/
