'use strict';

// Require our linked list implementation
const LinkedList = require('..');

describe('Linked List', () => {
  it('works', () => {
    new LinkedList(true);
    expect(true).toBeTruthy();
  });

  it('inserts a node at the begining of an empty list', () => {
    const list = new LinkedList();
    list.insert('Henry');
    expect(list.head.value).toEqual('Henry');
  })

  it('inserts a node at the beginning of a list', () => {
    const list = new LinkedList();
    list.insert('Norah');
    expect(list.head.value).toEqual('Norah');
  })

  it('looks for the presence of a given value in the list', () => {
    const list = new LinkedList();
    list.insert('Norah');
    list.insert('Sammy');
    list.insert('Ben');
    list.insert('Tim');
    list.insert('Caleb');
    // expect(list.includes('Ben')).toBe(true);
    expect(list.includes('Sasha')).toBe(false);
  })
 it('compiles all values of the list into a string', () => {
   const list = new LinkedList();
   list.insert('Norah');
   list.insert('Sammy');
   list.insert('Ben');
   list.insert('Tim');
   list.insert('Caleb');
   expect(list.toString()).toBe('{ Caleb } -> { Tim } -> { Ben } -> { Sammy } -> { Norah } -> NULL');
  });
})
