
/* Graphs: Breadth-first search */


// 1st index - is a node
// all others indexes - is a directed edges

// directed, uncycled graph
var graph = [
  [0, 1, 1, 1, 0], // 0 points to 1,2,3
  [0, 0, 1, 0, 0], // 1 points to 2
  [1, 1, 0, 0, 0], // 2 points to 0,1
  [0, 0, 0, 1, 0], // 3 points to self(3)
  [0, 1, 0, 0, 0]  // 4 points to 1
];
// no node points to 4, so if we start from 4 it goes to infinity

// distances - is just qty of edges
// starting from node 1
const result = {
  0: 2,
  1: 0, // Distance of starting vertex from itself is always 0
  2: 1,
  3: 3,
  4: Infinity
}


// This function is basicly count number of edges 
// from current vertex to all other vertices.
function breadth_first_search(graph, vertex) {

  const result = [];
  const queue = [vertex]; // starting vertex is already in the queue

  // mark all vertices as Infinity in result
  // ( there may be no direction from a given vertex ) 
  for (let i = 0; i < graph.length; i++) {
    result[i] = Infinity;
  } 

  // Distance of source vertex from itself is always 0
  result[vertex] = 0;

  // index number of current vertex
  let current;

  while (queue.length > 0) {
    // getting the index number of a vertex from the queue
    current = queue.shift();

    // getting an array of all vertices of the current vertex
    let curConnected = graph[current];

    // temporary array of neighborgs of the current vertex
    let neighborIndex = [];

    // idx - the 2nd index of graph[current], 
    // because it shows the first linking vertex to the current one
    let idx = curConnected.indexOf(1);

    // indexOf() - returns -1 if element not found
    while (idx != -1) {
      // push neighbors
      neighborIndex.push(idx);
      // plussing index of idx till iterate over curConnected
      idx = curConnected.indexOf(1, idx + 1);
    }

    // iterate over neighborIndex
    for (let j = 0; j < neighborIndex.length; j++) {

      // (condition) - means that the distance has not yet been set
      if (result[neighborIndex[j]] == Infinity) {
        result[neighborIndex[j]] = result[current] + 1;
        queue.push(neighborIndex[j]);
      }
    }
  }
  return result;
}

console.log(breadth_first_search(graph, 1)); // [2, 0, 1, 3, Infinity]





// this version returns object
// function bfs(graph, root) {
//   let dist = {};

//   for (let i = 0; i < graph.length; i++) {
//     dist[i] = Infinity;
//   }

//   dist[root] = 0;

//   let queue = [root];
//   let current;

//   while (queue.length != 0) {
//     current = queue.shift();

//     let curConnected = graph[current];
//     let neighborIdx = [];
//     let idx = curConnected.indexOf(1);

//     while (idx != -1) {
//       neighborIdx.push(idx);
//       idx = curConnected.indexOf(1, idx + 1);
//     }

//     for (let j = 0; j < neighborIdx.length; j++) {
//       if (dist[neighborIdx[j]] == Infinity) {
//         dist[neighborIdx[j]] = dist[current] + 1;
//         queue.push(neighborIdx[j]);
//       }
//     }
//   }

//   return dist;
// }