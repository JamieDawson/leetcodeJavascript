const shortestPath = (edges, nodeA, nodeB) => {
  let graph = makeGraph(edges);

  let visited = new Set([nodeA]);
  let queue = [[nodeA, 0]];

  while (queue.length > 0) {
    let [node, distance] = queue.shift();
    if (node === nodeB) return distance;

    for (let neighbor of graph[node]) {
      console.log(visited);
      if (!visited.has(neighbor)) {
        queue.push([neighbor, distance + 1]);
        visited.add(neighbor);
      }
    }
  }
  return -1;
};

const makeGraph = (edges) => {
  let graph = {};

  for (let edge of edges) {
    let [a, b] = edge;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(shortestPath(edges, "w", "z")); // -> 2
