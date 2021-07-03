'use strict';

const Node = require('./node');
const Hashtable = require('../hashtables/hashtable');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 1;
  }

  // Insert a node at the head: time = O(1)
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
    return this;
  }

  // Append a node at the end of a list: time = O(1).
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
    return this;
    /* to traverse the LL is to increase the time complexity from O(1) to O(n) */
    // let current = this.head;
    // while (current.next) {
    //   current = current.next;
    // }
    // current.next = node;
  }


  // Look for the presence of a given value in the list: time = O(n).
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Create a string of all the linked list's values from a to the nth.
  toString() {
    // Error check for an empty LL.
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    let allValues = `{ ${this.head.value} } -> `;

    while (currentNode.next) {
      currentNode = currentNode.next;
      allValues += `{ ${currentNode.value} } -> `;
    }
    allValues += 'NULL';
    return allValues;
  }

  insertBefore(value, newValue) {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      if (currentNode.value === value) {
        const node = new Node(newValue);
        if (!previousNode) { this.head = node; }
        else { previousNode.next = node; }
        node.next = currentNode;
        return node;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    throw new Error('No match.'); // If there is no match.
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        const node = new Node(newValue);
        node.next = current.next;
        current.next = node;
        return node;
      }
      current = current.next;
    }
    throw new Error('No match.'); // If there is no match.
  }

  // Find the node k places from the end. This approach uses two pointers.
  kthFromTheEnd(k) {
    if (k < 0) { throw 'The linked list is empty.'; }

    let current = this.head;
    let kthFromCurrent = this.head;

    while (k > 0) {
      current = current.next;
      k--;
    }
    while (current) {
      current = current.next;
      kthFromCurrent = kthFromCurrent.next;
    }
    return kthFromCurrent.value;
  }

  removeDuplicates() {
    if (!this.head) throw 'This value doesn\'t exist in the list.';
    if (!this.head.next) return this.head;

    let hashmap = new Hashtable(5);
    // Iterate through the linked list to populate the hashtable.
    let current = this.head;
    let previous = null;
    while (current) {
      if (hashmap.contains(current.value)) {
        previous.next = current.next;
        current = current.next;
      } else {
        hashmap.add(current.value, current.value);
        previous = current;
        current = current.next;
      }
    }
    return this.toString();
  }
}

module.exports = LinkedList;

//////////////////////tests////////////////

// function zipLists(linkedListOne, linkedListTwo) {
//   let listOneCurrent = linkedListOne.head; // Step 1a
//   let listTwoCurrent = linkedListTwo.head; // Step 1b
//   console.log('linkedListOne:', linkedListOne.toString());
//   console.log('linkedListTwo:', linkedListTwo.toString());

//   while(listOneCurrent.next !==null) {
//     if(listTwoCurrent) {
//     linkedListTwo.head = listTwoCurrent.next; // Step 2a
//     listTwoCurrent.next = listOneCurrent.next; // Step 2b
//     listOneCurrent.next = listTwoCurrent; // Step 3
//     listOneCurrent = listTwoCurrent.next; // Step 4a
//     listTwoCurrent = linkedListTwo.head; // Step 4b
//     } else {
//       break; }
//   }
//   if (listTwoCurrent) {
//     listOneCurrent.next = listTwoCurrent;
//   }
//   return linkedListOne.head;
// }

// const linkedListOne = new LinkedList();
//   linkedListOne.insert(4);
//   linkedListOne.insert(3);
//   linkedListOne.insert(2);
//   linkedListOne.insert(1);

// const linkedListTwo = new LinkedList();
// linkedListTwo.insert(10);
// linkedListTwo.insert(9);
// linkedListTwo.insert(8);
// linkedListTwo.insert(7);
// // linkedListTwo.insert(6);
// // linkedListTwo.insert(5);

// console.log(zipLists(linkedListOne, linkedListTwo));

// console.log('linkedListOne:', linkedListOne.toString());
// console.log('linkedListTwo:', linkedListTwo.toString());

