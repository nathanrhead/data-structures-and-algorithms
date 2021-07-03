'use strict';

const DoublyLinkedList = require('../doubly-linked-list');

describe('the doubly linked-list class and its methods', () => {

  const list = new DoublyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(7);
  list.append(4);

  it ('creates a doubly linked list', () => {
    expect(list.printList()).toEqual([ 1, 2, 3, 7, 4 ]);
  });

  it ('prepends a node to the list', () => {
    list.prepend(0);
    expect(list.printList()).toEqual([ 0, 1, 2, 3, 7, 4 ]);
  });

  it ('inserts a node at a given index', () => {
    expect(list.insert(1, 'a')).toEqual([ 0, 'a', 1, 2, 3, 7, 4 ]);
  });

  it ('removes a node from the list', () => {
    list.remove(1);
    list.remove(4);
    expect(list.printList()).toEqual([ 0, 1, 2, 3, 4 ]);
  });

  it ('has a pointer referencing the previous node, not just the next node', () => {
    expect(list.head.next.next.next.previous.value).toEqual(2);
  });

});
