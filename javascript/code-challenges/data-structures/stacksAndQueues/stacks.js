'use strict';

const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
    this.last = null;
    this.size = 0;
  }
  
  push(item) { // Takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) time performance.
    let node = new Node(item);
    if(!this.top) {
      this.top = node;
      this.last = node;
    } else { 
      let temp = this.top;
      this.top = node; 
      this.top.next = temp;
    }  
    this.size++;
  }

  pop() { // Takes no argument; removes the node from the top of the stack and returns the node’s value, raising an exception on an empty stack.

    if(!this.top) { throw 'Can\'t pop from an empty stack.'; };
    let temp = this.top;
    if(this.top === this.last) { this.last = null }
    this.top = this.top.next;
    this.size--;
    return temp.value;
  }

  peek() { // Takes no argument; returns the value of the node located on top of the stack without removing it from the stack, raising an exception on an empty stack.

    if(!this.top) { throw 'Can\'t peek at an empty stack.'; }
    return this.top.value;
  }

  isEmpty() { // Takes no argument; returns a boolean indicating whether the stack is empty.

    if(!this.top) { return true }
    else if(this.top.value) { return false; }
  }
}

module.exports = Stack;
