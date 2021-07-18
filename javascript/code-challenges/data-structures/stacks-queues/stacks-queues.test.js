'use strict';

const Stack = require('./stacks');
const Queue = require('./queues');
const { QueueFromStacks1, QueueFromStacks2 } = require('./queue-from-stacks');

////////Testing Stacks////////////

describe('stacks', () => {
  it('creates an empty stack', () => {
    const stack = new Stack();
    expect(stack.top).toBe(null);
  });

  it('returns null if no values are in the stack', () => {
    const stack = new Stack();
    expect(stack.top).toEqual(null);
  });

  describe('push', () => {
    it('adds a value to the top of a stack', () => {
      const stack = new Stack();
      stack.push('smile');
      stack.push('frown');
      expect(stack.top.value).toEqual('frown');
    });

    it('adds multiple values to the stack', () => {
      const stack = new Stack();
      stack.push('smile');
      stack.push('frown');
      stack.push('choice');
      expect(stack.size).toEqual(3);
    });
  });

  describe('pop()', () => {
    it('removes a value from the top of a stack', () => {
      const stack = new Stack();
      stack.push('smile');
      stack.push('frown');
      stack.push('choice');
      expect(stack.pop()).toEqual('choice');
    });

    it('empties a stack after multiple pops', () => {
      const stack = new Stack();
      stack.push('smile');
      stack.push('frown');
      stack.push('choice');
      stack.pop('smile');
      stack.pop('frown');
      stack.pop('choice');
      expect(stack.top).toEqual(null);
    });

    it('returns null when calling pop on an empty stack', () => {
      const stack = new Stack();
      expect(stack.pop()).toBe(null);
    });
  });

  describe('peek()', () => {
    it('returns the value of the top node', () => {
      const stack = new Stack();
      stack.push('smile');
      stack.push('frown');
      stack.push('choice');
      expect(stack.peek()).toEqual('choice');
    });

    it('returns null when calling peek on an empty stack', () => {
      const stack = new Stack();
      expect(stack.peek()).toBe(null);
    });
  });

  describe('isEmpty()', () => {
    it('returns true if the stack is empty', () => {
      const stack = new Stack();
      expect(stack.isEmpty()).toBe(true);
    });
  });
});

////////Testing Queues////////////

