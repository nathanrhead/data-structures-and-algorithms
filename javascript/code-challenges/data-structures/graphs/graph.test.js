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

  it('returns true if two vertices are directly connected, as well as the weight of the edge between them', () => {
    let vertex = new Vertex('Pandora');
    let vertexTwo = new Vertex('Arendelle');
    let vertexThree = new Vertex('Metroville');
    let vertexFour = new Vertex('Monstropolis');
    let vertexFive = new Vertex('Narnia');
    let vertexSix = new Vertex('Naboo');
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addVertex(vertexFive);
    graph.addVertex(vertexSix);
    graph.addDirectedEdge(vertex, vertexTwo, 150);
    graph.addDirectedEdge(vertex, vertexThree, 82);
    graph.addDirectedEdge(vertexTwo, vertexThree, 99);
    graph.addDirectedEdge(vertexTwo, vertexFour, 42);
    graph.addDirectedEdge(vertexThree, vertexFour, 105);
    graph.addDirectedEdge(vertexThree, vertexFive, 37);
    graph.addDirectedEdge(vertexThree, vertexSix, 26);
    graph.addDirectedEdge(vertexFour, vertexSix, 73);
    graph.addDirectedEdge(vertexFive, vertexSix, 250);
    let output = graph.getEdge([vertex, vertexTwo]);
    expect(output).toEqual([true, 150]);
  });

  it('returns true if three vertices are directly connected to at least one of the other, as well as the combined weight of the edges between them', () => {
    let vertex = new Vertex('Pandora');
    let vertexTwo = new Vertex('Arendelle');
    let vertexThree = new Vertex('Metroville');
    let vertexFour = new Vertex('Monstropolis');
    let vertexFive = new Vertex('Narnia');
    let vertexSix = new Vertex('Naboo');
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addVertex(vertexFive);
    graph.addVertex(vertexSix);
    graph.addDirectedEdge(vertex, vertexTwo, 150);
    graph.addDirectedEdge(vertex, vertexThree, 82);
    graph.addDirectedEdge(vertexTwo, vertexThree, 99);
    graph.addDirectedEdge(vertexTwo, vertexFour, 42);
    graph.addDirectedEdge(vertexThree, vertexFour, 105);
    graph.addDirectedEdge(vertexThree, vertexFive, 37);
    graph.addDirectedEdge(vertexThree, vertexSix, 26);
    graph.addDirectedEdge(vertexFour, vertexSix, 73);
    graph.addDirectedEdge(vertexFive, vertexSix, 250);
    let output = graph.getEdge([vertex, vertexTwo, vertexThree]);
    expect(output).toEqual([true, 249]);
  });

  it('returns true if two vertices are directly connected, as well as the weight of the edge between them, regardless of what the points of departure and arrival are', () => {
    let vertex = new Vertex('Pandora');
    let vertexTwo = new Vertex('Arendelle');
    let vertexThree = new Vertex('Metroville');
    let vertexFour = new Vertex('Monstropolis');
    let vertexFive = new Vertex('Narnia');
    let vertexSix = new Vertex('Naboo');
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addVertex(vertexFive);
    graph.addVertex(vertexSix);
    graph.addDirectedEdge(vertex, vertexTwo, 150);
    graph.addDirectedEdge(vertex, vertexThree, 82);
    graph.addDirectedEdge(vertexTwo, vertexThree, 99);
    graph.addDirectedEdge(vertexTwo, vertexFour, 42);
    graph.addDirectedEdge(vertexThree, vertexFour, 105);
    graph.addDirectedEdge(vertexThree, vertexFive, 37);
    graph.addDirectedEdge(vertexThree, vertexSix, 26);
    graph.addDirectedEdge(vertexFour, vertexSix, 73);
    graph.addDirectedEdge(vertexFive, vertexSix, 250);
    graph.addDirectedEdge(vertexTwo, vertex, 150);
    graph.addDirectedEdge(vertexThree, vertex, 82);
    graph.addDirectedEdge(vertexThree, vertexTwo, 99);
    graph.addDirectedEdge(vertexFour, vertexTwo, 42);
    graph.addDirectedEdge(vertexFour, vertexThree, 105);
    graph.addDirectedEdge(vertexFive, vertexThree, 37);
    graph.addDirectedEdge(vertexSix, vertexThree, 26);
    graph.addDirectedEdge(vertexSix, vertexFour, 73);
    graph.addDirectedEdge(vertexSix, vertexFive, 250);
    let output = graph.getEdge([vertexSix, vertexFive]);
    expect(output).toEqual([true, 250]);
  });

  it('returns false when the two vertices passed as arguments are not connected by an edge', () => {
    let vertex = new Vertex('Pandora');
    let vertexTwo = new Vertex('Arendelle');
    let vertexThree = new Vertex('Metroville');
    let vertexFour = new Vertex('Monstropolis');
    let vertexFive = new Vertex('Narnia');
    let vertexSix = new Vertex('Naboo');
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addVertex(vertexFive);
    graph.addVertex(vertexSix);
    graph.addDirectedEdge(vertex, vertexTwo, 150);
    graph.addDirectedEdge(vertex, vertexThree, 82);
    graph.addDirectedEdge(vertexTwo, vertexThree, 99);
    graph.addDirectedEdge(vertexTwo, vertexFour, 42);
    graph.addDirectedEdge(vertexThree, vertexFour, 105);
    graph.addDirectedEdge(vertexThree, vertexFive, 37);
    graph.addDirectedEdge(vertexThree, vertexSix, 26);
    graph.addDirectedEdge(vertexFour, vertexSix, 73);
    graph.addDirectedEdge(vertexFive, vertexSix, 250);
    graph.addDirectedEdge(vertexTwo, vertex, 150);
    graph.addDirectedEdge(vertexThree, vertex, 82);
    graph.addDirectedEdge(vertexThree, vertexTwo, 99);
    graph.addDirectedEdge(vertexFour, vertexTwo, 42);
    graph.addDirectedEdge(vertexFour, vertexThree, 105);
    graph.addDirectedEdge(vertexFive, vertexThree, 37);
    graph.addDirectedEdge(vertexSix, vertexThree, 26);
    graph.addDirectedEdge(vertexSix, vertexFour, 73);
    graph.addDirectedEdge(vertexSix, vertexFive, 250);
    let output = graph.getEdge([vertex, vertexSix]);
    expect(output).toEqual([false, 0]);
  });

  it ('returns a pre-ordered set after a depth-first search', () => {
    let graph3 = new Graph();
    graph3.addVertex('A');
    graph3.addVertex('B');
    graph3.addVertex('C');
    graph3.addVertex('D');
    graph3.addVertex('E');
    graph3.addVertex('F');
    graph3.addVertex('G');
    graph3.addVertex('H');

    graph3.addDirectedEdge('A', 'B');
    graph3.addDirectedEdge('B', 'C');
    graph3.addDirectedEdge('C', 'G');
    graph3.addDirectedEdge('B', 'D');
    graph3.addDirectedEdge('D', 'E');
    graph3.addDirectedEdge('D', 'H');
    graph3.addDirectedEdge('D', 'F');
    graph3.addDirectedEdge('H', 'F');
    graph3.addDirectedEdge('A', 'D');

    let visited = graph3.dfs('A');
    expect([...visited]).toEqual(['A', 'B', 'C', 'G', 'D', 'E', 'H', 'F']);
  });

  it ('returns a pre-ordered set after a depth-first search, in a different order than the happy path, since dfs will start with the neighbor first added in the root', () => {
    let graph3 = new Graph();
    graph3.addVertex('A');
    graph3.addVertex('B');
    graph3.addVertex('C');
    graph3.addVertex('D');
    graph3.addVertex('E');
    graph3.addVertex('F');
    graph3.addVertex('G');
    graph3.addVertex('H');

    graph3.addDirectedEdge('A', 'D');
    graph3.addDirectedEdge('A', 'B');
    graph3.addDirectedEdge('B', 'C');
    graph3.addDirectedEdge('B', 'D');
    graph3.addDirectedEdge('C', 'G');
    graph3.addDirectedEdge('D', 'E');
    graph3.addDirectedEdge('D', 'H');
    graph3.addDirectedEdge('H', 'F');
    graph3.addDirectedEdge('F', 'D');

    let visited = graph3.dfs('A');
    expect([...visited]).toEqual(['A', 'D', 'E', 'H', 'F', 'B', 'C', 'G']);
  });

  it ('returns null if the graph is empty', () => {
    let graph3 = new Graph();
    let visited = graph3.dfs();
    expect(visited).toBe(null);
  });
});
