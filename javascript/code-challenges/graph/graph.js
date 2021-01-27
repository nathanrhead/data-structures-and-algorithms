'use strict';

const Edge = require('./edge');
// const Vertex = require('./vertex');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {

    // This could work without having to create a new instance of Vertex everywhere by doing this:
    // const vertex = new Vertex(value), with the value being the argument passed to the addVertex function. Not changing it now, because tests are all built around this demo version.
    this.adjacencyList.set(vertex, []);
    // // It returns the new vertex.
    return vertex;
  }

  getMap() {
    if (!this.adjacencyList.size) return null;
    return this.adjacencyList;
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('Error: missing either a starting or an ending vertex, or both.');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('Error: invalid vertex', vertex);
    }
    return this.adjacencyList.get(vertex);
  }

  // Breadth-first search: use a queue to track where you've been.
  bfs(startNode) {
    if (!startNode) return null;

    const queue = [];

    // A set is an object that will only store unique keys.
    const visitedNodes = new Set();

    queue.push(startNode);
    visitedNodes.add(startNode);

    while (queue.length) {
      // Remove the first item from the queue.
      const currentNode = queue.shift();

      // Get the neighbors of the current node.
      const neighbors = this.getNeighbors(currentNode);

      // Loop over all the neighbors.
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;

        // If the Set has the node that I'm looking for, continue on to the next node.
        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          // Otherwise, I haven't been there and I need to add it to the Set.
          visitedNodes.add(neighborNode);

          // Put it into the queue
          queue.push(neighborNode);
        }
      }
    }
    // Return the Set, so that there is a list of all visited nodes.
    return visitedNodes;
  }

  // Depth-first search. Use recursion to traverse.
  dfs(startNode) {
    if(!startNode) return null;

    const visitedNodes = new Set();

    const _traverseNeighbors = (node) => {
      // Add the node to the Set.
      visitedNodes.add(node);

      // Get all the node's neighbors.
      const neighbors = this.getNeighbors(node);

      // Loop over all the neighbors.
      for (let edge of neighbors) {
        // If the set doesn't have the node:
        if (!visitedNodes.has(edge.vertex)) {
          // then run the following function again, which will add the node to the set and get the neighboring nodes and loop and repeat.
          _traverseNeighbors(edge.vertex);
        }
      }
    };
    _traverseNeighbors(startNode);
    return visitedNodes;
  }

  // Charts a path from a start node to an end node.
  pathTo(startNode, endNode) {
    const stack = [];
    const visitedNodes = new Set();
    const parentPath = new Map();

    stack.push(startNode);
    visitedNodes.add(startNode);

    while (stack.length) {
      const currentNode = stack.pop();

      // Ensure that the current node is not the end node.
      if (currentNode === endNode) {
        return parentPath;
      }

      // Get all of the neighbors
      const neighbors = this.getNeighbors(currentNode);

      // Loop over the edges
      for (let neighbor of neighbors) {
        // Find the vertex node
        const neighborNode = neighbor.vertex;

        // Check whether the Set contains that node
        if (visitedNodes.has(neighborNode)) {
          // stopp looking at this node and move to the next.
          continue;
        } else {
          // Otherwise, add the node to the Set.
          visitedNodes.add(neighborNode);

          // Add it to the stack;
          stack.push(neighborNode);

          // In the parentPath map, set a path with this as the key and current Node as the value
          parentPath.set(neighborNode, currentNode);
        }
      }
      return parentPath;
    }
  }

  // It returns the total number of nodes in the graph.
  size() {
    if (!this.adjacencyList.size) return 0;
    return this.adjacencyList.size;
  }

  getEdge(array) {
    if (!array[0] || !array[1]) {
      return false, 0;
    }
    let outputBool = false; //fix this
    let outputWeight = 0;
    for (let i = 0; i <= array.length - 1; i++) {
      let neighbor = this.getNeighbors(array[i]);
      for (let j = 0; j <= neighbor.length - 1; j++) {
        if (array[i + 1] === neighbor[j].vertex) {
          outputWeight += neighbor[j].weight;
          outputBool = true;
        }
      }
      if (outputBool === false) {
        outputBool = false;
        outputWeight = 0;
        return [outputBool, outputWeight];
      }
    }
    return [outputBool, outputWeight];
  }
}

module.exports = Graph;
