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

  kthFromTheEnd(k) { // Not yet working right. 
    if (k<0) {
      return 'exemption';
    }
    let counter = -1;
    let currentNode = this.head;
    console.log(currentNode.next);
    while(currentNode !== null) {
      counter++;
      currentNode =currentNode.next;
      console.log('counter in while 1:', counter);
    }
    console.log('counter after while 1:', counter);

    if(counter - k < 0 || k > counter) {
      return 'exemption'
    // } else if ( (k === 0) && (currentNode.next === null) ) { return currentNode.value }
    } else {
      let counterMax = counter;
      currentNode = this.head;
      while(currentNode) {
        console.log('counter inside while 2:', counter, k);
        counter--;
        if(counter === counterMax - k + 1) {
          return currentNode.value;
        }
        currentNode =currentNode.next;
      }
    }
  }
}

module.exports = LinkedList;

//////////////////////tests////////////////

function zipLists(linkedListOne, linkedListTwo) {
  let listOneCurrent = linkedListOne.head; // Step 1a
  let listTwoCurrent = linkedListTwo.head; // Step 1b
  console.log('linkedListOne:', linkedListOne.toString());
  console.log('linkedListTwo:', linkedListTwo.toString());

  while(listOneCurrent.next !==null) {
    if(listTwoCurrent) {
    linkedListTwo.head = listTwoCurrent.next; // Step 2a
    listTwoCurrent.next = listOneCurrent.next; // Step 2b
    listOneCurrent.next = listTwoCurrent; // Step 3
    listOneCurrent = listTwoCurrent.next; // Step 4a
    listTwoCurrent = linkedListTwo.head; // Step 4b
    } else {
      break; }
  }
  if (listTwoCurrent) {
    listOneCurrent.next = listTwoCurrent;
  }
  return linkedListOne.head;
}

const linkedListOne = new LinkedList();
  linkedListOne.insert(4);
  linkedListOne.insert(3);
  linkedListOne.insert(2);
  linkedListOne.insert(1);
  
const linkedListTwo = new LinkedList();
linkedListTwo.insert(10);
linkedListTwo.insert(9);
linkedListTwo.insert(8);
linkedListTwo.insert(7);
// linkedListTwo.insert(6);
// linkedListTwo.insert(5);

console.log(zipLists(linkedListOne, linkedListTwo));

console.log('linkedListOne:', linkedListOne.toString());
console.log('linkedListTwo:', linkedListTwo.toString());

