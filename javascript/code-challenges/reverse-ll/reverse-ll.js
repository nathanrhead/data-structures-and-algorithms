'use strict';

// Reverse a singly linked list.
function reverse(list) {
  if (!list.head) return 'The list is empty.';
  if (!list.head.next) return list;
  let first = list.head;
  list.tail = list.head;
  let second = first.next;

  while (second) {
    const third = second.next; // This varialbe keeps track of the remaining list.
    second.next = first; // This point the second node's next from the third to the first.
    first = second; // This makes the second node the first node in preparation for the next loop.
    second = third; // This makes the second node the third node in preparation for the next loop.

  }
  list.head.next = null; // This makes the tail's next (or the former head's next) null, before reassigning the head to the first node.
  list.head = first; // This reassigns the head to the first (formerly last) node.
  return list.printList();
}

// Reverse a doubly linked list.
function reverseDll(list) {
  if (!list.head) return 'The list is empty.';
  if (!list.head.next) return list;

  // let current = list.head, temp;

  // while (current){

  // }

}

module.exports = { reverse, reverseDll };
