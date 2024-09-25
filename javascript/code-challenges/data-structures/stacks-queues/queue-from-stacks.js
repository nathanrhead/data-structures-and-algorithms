'use strict';

const Stack = require('./stacks');

// Using a Stack class.
class QueueFromStacks1 {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  enqueue(value) {
    let current = this.stackOne.size;

    while(this.stackOne.size) {
      current = current.next;
      this.stackTwo.push(this.stackOne.pop());
    }

    this.stackTwo.push(value);
  }

  dequeue() {
    let current = this.stackTwo.top;

    while (this.stackTwo.top) {
      current = current.next;
      this.stackOne.push(this.stackTwo.pop());
    }

    return this.stackOne.pop(); // Returns the value popped off the top of the stack (which is the last value pushed in, in other words, the end of the array, or the front of the queue = dequeueing).
  }

  peek() {
    if (this.stackOne.bottom) return this.stackOne.bottom.value;
    else if (this.stackTwo.bottom) return this.stackTwo.bottom.value;
    else return null;
  }

  isEmpty() {
    return (!this.stackOne.bottom && !this.stackTwo.bottom) ? true : false;
  }
}

// Using arrays as stacks.
class QueueFromStacks2 {
  constructor() {
    this.stackOne = [];
    this.stackTwo = [];
  }

  enqueue(value) {
    const length = this.stackOne.length;

    for (let i = 0; i < length; i++) {
      this.stackTwo.push(this.stackOne.pop());
    }

    this.stackTwo.push(value);

    return this;
  }

  dequeue() {
    if (this.stackOne.length === 0 && this.stackTwo.length === 0) return null;

    const length = this.stackTwo.length;

    for (let i = 0; i < length; i++) {
      this.stackOne.push(this.stackTwo.pop());
    }

    return this.stackOne.pop();
  }

  peek() {
    if (this.stackOne.length === 0 && this.stackTwo.length === 0) return null;
    return this.stackTwo.length > 0 ? this.stackTwo[0] : this.stackOne[this.stackOne.length - 1];
  }

  isEmpty() {
    return (this.stackOne.length === 0 && this.stackTwo.length === 0) ? true : false;
  }
}

module.exports = { QueueFromStacks1, QueueFromStacks2 };
