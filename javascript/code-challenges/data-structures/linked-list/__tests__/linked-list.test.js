'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list');

describe('Linked List', () => {
  it('works', () => {
    new LinkedList(true);
    expect(true).toBeTruthy();
  });

  it('inserts a node at the beginning of an empty list', () => {
    let list = new LinkedList();
    list.insert('Henry');
    expect(list.head.value).toEqual('Henry');
  });

  it('inserts a node at the beginning of a list', () => {
    let list = new LinkedList();
    list.insert('Norah');
    expect(list.head.value).toEqual('Norah');
  });

  it('looks for the presence of a given value in the list', () => {
    let list = new LinkedList();
    list.insert('Norah');
    list.insert('Sammy');
    list.insert('Ben');
    list.insert('Tim');
    list.insert('Caleb');
    expect(list.includes('Ben')).toBe(true);
    expect(list.includes('Sasha')).toBe(false);
  });

  it('compiles all values of the list into a string', () => {
    let list = new LinkedList();
    list.insert('Norah');
    list.insert('Sammy');
    list.insert('Ben');
    list.insert('Tim');
    list.insert('Caleb');
    expect(list.toString()).toBe('{ Caleb } -> { Tim } -> { Ben } -> { Sammy } -> { Norah } -> NULL');
  });

  it('appends a node at the end of a list', () => {
    let list = new LinkedList();
    list.insert('Caleb');
    list.insert('Tim');
    list.insert('Ben');
    list.insert('Sam');
    list.insert('Norah');
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
    list.insert('Caleb');
    list.insert('Tim');
    list.insert('Sam');
    list.insert('Norah');
    list.insert('Henry');
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
    list.insert('Caleb');
    list.insert('Tim');
    list.insert('Sam');
    list.insert('Norah');
    list.insert('Henry');
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
    list.insert('A');
    list.insert('B');
    list.insert('C');
    list.insert('D');
    list.insert('E');
    list.insert('F');
    list.insert('G');
    const result = list.kthFromTheEnd(3);
    expect(result).toEqual('C');
  });
});
