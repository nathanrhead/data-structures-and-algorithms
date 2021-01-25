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

  it ('returns a set of values of the nodes in a graph in a breadth-first search', () => {
    let graph1 = new Graph();
    graph1.addVertex('Pandora');
    graph1.addVertex('Arendelle');
    graph1.addVertex('Metroville');
    graph1.addVertex('Monstropolis');
    graph1.addVertex('Narnia');
    graph1.addVertex('Naboo');
    graph1.addDirectedEdge('Pandora', 'Arendelle', 1);
    graph1.addDirectedEdge('Arendelle', 'Metroville', 1);
    graph1.addDirectedEdge('Arendelle', 'Monstropolis', 1);
    graph1.addDirectedEdge('Metroville', 'Monstropolis', 1);
    graph1.addDirectedEdge('Metroville', 'Narnia', 1);
    graph1.addDirectedEdge('Metroville', 'Naboo', 1);
    graph1.addDirectedEdge('Monstropolis', 'Naboo', 1);
    let results = graph1.bfs('Pandora');
    console.log([...results]);
    expect([...results]).toEqual([
      'Pandora',
      'Arendelle',
      'Metroville',
      'Monstropolis',
      'Narnia',
      'Naboo'
    ]);
  });

  it('returns a collection of vertices from a linear graph.', () => {
    let graph2 = new Graph();
    graph2.addVertex('Pandora');
    graph2.addVertex('Arendelle');
    graph2.addVertex('Metroville');
    graph2.addVertex('Monstropolis');
    graph2.addVertex('Narnia');
    graph2.addVertex('Naboo');
    graph2.addDirectedEdge('Naboo', 'Arendelle', 1);
    graph2.addDirectedEdge('Arendelle', 'Metroville', 1);
    graph2.addDirectedEdge('Metroville', 'Monstropolis', 1);
    graph2.addDirectedEdge('Monstropolis', 'Narnia', 1);
    graph2.addDirectedEdge('Narnia', 'Pandora', 1);
    let results = graph2.bfs('Naboo');
    console.log([...results]);
    expect([...results]).toEqual([
      'Naboo',
      'Arendelle',
      'Metroville',
      'Monstropolis',
      'Narnia',
      'Pandora'
    ]);
  });

  it('returns null for an empty graph', () => {
    let graph = new Graph();
    expect(graph.bfs()).toEqual(null);
  });

});
