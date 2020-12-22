# Queue with Stacks

## [Challenge 11](queue-with-stacks.js)
### ![Whiteboard 11](../../assets/code-challene11.png)

Implement a queue with its methods of enqueue() and dequeue() using only two stacks and the stack methods of push(), pop(), and peek().

For enqueue():
Input: stack =  [10]->[15]->[20];
Output: queue with a new value appended to the rear of the queue.
e.g.: [5]-> [10]->[15]->[20].

For dequeue():
Input: stack = [5]-> [10]->[15]->[20]
Output: queue with a value removed from the front of the queue.
e.g.: [5]-> [10]->[15]

## Approach & Efficiency

Big O for space:
Big O for time:

## API: A description of each method publicly available to your queue.

- push: takes any value as an argument and adds a new node with that value to the top of the stack--but (somehow) to the end of the queue--with an O(1) time performance.

- pop: takes no argument; removes the node from the top of the stack--the front of the queue--and returns the node’s value, raising an exception on an empty queue.

- peek: takes no argument; returns the value of the node located on top of the stack--or the front of the queue--without removing it from the stack, raising an exception on an empty queue.

## Resources and Links
