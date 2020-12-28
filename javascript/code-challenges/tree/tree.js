'use strict';

// Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
class Node {
  constructor(value = 0, left = null, right = null) { 
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

// Create a BinaryTree class
class BinaryTree {
  constructor() {
    this.root = null;
  };

  // Define a method for each of the depth-first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.

  preOrder() { // depth-first search; works with BT and BST
    // Create an array that will hold the values
    const results = [];

    let _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    }
    _walk(this.root);

    // let node = new Node(value);
    // if(!this.root) { 
    //   this.root = node;
    // } else { 
    //   let temp = this.root;
    //   this.root = node; 
    //   this.temp = left;
    // }
  };

  inOrder() {

    const results = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    }
    _walk(this.root);
  };

  postOrder() {
    const results = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    }
    _walk(this.root);
  };

  add(value) {
    if (typeof value !== 'number') {
      return null; // or throw an error
    }
    // Make a new node
    if (!this.root) {
    this.root = new Node(value);
    return;
    }
    let _insert = (node) => { // to insert a leaf
      //if the value is less than that of the root
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
        }
      } else if (node.left !== null) {
        return _insert(node.left);
         // if the value is greater than that of the root
      } else if (value >= node.value) { // The equals is arbitrary: we could have sent equal values left or forbidden them altogether
        if (node.right === null) {
          node.right = new Node(value);
          return;
        } else if (node.right !== null) {
          return _insert(node.right); // Recursion: make node.right the beginning (root) of the _insert function.
        }
      }
  } 
  _insert(this.root);

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


