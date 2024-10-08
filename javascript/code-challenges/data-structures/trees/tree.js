/* eslint-disable no-unused-vars */
'use strict';

// Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
class Node {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Create a BinaryTree class and a BinarySearchTreeClass (which the add method will do).
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Define a method named add that accepts a value and adds a new node with that value in the correct location in the binary search tree: this one will make a BST and may only accept integers.
  add(value) {
    if (typeof value !== 'number') {
      return null;
    }
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    const _insert = (node) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        } else if (node.left !== null) {
          return _insert(node.left);
        }
      } else if (value >= node.value) {
        if (node.right === null) {
          node.right = new Node(value);
          return;
        } else if (node.right !== null) {
          return _insert(node.right);
        }
      }
    };
    _insert(this.root);
  }

  // This creates a Binary Tree, adding nodes from top to bottom and left to right.
  addNode(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let current;
    let queue = [];
    queue[0] = this.root;

    while (queue) {
      current = queue.shift();
      if (!current.left) {
        current.left = new Node(value);
        return;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = new Node(value);
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  // Define methods for each of the depth-first traversals, called (1) preOrder, (2) inOrder, and (3) postOrder, which return an array of the values, ordered appropriately.

  preOrder() { // depth-first search; works with BT and BST
    // Create an array that will hold the values
    const results = [];
    let _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  inOrder() {
    const results = [];
    let _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  postOrder() {
    const results = [];
    const _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };

    _walk(this.root);
    return results;
  }

  // This search method will return the nodes' values from top to bottom and left to right, one level at a time.
  breadthFirst() {
    let queue = [];
    let results = [];
    let queueIndex = 0;
    let resultsIndex = 0;

    if (!this.root) return;
    // Put the root node at the front of the queue array. This also starts the while loop.
    queue[queueIndex] = this.root;

    let current;

    // When the tree runs out, the resultsIndex will iterate one more time and the queue[resultsIndex] will have no value.
    while (queue[resultsIndex]) {
      current = queue[resultsIndex];
      results[resultsIndex] = current.value;

      if (current.left) { queue[++queueIndex] = current.left; }
      if (current.right) { queue[++queueIndex] = current.right; }

      delete queue[resultsIndex];
      resultsIndex++;
    }
    queue = [];
    return results;
  }

  // Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
  contains(value) {
    if (!this.root) return null;
    let boolean = false;
    const _walk = (node) => {
      if (node.value === value) { boolean = true; }
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return boolean;
  }

  // Find the Maximum Value in a Binary Tree (code challenge 16 of CF 401).
  findMax() {
    let treeMax = 0;
    if (!this.root) return null;

    const _walk = (node) => {
      if (node.value > treeMax) { treeMax = node.value; }
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return treeMax;
  }

  // NRC's CF 401 final exam question: Given a binary tree and an integer (whether positive, negative, or zero), return true if the sum of a path's values from the tree's root to a leaf equals the integer and false if the sum of any one path's values does not equal the integer.

  pathWeighs(n) {
    if (!this.root) return false;
    let counter = 0;
    let boolean = false;
    const _dfs = (node, counter) => {
      if (!node.left && !node.right && counter === n) {
        boolean = true;
      } else {
        counter += node.value;
        if (node.left) _dfs(node.left, counter);
        if (node.right) _dfs(node.right, counter);
      }
    };
    _dfs(this.root, counter);
    return boolean;
  }

  // This method counts the number of levels between the root and the leaf furthest away from it, including the root level. If you want to count of the number of edges between the root and the furthest-most leaf, return -1 instead of 0, if the root === null.
  getDepth() {
    if (!this.root) return 0; // There is no height.

    const _findDepth = root => {
      if (!root) return 0; // Set to return -1 if you want to count edges.
      let leftDepth = _findDepth(root.left);
      let rightDepth = _findDepth(root.right);
      return Math.max(leftDepth, rightDepth) + 1;
    };
    return _findDepth(this.root);
  }
  // Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

}

module.exports = BinaryTree;

// ///////Tests//////////

// let binaryTree = new BinaryTree();
// binaryTree.add(8);
// binaryTree.add(2);
// binaryTree.add(7);
// binaryTree.add(4);
// binaryTree.add(6);
// binaryTree.add(5);
// binaryTree.add(3);
// binaryTree.add(1);
// binaryTree.add(9);
// // console.log('Binary Tree:', binaryTree);
// console.log('RESULTS:', binaryTree.breadthFirst());
