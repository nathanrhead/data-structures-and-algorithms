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

  it ('returns true if a given value exists in the list and false if otherwise', () => {
    expect(list.includes(3)).toBe(true);
    expect(list.includes('Sasha')).toBe(false);
  });

  it ('returns an array of the list\'s values in order from head to tail', () => {
    expect(list.printList()).toEqual([ 0, 1, 2, 3, 4 ]);
  });

  it ('appends a node at the end of the list', () => {
    expect(list.append(4)).toEqual([ 0, 1, 2, 3, 4, 4 ]);
  });

  it('returns the value of the node k places from the end of the list', () => {
    expect(list.kthFromTheEnd(3)).toEqual(2);
  });

  it('removes duplicate values from the list', () => {
    expect(list.removeDuplicates()).toEqual([ 0, 1, 2, 3, 4 ]);
  });

  it('reverses the list in O(n) time', () => {
    expect(list.reverse1()).toEqual([ 4, 3, 2, 1, 0 ]);
    expect(list.head.value).toEqual(4);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.head.previous).toBe(null);
    expect(list.tail.value).toEqual(0);
    expect(list.tail.next).toBe(null);
    expect(list.tail.previous.value).toEqual(1);
  });

  it('reverses the list in O(n/2) time, that is, it does the work of reversing from both the head and the tail simultaneously, finishing in the middle of the list', () => {
    expect(list.reverse2()).toEqual([ 0, 1, 2, 3, 4 ]);
    expect(list.head.value).toEqual(0);
    expect(list.head.next.value).toEqual(1);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.head.previous).toBe(null);
    expect(list.tail.value).toEqual(4);
    expect(list.tail.next).toBe(null);
    expect(list.tail.previous.value).toEqual(3);
  });

  it('returns the list immediately if, when attempting to reverse, it consists of only one node', () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.reverse1();
    expect(list.length).toEqual(1);
    expect(list.head.next).toBe(null);
    expect(list.tail.value).toBe(1);

    list.reverse2();
    expect(list.length).toEqual(1);
    expect(list.head.next).toBe(null);
    expect(list.tail.value).toBe(1);
  });

  it('returns an error if the list is empty when reverse() is called', () => {
    const list = new DoublyLinkedList();
    expect(list.reverse1()).toEqual('The list is empty.');
    expect(list.reverse2()).toEqual('The list is empty.');
  });
});
