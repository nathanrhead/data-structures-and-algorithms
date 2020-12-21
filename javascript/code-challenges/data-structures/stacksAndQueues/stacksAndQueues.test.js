'use strict';

const Stack = require('./stacks');
const Queue = require('./queues');

describe('stacks', () => {
  it ('creates an empty stack', () => {
    let stack = new Stack();
    expect(stack.top).toBe(null);
  });

  it('returns null if no values are in the stack', () => {
    let stack = new Stack();
    expect(stack.top).toEqual(null);
  });

  describe('push', () => {
    it('adds a value to the top of a stack', () => {
      let stack = new Stack();
      stack.push('smile');
      expect(stack.top.value).toEqual('smile');
    });

    it('adds multiple values to the stack', () => {
      let stack = new Stack();
      stack.push('smile');
      stack.push('frown');
      stack.push('choice');
      expect(stack.size).toEqual(3);
    })
  });

  describe('pop()', () => {
    it('removes a value from the top of a stack', () => {
      let stack = new Stack();
      stack.push('smile');
      stack.push('frown');
      stack.push('choice');
      let popped = stack.pop();
      expect(popped).toEqual('choice');
    });

    it('empties a stack after multiple pops', () => {
      let stack = new Stack();
      stack.push('smile');
      stack.push('frown');
      stack.push('choice');
      stack.pop('smile');
      stack.pop('frown');
      stack.pop('choice');
      expect(stack.top).toEqual(null);
    });

    it('throws an exception when calling pop on an empty stack', () => {
      let stack = new Stack();
      let popped = stack.pop();
      expect(popped).toEqual(null);
    })

  });

  describe('peek()', () => {
    it('returns the value of the top node', () => {
      let stack = new Stack();
      stack.push('smile');
      stack.push('frown');
      stack.push('choice');
      let peeked = stack.peek();
      expect(peeked).toEqual('choice');
    });

    it('throws an exception when calling peek on an empty stack', () => {
      let stack = new Stack();
      let peeked = stack.peek();
      expect(peeked).toEqual(null);
    })
  });

  describe('isEmpty()', () => {
    it('returns true if the stack is empty', () => {
      let stack = new Stack();
      let emptyStack = stack.isEmpty();
      expect(emptyStack).toBe(true);
    });
  });
});

describe('queues', () => {
  it ('creates an empty queue', () => {
    let queue = new Queue();
    expect(queue.front).toBe(null);
  });

  it('returns null if no values are in the queue', () => {
    let queue = new Queue();
    expect(queue.front).toEqual(null);
  });

  describe('enqueue', () => {
    it('adds a value to the end of the queue', () => {
      let queue = new Queue();
      queue.enqueue('smile');
      expect(queue.end.value).toEqual('smile');
    });

    it('adds multiple values to the queue', () => {
      let queue = new Queue();
      queue.enqueue('smile');
      queue.enqueue('frown');
      queue.enqueue('choice');
      expect(queue.size).toEqual(3);
    })
  });

  describe('dequeue()', () => {
    it('removes a value from the front of a queue', () => {
      let queue = new Queue();
      queue.enqueue('smile');
      queue.enqueue('frown');
      queue.enqueue('choice');
      let dequeue = queue.dequeue();
      expect(dequeue).toEqual('choice');
    });

    it('empties a queue after multiple dequeues', () => {
      let queue = new Queue();
      queue.enqueue('smile');
      queue.enqueue('frown');
      queue.enqueue('choice');
      queue.dequeue('smile');
      queue.dequeue('frown');
      queue.dequeue('choice');
      expect(queue.size).toEqual(0);
    });
  });

  describe('peek()', () => {
    it('returns the value of the top node', () => {
      let stack = new Stack();
      stack.push('smile');
      stack.push('frown');
      stack.push('choice');
      let peeked = stack.peek();
      expect(peeked).toEqual('choice');
    });

    it('throws an exception when calling peek on an empty queue', () => {
      let queue = new Queue();
      let peeked = queue.peek();
      expect(peeked).toEqual(null);
    })

  });

  describe('isEmpty()', () => {
    it('returns true if the queue is empty', () => {
      let queue = new Queue();
      let emptyQueue = queue.isEmpty();
      expect(emptyQueue).toBe(true);
    });
  });
})