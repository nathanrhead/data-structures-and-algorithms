# Stacks & Queues

## [Challenge 10](stacks-and-queues.js)
### Whiteboard - None Required

- Createa stack class with a "top" property and creates and empty stack when instantiated. Write push, pop, peek, and isEmpty methods to manage the stack's nodes.

- Create a queue class that with a "front" property that creates an empty queue when instantiated. Write push, pop, peek, and isEmpty methods to manage the stack's nodes.

- Write tests for the following actions:
  
  - can instantiate an empty stack;
  - can push onto a stack;
  - can push multiple values onto a stack;
  - can pop off the stack;
  - can empty a stack after multiple pops;
  - can peek the next item on the stack;
  - calling pop or peek on an empty stack raises an exception;

  - can instantiate an empty queue;
  - can enqueue into a queue;
  - can enqueue multiple values into a queue;
  - can dequeue out of a queue the expected value;
  - can peek into a queue, seeing the expected value;
  - can empty a queue after multiple dequeues;
  - calling dequeue or peek on empty queue raises exception.

## Approach & Efficiency

Big O is either 0(1). (There is no looping.)

## API: A description of each method publicly available to your Stack and Queue.

I. Stack

- push: takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) time performance.

- pop: takes no argument; removes the node from the top of the stack and returns the node’s value, raising an exception on an empty stack.

- peek: takes no argument; returns the value of the node located on top of the stack without removing it from the stack, raising an exception on an empty stack.

- isEmpty: takes no argument; returns a boolean indicating whether the stack is empty.

II. Queue

- enqueue: Takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) time performance.

- dequeue: takes no argument; removes the node from the front of the queue and returns the node’s value, raising an exception when called on an empty queue.

- peek: Takes no argument; returns the value of the node located in the front of the queue without removing it from the queue, raising an exception when called on an empty queue.

- isEmpty: Takes no argument; returns a boolean indicating whether the queue is empty.

## Resources and Links

- [Stacks](https://medium.com/better-programming/stacks-in-javascript-d2f0e4404eac);
