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

// Look for the presence of a given value in the list.
  includes(value) {
    let currentNode = this.head;
    while(currentNode) {
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
    if(!this.head) {
      return 'NULL';
    }
    allValues = `{ ${this.head.value} } -> `
    while(currentNode.next) {
      currentNode = currentNode.next;
      allValues += `{ ${currentNode.value} } -> `;
    }
    allValues += `NULL`;
    return `${allValues}`;
  }

// Append a node at the end of a list.
append(value) {
  const node = new Node(value);
  if(!this.head) {
    this.head = node;
    return;
  }
  let currentNode = this.head;
  while(!currentNode.next) {
    currentNode = currentNode.next;
  };
  currentNode.next = node;
  };

insertBefore(value, newValue) {
  let currentNode = this.head;
  let previousNode = null;
  while(currentNode) {
    if(currentNode.value === value) {
      let node = new Node(newValue);
    if (!previousNode) { this.head = node; }
    else {previousNode.next = node; }
    node.next = currentNode;
    return node;
    }
    previousNode = currentNode;
    currentNode = currentNode.next;
    }
    throw new Error('Error'); // If there is no match.
  }

  insertAfter(value, newValue) {
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.value === value) {
        let node = new Node(newValue);
        node.next = currentNode.next;
        currentNode.next = node;
        return node;
      }
      currentNode = currentNode.next;
    }
    throw new Error('Error'); // If there is no match.
  }
}

// let list = new LinkedList();
// list.insert('Caleb');
// list.insert('Tim');
// list.insert('Sam');
// list.insert('Norah');
// list.insert('Henry');

// list.insertBefore('Tim', 'Ben');
// console.log(list.toString());

module.exports = LinkedList;
