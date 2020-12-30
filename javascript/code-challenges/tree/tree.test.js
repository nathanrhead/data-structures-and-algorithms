'use strict'; 

const BT = require('./tree');

describe('the BinaryTree class', () => {
  it ('works', () => {
    new BT(true);
    expect(true).toBeTruthy();
  });

  it ('makes an empty tree', () => {
    let binaryTree = new BT();
    expect(binaryTree.root).toEqual(null);
  });

  it ('inserts a node at the root of the tree', () => {
    let binaryTree = new BT();
    binaryTree.add(4);
    expect(binaryTree.root.value).toEqual(4);
  });

  it ('adds values to the tree in BST pattern, as long as the values are all integers', () => {
    let binaryTree = new BT();
    binaryTree.add(8);
    binaryTree.add(2);
    binaryTree.add(7);
    binaryTree.add(4);
    binaryTree.add(6);
    binaryTree.add(5);
    binaryTree.add(3);
    binaryTree.add(1);
    binaryTree.add(9);
    let results = binaryTree.preOrder();
    expect(results).toEqual([8, 2, 1, 7, 4, 3, 6, 5, 9]);
  });

  it ('traveres the tree inOrder', () => {
    let binaryTree = new BT();
    binaryTree.add(8);
    binaryTree.add(2);
    binaryTree.add(7);
    binaryTree.add(4);
    binaryTree.add(6);
    binaryTree.add(5);
    binaryTree.add(3);
    binaryTree.add(1);
    binaryTree.add(9);
    let results = binaryTree.inOrder();
    expect(results).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it ('traverse the tree postOrder', () => {
    let binaryTree = new BT();
    binaryTree.add(8);
    binaryTree.add(2);
    binaryTree.add(7);
    binaryTree.add(4);
    binaryTree.add(6);
    binaryTree.add(5);
    binaryTree.add(3);
    binaryTree.add(1);
    binaryTree.add(9);
    let results = binaryTree.postOrder();
    expect(results[results.length-1]).toEqual(8);
  });

  it ('returns true if the tree contains(value)', () => {
    let binaryTree = new BT();
    binaryTree.add(8);
    binaryTree.add(2);
    binaryTree.add(7);
    binaryTree.add(4);
    binaryTree.add(6);
    binaryTree.add(5);
    binaryTree.add(3);
    binaryTree.add(1);
    binaryTree.add(9);
    expect(binaryTree.contains(5)).toBe(true);
  });

  it ('finds and returns the max value of a binary tree', () => {
    let binaryTree = new BT();
    binaryTree.add(8);
    binaryTree.add(2);
    binaryTree.add(7);
    binaryTree.add(4);
    binaryTree.add(6);
    binaryTree.add(5);
    binaryTree.add(3);
    binaryTree.add(1);
    binaryTree.add(9);
    let max = binaryTree.findMax();
    expect(max).toEqual(9);
  });

  it ('returns all nodes in a binary tree ordered from top to bottom and left to right by using a breadth-first traversal sans methods native to JS', () => {
    let binaryTree = new BT();
    binaryTree.add(8);
    binaryTree.add(2);
    binaryTree.add(7);
    binaryTree.add(4);
    binaryTree.add(6);
    binaryTree.add(5);
    binaryTree.add(3);
    binaryTree.add(1);
    binaryTree.add(9);
    let results = binaryTree.breadthFirst();
    expect(results).toEqual([8, 2, 9, 1, 7,
      4, 3, 6, 5]);
  });
  
});