describe('queues', () => {
  it('creates an empty queue', () => {
    const queue = new Queue();
    expect(queue.front).toBe(null);
  });

  it('returns null if no values are in the queue', () => {
    const queue = new Queue();
    expect(queue.front).toEqual(null);
  });

  describe('enqueue', () => {
    it('adds a value to the end of the queue', () => {
      const queue = new Queue();
      queue.enqueue('smile');
      queue.enqueue('frown');
      queue.enqueue('turned');
      queue.enqueue('upside-down');
      expect(queue.end.value).toEqual('upside-down');
    });

    it('adds multiple values to the queue', () => {
      const queue = new Queue();
      queue.enqueue('smile');
      queue.enqueue('frown');
      queue.enqueue('choice');
      expect(queue.size).toEqual(3);
    });
  });

  describe('dequeue()', () => {
    it('removes a value from the front of a queue', () => {
      const queue = new Queue();
      queue.enqueue('smile');
      queue.enqueue('frown');
      queue.enqueue('choice');
      expect(queue.dequeue()).toEqual('smile');
    });

    it('empties a queue after multiple dequeues', () => {
      const queue = new Queue();
      queue.enqueue('smile');
      queue.enqueue('frown');
      queue.enqueue('choice');
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.size).toEqual(0);
    });

    it('returns null when dequeue is called on an empty queue', () => {
      const queue = new Queue();
      expect(queue.dequeue()).toBe(null);
    });
  });

  describe('peek()', () => {
    it('returns the value of the top node', () => {
      const queue = new Queue();
      queue.enqueue('smile');
      queue.enqueue('frown');
      queue.enqueue('choice');
      expect(queue.peek()).toEqual('smile');
    });

    it('returns null when calling peek on an empty queue', () => {
      const queue = new Queue();
      expect(queue.peek()).toBe(null);
    });

  });

  describe('isEmpty()', () => {
    it('returns true if the queue is empty', () => {
      const queue = new Queue();
      expect(queue.isEmpty()).toBe(true);
    });
  });

  ////////Testing Queues made from Stacks////////////

  describe('queues made from stacks', () => {
    it('creates an empty queue', () => {
      const queue1 = new QueueFromStacks1();
      const queue2 = new QueueFromStacks2();
      expect(queue1.stackOne.top && queue2.stackTwo.top).toBe(null);
      expect(queue2.stackTwo.length && queue2.stackOne.length).toEqual(0);
    });
  });

  describe('enqueue', () => {
    it('adds a value to the end of the queue', () => {
      const queue1 = new QueueFromStacks1();
      const queue2 = new QueueFromStacks2();
      queue1.enqueue('smile');
      queue1.enqueue('frown');
      queue1.enqueue('turned');
      queue1.enqueue('upside-down');

      queue2.enqueue('smile');
      queue2.enqueue('frown');
      queue2.enqueue('turned');
      queue2.enqueue('upside-down');

      expect(queue1.stackTwo.top.value).toEqual('upside-down');
      expect(queue2.stackTwo[queue2.stackTwo.length - 1]).toEqual('upside-down');
    });

    it('adds multiple values to the queue', () => {
      const queue1 = new QueueFromStacks1();
      const queue2 = new QueueFromStacks2();
      queue1.enqueue('smile');
      queue1.enqueue('frown');
      queue1.enqueue('choice');

      queue2.enqueue('smile');
      queue2.enqueue('frown');
      queue2.enqueue('choice');

      expect(queue1.stackTwo.size).toEqual(3);
      expect(queue2.stackTwo.length).toEqual(3);
    });
  });

  describe('dequeue()', () => {
    const queue1 = new QueueFromStacks1();
    const queue2 = new QueueFromStacks2();

    queue1.enqueue('smile');
    queue1.enqueue('frown');
    queue1.enqueue('choice');

    queue2.enqueue('smile');
    queue2.enqueue('frown');
    queue2.enqueue('choice');

    it('removes a value from the front of a queue', () => {
      expect(queue1.dequeue()).toEqual('smile');
      expect(queue2.dequeue()).toEqual('smile');
    });

    it('empties a queue after multiple dequeues', () => {
      queue1.dequeue();
      queue1.dequeue();
      queue2.dequeue();
      queue2.dequeue();
      expect(queue1.stackOne.size).toEqual(0);
      expect(queue2.stackOne.length && queue2.stackOne.length).toEqual(0);
    });

    it('returns null when dequeue is called on an empty queue', () => {
      expect(queue1.dequeue()).toBe(null);
      expect(queue2.dequeue()).toBe(null);
    });
  });

  describe('peek()', () => {
    it('returns the value of the top node', () => {
      const queue1 = new QueueFromStacks1();
      const queue2 = new QueueFromStacks2();
      queue1.enqueue('smile');
      queue1.enqueue('frown');
      queue1.enqueue('choice');

      queue2.enqueue('smile');
      queue2.enqueue('frown');
      queue2.enqueue('choice');

      expect(queue1.peek()).toEqual('smile');
      expect(queue2.peek()).toEqual('smile');
    });

    it('returns null when calling peek on an empty queue', () => {
      const queue1 = new QueueFromStacks1();
      const queue2 = new QueueFromStacks2();
      expect(queue1.peek()).toBe(null);
      expect(queue2.peek()).toBe(null);
    });
  });

  describe('isEmpty()', () => {
    it('returns true if the queue is empty and false if not', () => {
      const queue1 = new QueueFromStacks1();
      const queue2 = new QueueFromStacks2();
      queue1.enqueue('smile');
      queue2.enqueue('big');

      console.log(queue1.stackOne.bottom === null, queue2.stackTwo.bottom === null);

      expect(queue1.isEmpty()).toBe(false);
      expect(queue2.isEmpty()).toBe(false);

      queue1.dequeue();
      queue2.dequeue();

      expect(queue1.isEmpty()).toBe(true);
      expect(queue2.isEmpty()).toBe(true);
    });
  });
});
