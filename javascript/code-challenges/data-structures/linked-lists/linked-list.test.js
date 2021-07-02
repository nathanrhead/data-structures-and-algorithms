'use strict';

// Require our linked list implementation
const LinkedList = require('./linked-list');

describe('Linked List', () => {
  it('works', () => {
    new LinkedList(true);
    expect(true).toBeTruthy();
  });

  it('inserts a node at the beginning of an empty list', () => {
    const list = new LinkedList();
    list.prepend('Henry');
    expect(list.head.value).toEqual('Henry');
  });

  it('prepends a node to the beginning of a list', () => {
    let list = new LinkedList();
    list.prepend('Norah');
    expect(list.head.value).toEqual('Norah');
  });

  it('looks for the presence of a given value in the list', () => {
    let list = new LinkedList();
    list.prepend('Norah');
    list.prepend('Sammy');
    list.prepend('Ben');
    list.prepend('Tim');
    list.prepend('Caleb');
    expect(list.includes('Ben')).toBe(true);
    expect(list.includes('Sasha')).toBe(false);
  });

  it('compiles all values of the list into a string', () => {
    const list = new LinkedList();
    const list1 = new LinkedList();
    list.prepend('Norah');
    list.prepend('Sammy');
    list.prepend('Ben');
    list.prepend('Tim');
    list.prepend('Caleb');
    expect(list.toString()).toBe('{ Caleb } -> { Tim } -> { Ben } -> { Sammy } -> { Norah } -> NULL');
    expect(list1.toString()).toBe(null);
  });

  it('appends a node at the end of a list', () => {
    let list = new LinkedList();
    list.prepend('Caleb');
    list.prepend('Tim');
    list.prepend('Ben');
    list.prepend('Sam');
    list.prepend('Norah');
    list.append('Henry');
    let current = list.head;
    while (current) {
      if (current.next === null) {
        expect(current.value).toEqual('Henry');
      }
      current = current.next;
    }
  });

  it('inserts a node before a node with a given value', () => {
    let list = new LinkedList();
    list.prepend('Caleb');
    list.prepend('Tim');
    list.prepend('Sam');
    list.prepend('Norah');
    list.prepend('Henry');
    list.insertBefore('Tim', 'Ben');
    let current = list.head;
    while (current) {
      if (current.value === 'Sam') {
        expect(current.next.value).toEqual('Ben');
      }
      current = current.next;
    }
  });

  it('inserts a node after a node with a given value', () => {
    let list = new LinkedList();
    list.prepend('Caleb');
    list.prepend('Tim');
    list.prepend('Sam');
    list.prepend('Norah');
    list.prepend('Henry');
    list.insertAfter('Sam', 'Ben');
    let current = list.head;
    while (current) {
      if (current.value === 'Sam') {
        expect(current.next.value).toEqual('Ben');
      }
      current = current.next;
    }
  });

  it ('returns the value of the node k places from the end of the list', () => {
    let list = new LinkedList();
    list.prepend('A');
    list.prepend('B');
    list.prepend('C');
    list.prepend('D');
    list.prepend('E');
    list.prepend('F');
    list.prepend('G');
    const result = list.kthFromTheEnd(3);
    expect(result).toEqual('C');
  });

  it ('removes duplicate values from a linked list', () => {
    let linkedList = new LinkedList();
    linkedList.prepend(1);
    linkedList.prepend(1);
    linkedList.prepend(2);
    linkedList.prepend(2);
    linkedList.prepend(2);
    linkedList.prepend(3);
    linkedList.prepend(3);
    linkedList.prepend(3);
    linkedList.prepend(4);
    const result = linkedList.removeDuplicates();
    expect(result).toEqual('{ 4 } -> { 3 } -> { 2 } -> { 1 } -> NULL');
  });
});
