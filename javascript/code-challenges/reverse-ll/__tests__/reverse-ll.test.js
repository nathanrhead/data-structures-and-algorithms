'use strict';

const reverse = require('../reverse-ll.js');
const LinkedList = require('../../data-structures/linked-list/linked-list');

const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.insert(7);
list.insert(8);
list.insert(9);

describe('Reverse', () => {
  it('works', () => {
    reverse(list);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);

  });
});
