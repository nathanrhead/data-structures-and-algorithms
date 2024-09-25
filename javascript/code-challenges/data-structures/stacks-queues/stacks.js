'use strict';

const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(item) { // Takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) time performance.
    const node = new Node(item);

    if(!this.top) { // Or, if (this.size === 0).
      this.top = node;
      this.bottom = node;
    } else {
      const temp = this.top;
      this.top = node;
      this.top.next = temp;
    }
    this.size++;
    return this;
  }

  pop() { // Takes no argument; removes the node from the top of the stack and returns the node’s value, raising an exception on an empty stack.

    if(!this.top) return null;
    const temp = this.top;
    if(this.top === this.bottom) this.bottom = null; // Or if (this.size === 0).
    this.top = this.top.next;
    this.size--;
    return temp.value;
  }

  peek() { // Takes no argument; returns the value of the node located on top of the stack without removing it from the stack, raising an exception on an empty stack.

    if(!this.top) return null;
    return this.top.value;
  }

  isEmpty() { // Takes no argument; returns a boolean indicating whether the stack is empty.
    return !this.top ? true : false;
  }
}

module.exports = Stack;
