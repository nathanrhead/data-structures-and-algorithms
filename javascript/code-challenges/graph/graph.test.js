'use strict';

const Graph = require('./graph');
const Vertex = require('./vertex');

describe('Graphs', () => {

  let graph = new Graph;
  const vertex1 = new Vertex('Caleb');
  const vertex2 = new Vertex('Tim');
  const vertex3 = new Vertex('Ben');
  const vertex4 = new Vertex('Sam');
  // const vertex5 = new Vertex('Norah');
  // const vertex6 = new Vertex('Henry');

  it ('returns null on an empty graph', () => {
    let results = graph.getMap();
    expect(results).toBe(null);
  });

  it ('adds a vertex to the graph', () => {
    let results = graph.addVertex(vertex1);
    expect(graph.adjacencyList.size).toBe(1);
    expect(results.value).toEqual('Caleb');
  });

  it ('adds an edge to the graph', () => {
    graph.addVertex(vertex2);
    graph.addDirectedEdge(vertex1, vertex2, 10);
    expect(graph.getNeighbors(vertex1)[0].weight).toEqual(10);
    expect(graph.getNeighbors(vertex1)[0].vertex.value).toEqual('Tim');
  });

  it ('returns a graph with only two nodes and one edge', () => {
    let results = graph.getMap();
    expect(results.size).toBe(2);
    expect(graph.getNeighbors(vertex2)).toEqual([]);
  });

  it ('retrieves a collection of all nodes from the graph', () => {
    graph.addVertex(vertex3);
    expect(graph.getMap().size).toBe(3);
  });

  it ('retrieves all neighbors of a node from the graph', () => {
    graph.addDirectedEdge(vertex1, vertex3, 8);

    let neighbor1 = graph.getNeighbors(vertex1)[0].vertex.value;
    let neighbor2 = graph.getNeighbors(vertex1)[1].vertex.value;

    expect(neighbor1).toEqual('Tim');
    expect(neighbor2).toEqual('Ben');
  });

  it ('returns neighbors with their weights', () => {
    graph.addVertex(vertex4);
    graph.addDirectedEdge(vertex2, vertex4, 9);
    let neighbor = graph.getNeighbors(vertex2)[0].weight;
    expect(neighbor).toEqual(9);
  });

  it ('returns the number of vertices in a graph', () => {
    let size = graph.size();
    expect(size).toEqual(4);
  });
});
