'use strict';

const Stack = require('../data-structures/stacksAndQueues/stacks');

class psuedoQueue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  enqueue(value) {
    this.stackOne.push(value);
  }

  dequeue() {
    if(!this.stackOne.top) { throw 'No DQing from an empty queue.'; }
    let current = this.stackOne.top;
    while (this.stackOne.top) {
      current = current.next;
      this.stackTwo.push(this.stackOne.pop());
    }
    return this.stackTwo.pop(); // Returns the value popped off the top of the stack (which is the last value pushed in, in other words, the front of the queue = dequeueing).
  }
}

module.exports = psuedoQueue;
