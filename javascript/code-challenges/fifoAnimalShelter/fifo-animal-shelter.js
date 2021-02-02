'use strict';

const Queue = require('./queues.js');

class AnimalShelter {
  constructor() {
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
  }

  enqueue(animal) {
    if (animal === 'dog') { this.dogQueue.enqueue('dog'); }
    else if (animal === 'cat') { this.catQueue.enqueue('cat'); }
    else { throw 'Invalid entry.'; }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      this.dogQueue.dequeue();
    } else if (pref === 'cat') {
      this.catQueue.dequeue();
    } else { return null; }
  }
}

module.exports = AnimalShelter;
