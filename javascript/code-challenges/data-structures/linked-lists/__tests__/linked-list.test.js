'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list');
const DoublyLL = require('../doubly-linked-list');

describe('Linked Lists', () => {

  // I don't know what this test is doing or how it helps.
  it('works', () => {
    new LinkedList(true);
    new DoublyLL(true);
    expect(true).toBeTruthy();
  });

  it('inserts a node at the beginning of an empty list', () => {
    const singly = new LinkedList();
    const doubly = new DoublyLL();
    singly.prepend('Henry');
    doubly.prepend('Henry');
    expect(singly.head.value).toEqual('Henry');
    expect(doubly.head.value).toEqual('Henry');
  });

  it('prepends a node to the beginning of a list', () => {
    const singly = new LinkedList();
    const doubly = new DoublyLL();
    singly.prepend('Henry');
    singly.prepend('Norah');
    doubly.prepend('Henry');
    doubly.prepend('Norah');
    expect(singly.head.value).toEqual('Norah');
    expect(doubly.head.value).toEqual('Norah');
  });

  it('looks for the presence of a given value in the list', () => {
    const singly = new LinkedList();
    const doubly = new DoublyLL();
    singly.prepend('Norah');
    singly.prepend('Sammy');
    singly.prepend('Ben');
    singly.prepend('Tim');
    singly.prepend('Caleb');

    doubly.prepend('Norah');
    doubly.prepend('Sammy');
    doubly.prepend('Ben');
    doubly.prepend('Tim');
    doubly.prepend('Caleb');

    expect(singly.includes('Ben')).toBe(true);
    expect(singly.includes('Sasha')).toBe(false);

    expect(doubly.includes('Ben')).toBe(true);
    expect(doubly.includes('Sasha')).toBe(false);

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
    const singly = new LinkedList();
    const doubly = new DoublyLL();

    singly.prepend('Caleb');
    singly.prepend('Tim');
    singly.prepend('Ben');
    singly.prepend('Sam');
    singly.prepend('Norah');
    singly.append('Henry');

    doubly.prepend('Caleb');
    doubly.prepend('Tim');
    doubly.prepend('Ben');
    doubly.prepend('Sam');
    doubly.prepend('Norah');
    doubly.append('Henry');

    expect(singly.tail.value).toEqual('Henry');
    expect(doubly.tail.value).toEqual('Henry');
  });

  it('inserts a node before a node with a given value', () => {
    const list = new LinkedList();
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
    const list = new LinkedList();
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

  it ('inserts a node at a given index', () => {
    const doubly = new DoublyLL();
    doubly.append('Caleb');
    doubly.append('Tim');
    doubly.append('Ben');
    doubly.append('Norah');
    doubly.append('Henry');
    expect(doubly.insert(3, 'Sam')).toEqual(['Caleb', 'Tim', 'Ben', 'Sam', 'Norah', 'Henry']);
  });

  it('returns the value of the node k places from the end of the list', () => {
    const singly = new LinkedList();
    const doubly = new DoublyLL();

    singly.append('A');
    singly.append('B');
    singly.append('C');
    singly.append('D');
    singly.append('E');
    singly.append('F');
    singly.append('G');

    doubly.append('A');
    doubly.append('B');
    doubly.append('C');
    doubly.append('D');
    doubly.append('E');
    doubly.append('F');
    doubly.append('G');

    expect(singly.kthFromTheEnd(3)).toEqual('D');
    expect(doubly.kthFromTheEnd(3)).toEqual('D');
  });

  it('removes duplicate values from a linked list', () => {
    const list = new LinkedList();
    list.prepend(1);
    list.prepend(1);
    list.prepend(2);
    list.prepend(2);
    list.prepend(2);
    list.prepend(3);
    list.prepend(3);
    list.prepend(3);
    list.prepend(4);
    expect(list.removeDuplicates()).toEqual('{ 4 } -> { 3 } -> { 2 } -> { 1 } -> NULL');
  });

  it('reverses a linked list', () => {
    const singly = new LinkedList();
    const doubly = new DoublyLL();

    singly.append(1);
    singly.append(2);
    singly.append(3);
    singly.append(4);
    singly.append(5);
    singly.append(6);
    singly.append(7);
    singly.append(8);
    singly.append(9);

    doubly.append(1);
    doubly.append(2);
    doubly.append(3);
    doubly.append(4);
    doubly.append(5);
    doubly.append(6);
    doubly.append(7);
    doubly.append(8);
    doubly.append(9);

    expect(singly.reverse()).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    expect(singly.head.value).toEqual(9);
    expect(singly.head.next.value).toEqual(8);
    expect(singly.head.next.next.value).toEqual(7);
    expect(singly.tail.value).toEqual(1);
    expect(singly.tail.next).toBe(null);

    expect(doubly.reverse2()).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    expect(doubly.head.value).toEqual(9);
    expect(doubly.head.next.value).toEqual(8);
    expect(doubly.head.next.next.value).toEqual(7);
    expect(doubly.tail.value).toEqual(1);
    expect(doubly.tail.next).toBe(null);
  });

  it('returns the list immediately if, when attempting to reverse, it consists of only one node', () => {
    const singly = new LinkedList();
    const doubly = new DoublyLL();
    singly.append(1);
    doubly.append(1);
    singly.reverse();
    doubly.reverse2();
    expect(singly.length).toEqual(1);
    expect(doubly.length).toEqual(1);
    expect(singly.head.next).toBe(null);
    expect(doubly.head.next).toBe(null);
    expect(singly.tail.value).toBe(1);
    expect(doubly.tail.value).toBe(1);
  });

  it('returns an error if the list is empty when reverse() is called', () => {
    const singly = new LinkedList();
    const doubly = new DoublyLL();
    expect(singly.reverse()).toEqual('The list is empty.');
    expect(doubly.reverse2()).toEqual('The list is empty.');
  });
});
