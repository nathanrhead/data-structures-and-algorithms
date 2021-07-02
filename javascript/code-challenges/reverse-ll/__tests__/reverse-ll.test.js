'use strict';

const reverse = require('../reverse-ll.js');
const LinkedList = require('../../data-structures/linked-lists/linked-list');

const list = new LinkedList();
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(4);
list.prepend(5);
list.prepend(6);
list.prepend(7);
list.prepend(8);
list.prepend(9);

describe('Reverse', () => {
  it('works', () => {
    reverse(list);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);

  });
});
