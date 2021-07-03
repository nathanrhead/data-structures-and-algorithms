'use strict';

const { reverse, reverseDll } = require('../reverse-ll.js');
const LinkedList = require('../../data-structures/linked-lists/linked-list');

describe('Reverse', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.append(5);
  list.append(6);
  list.append(7);
  list.append(8);
  list.append(9);

  it('reverses a linked list', () => {
    expect(reverse(list)).toEqual([ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]);
    expect(list.head.value).toEqual(9);
    expect(list.head.next.value).toEqual(8);
    expect(list.head.next.next.value).toEqual(7);
    expect(list.tail.value).toEqual(1);
    expect(list.tail.next).toBe(null);
  });

  it ('returns the list immediately if it consists of only one node', () => {
    const list = new LinkedList();
    list.append(1);
    expect(reverse(list)).toEqual[1];
  });

  it ('returns an error if the list is empty', () => {
    const list = new LinkedList();
    expect(reverse(list)).toEqual['The list is empty.'];
  });
});
