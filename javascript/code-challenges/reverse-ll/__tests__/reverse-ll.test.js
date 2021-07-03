'use strict';

const { reverse, reverseDll } = require('../reverse-ll.js');
const SinglyLinkedList = require('../../data-structures/linked-lists/linked-list');
const DoublyLinkedList = require('../../data-structures/linked-lists/doubly-linked-list');
describe('Reverse', () => {

  it('reverses a singly linked list', () => {
    const singly = new SinglyLinkedList();
    singly.append(1);
    singly.append(2);
    singly.append(3);
    singly.append(4);
    singly.append(5);
    singly.append(6);
    singly.append(7);
    singly.append(8);
    singly.append(9);

    expect(reverse(singly)).toEqual([ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]);
    expect(singly.head.value).toEqual(9);
    expect(singly.head.next.value).toEqual(8);
    expect(singly.head.next.next.value).toEqual(7);
    expect(singly.tail.value).toEqual(1);
    expect(singly.tail.next).toBe(null);
  });

  it('reverses a doubly linked list', () => {
    const doubly = new DoublyLinkedList();
    doubly.append(1);
    doubly.append(2);
    doubly.append(3);
    doubly.append(4);
    doubly.append(5);
    doubly.append(6);
    doubly.append(7);
    doubly.append(8);
    doubly.append(9);

    expect(reverseDll(doubly)).toEqual([ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]);

    expect(doubly.head.value).toEqual(9);
    expect(doubly.head.next.value).toEqual(8);
    expect(doubly.head.next.next.value).toEqual(7);
    expect(doubly.tail.value).toEqual(1);
    expect(doubly.tail.next).toBe(null);
    expect(doubly.tail.previous.value).toEqual(2);
  });


  it ('returns the list immediately if it consists of only one node', () => {
    const singly = new SinglyLinkedList();
    const doubly = new DoublyLinkedList();
    singly.append(1);
    doubly.append(1);

    expect(reverse(singly)).toEqual({
      head: { value: 1, previous: null, next: null },
      length: 1,
      tail: { value: 1, previous: null, next: null }
    });
    expect(reverseDll(doubly)).toEqual({
      head: { value: 1, previous: null, next: null },
      tail: { value: 1, previous: null, next: null },
      length: 1
    });
  });

  it ('returns an error if the list is empty', () => {
    const singly = new SinglyLinkedList();
    const doubly = new DoublyLinkedList();
    expect(reverse(singly)).toEqual('The list is empty.');
    expect(reverseDll(doubly)).toEqual('The list is empty.');
  });
});
