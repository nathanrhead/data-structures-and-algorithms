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

// Reverse a doubly linked list with O(n).
function reverseDll1(list) {
  if (!list.head) return 'The list is empty.';
  if (!list.head.next) return list;

  let first = list.head;
  let second = first.next;

  list.tail = list.head;

  while (second) {
    const third = second.next;
    second.next = first;
    first.previous = second;
    first = second;
    second = third;
  }
  list.head.next = null;
  list.head = first;
  list.head.previous = null;

  return list.printList();
}

// Reverse a doubly linked list with O(n/2) which, despite it simplifying to O(n), is still awesome.

function reverseDll2(list) {
  if (!list.head) return 'The list is empty.';
  if (!list.head.next) return list;

  let a = list.head;
  let b = a.next;

  let z = list.tail;
  let y = z.previous;

  let shiftRight = true;
  let shiftLeft = false;

  let counter = Math.ceil(list.length / 2);

  list.head = z;
  list.tail = a;

  while (counter > 0) {
    shiftRight = b.next;
    shiftLeft = y.previous;

    b.next = a;
    a.previous = b;
    a = b;
    b = shiftRight;

    y.previous = z;
    z.next = y;
    z = y;
    y = shiftLeft;

    counter--;
  }

  list.head.previous = null;
  list.tail.next = null;

  return list.printList();
}


module.exports = { reverse, reverseDll1, reverseDll2 };
