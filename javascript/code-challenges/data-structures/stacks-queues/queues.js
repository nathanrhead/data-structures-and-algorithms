'use strict';

const Node = require('./node');

class Queues {
  constructor() {
    this.front = null;
    this.end = null;
    this.size = 0;
  }

  enqueue(value) { // Takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) time performance.
    const node = new Node(value);
    if(!this.front) { // Or if(this.size === 0).
      this.front = node;
      this.end = node;
    } else {
      this.end.next = node;
      this.end = node;
    }
    this.size++;
    return this;
  }

  dequeue() { // Takes no argument; removes the node from the front of the queue and returns the node’s value, raising an exception when called on an empty queue.
    if(!this.front) return null; // Or if (this.size === 0).
    const temp = this.front;
    if (this.front === this.last) this.last = null;
    this.front = this.front.next;
    this.size--;
    return temp.value;
  }

  peek() { // Takes no argument; returns the value of the node located in the front of the queue without removing it from the queue, raising an exception when called on an empty queue.
    if(!this.front) return null;
    return this.front.value;
  }

  isEmpty() { // Takes no argument; returns a boolean indicating whether the queue is empty.
    return !this.front ? true : false;
  }
}

module.exports = Queues;
