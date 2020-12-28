'use strict';

// Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
class Node {
  constructor(value) {
    this.root = value;
    this.rightChild = null;
    this.leftChild = null;
  }
}

// Create a BinaryTree class
class BinaryTree {
  constructor() {
    this.root = null;
  };

  // Define a method for each of the depth-first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.

  preOrder() {
    let node = new Node(value);
    if(!this.root) { 
      this.root = node;
    } else { 
      let temp = this.root;
      this.root = node; 
      this.temp = left;
    }
  };

  inOrder() {

  };

  postOrder() {

  };

}


// Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

// Create a BinarySearchTree class
class BinarySearchTree {
  constructor() {

  };

// Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
  add(value) {

  };

  // Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
  contains(value) {

  };

}


