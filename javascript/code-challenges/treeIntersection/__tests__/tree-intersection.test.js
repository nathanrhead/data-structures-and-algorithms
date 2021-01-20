'use strict';

const BinaryTree = require('../../tree/tree');
const treeIntersection = require('../tree-intersection');

describe('the algorithm to return a set of values found in both of two binary trees', () => {
  it ('returns an array of values found in both trees', () => {
    let tree1 = new BinaryTree();
    let tree2 = new BinaryTree();
    tree1.add(150);
    tree1.add(100);
    tree1.add(250);
    tree1.add(75);
    tree1.add(160);
    tree1.add(200);
    tree1.add(350);
    tree1.add(125);
    tree1.add(175);
    tree1.add(300);
    tree1.add(500);

    tree2.add(42);
    tree2.add(100);
    tree2.add(125);
    tree2.add(600);
    tree2.add(175);
    tree2.add(160)
    tree2.add(200);
    tree2.add(350);
    tree2.add(4);
    tree2.add(500);
    let results = treeIntersection(tree1, tree2);
    expect(results).toEqual([100,175,160,200,350,500])
  })
})
