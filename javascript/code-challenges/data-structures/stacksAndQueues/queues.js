'use strict';

const Node = require('./node');

class Queues {
  constructor() {
    this.front = null;
    this.end = null;
    this.size = 0;
  }
  
  enqueue(value) { // takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) time performance.
    let node = new Node(value);
    if(!this.front) {
      this.front = node;
      this.end = node;
    } else { 
      let temp = this.front;
      this.front = node; 
      this.front.next = temp;
    }  
    this.size++;
  }

  dequeue() { // Takes no argument; removes the node from the front of the queue and returns the node’s value, raising an exception when called on an empty queue.

    if(!this.front) { throw 'Queue is empty; cannot dequeue.' };
    let temp = this.front;
    this.front = this.front.next;
    this.size--;

    return temp.value;
  }

  peek() { // Takes no argument; returns the value of the node located in the front of the queue without removing it from the queue, raising an exception when called on an empty queue.

    if(!this.front) { throw 'Cannot peek at an empty queue.'; }
    return this.front.value;
  }

  isEmpty() { // Takes no argument; returns a boolean indicating whether the queue is empty.

    if(!this.front) { return true }
    else if(this.front.value) { return false; }
  }
}

module.exports = Queues;