# Binary Tree & BST Implementation: Challenges 15, 16, 17

## Code challenge 15: Create a Binary Tree
  
- to create a Node class that has properties for the value stored in the node, the left child node, and the right child node;
- to create a BinaryTree class;
- to define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately;
- to handle any exceptions or errors that come from your code semantically, with capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab;
- to create a BinarySearchTree class;
- to define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
- to define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Code Challenge 16: Method to Find Max Value

- Extend the binary tree class with a method that returns the maximum value of the tree.

## Code Challenge 17: Breadth-first Traversal

- Write a breadth-first traversal method that takes a binary tree as its unique input.
- Without utilizing any of the built-in methods available to your language, traverse the input tree and return a list of its values in the order they were encountered.

## Approach & Efficiency

### Challenge 15

- Big O for space: not yet known.
- Big O for time: not yet known.

### Challenge 16

- Big O for space: O(1): a variable maxTree is created.
- Big O for time: O(n): the preOrder method has a height of log n, so time is O(h).

### Challenge 17

- Big O for space: O(n): creates an array of n length to hold the values of the tree.
- Big O for time: O(n): uses a while loop to traverse through each node at each level n number of times.

## Solutions

### Challenge 15
No whiteboard required.
[Solution](./tree.js)

### Challenge 16
![Whiteboard](../../assets/code-challenge16.png)
[Solution](./tree.js)

### Challenge 17
![Whiteboard](../../assets/code-challenge17.png)
[Solution](./tree.js)
