'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

// Insert a node at the head.
  insert(value) { 
    if(this.head === null) { 
      const node = new Node(value);
      this.head = node;
    } else {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
    }
  }

// Insert a node at the end of a list.
  append(value) {
    const node = new Node(value);
    let currentNode = this.head;
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    };
    currentNode.next = node;
  }

// Look for the presence of a given value in the list.
  includes(value) {
    let currentNode = this.head;
    while(currentNode.next !== null) {
      if(currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    };
    return false;
  } 

// Create a string of all the linked list's values from a to the nth.
  toString() {
    let allValues = '';
    let currentNode = this.head;
    while(currentNode.next) {
      allValues += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    allValues += `{ ${currentNode.value} } -> `;
    return `${allValues}NULL`;
  }
}

module.exports = LinkedList;
