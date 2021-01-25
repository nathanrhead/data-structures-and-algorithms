# Create a Graph Implementation

- This is the code challenge for class 35 of Code Fellows 401.

## Features

- Implement your own Graph. The graph should be represented as an adjacency list and should include the following methods:

  - [x] addVertex()
    - [x] Adds a new node to the graph.
    - [x] Takes in the value of that node.
    - [x] Returns the added node.
  
  - [x] ddEdge()
    - [x] Adds a new edge between two nodes in the graph.
    - [x] Includes the ability to have a “weight”.
    - [x] Takes in the two nodes to be connected by the edge.
    - [x] Both nodes should already be in the graph.
  
  - [x] getMap(): Returns all of the nodes in the graph as a collection (set, list, or similar).
  
  - [x] getNeighbors()
    - [x] Returns a collection of edges connected to the given node.
    - [x] Takes in a given node.
    - [x] Includes the weight of the connection in the returned collection.
  
  - [x] size(): Returns the total number of nodes in the graph.

## Testing

- Write tests to validate the following functionality:

  [x] Node can be successfully added to the graph.
  [x] An edge can be successfully added to the graph.
  [x] A collection of all nodes can be properly retrieved from the graph.
  [x] All appropriate neighbors can be retrieved from the graph.
  [x] Neighbors are returned with the weight between nodes included.
  [x] The proper size is returned, representing the number of nodes in the graph.
  [x] A graph with only one node and edge can be properly returned.
  [x] An empty graph properly returns null.

## Approach & Efficiency

- Big O for time: for a breadth-first search, since it's a loop within a loop, time is O(n^2); for the depth-first approach, which is recursive, time is O(n), since it's possible that each node will have to be traversed.
- Big O for space: since everything depends on the creation of a new Vertex instance, this is at least O(1). However, since the graph is a map of n number of vertices, space for it, as for an array, will be O(n).

## Solution

[Coded Solution](./graph.js)
