'use strict';

// Require the linked-list implementation
// const LinkedList = require('../data-structures/linked-list/linked-list');

// const list = new LinkedList();
// list.insert(1);
// list.insert(2);
// list.insert(3);
// list.insert(4);
// list.insert(5);
// list.insert(6);
// list.insert(7);
// list.insert(8);
// list.insert(9);

function reverse(list) {
  if (!list.head) throw new Error ('The linked list is empty.');
  if (!list.head.next) return list.head;

  let current = list.head, previous, temp;

  while (current) {
    if (current.next) { list.head = current.next; } // Move the head down the line so that it ends up attached to the tail; set to run while current.next has value so that it doesn't get set to null;
    temp = current.next; // Keep a pointer to the list from current.next;
    current.next = previous; // Point the pointer to a new variable, previous, which gets defined in the next step;
    previous = current; // Point previous to the current node;
    current = temp; // Set current to the first of the rest of the list to iterate through it.
  }
  return list.head;
}

module.exports = reverse;
