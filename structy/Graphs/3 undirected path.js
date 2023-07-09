const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};

const buildGraph = (edges) => {
  const graph = {};

  for (edge of edges) {
    const [a, b] = edge;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const hasPath = (graph, src, dest, visited) => {
  if (src === dest) return true;
  if (visited.has(src)) return false;
  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dest, visited) === true) {
      return true;
    }
  }
  return false;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

undirectedPath(edges, "j", "m"); // -> true

//TIME: O(e) - number of edges
//SPACE: O(n) = number of nodes

/*
if src === dest return true
if src is invisited, return false
push src in visited

for let neighbor of graph[src]
    if hasPath(graph, neighbor, dest, visited) is true
        return true

return false;

*/
