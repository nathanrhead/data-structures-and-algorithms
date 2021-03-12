# Multi-bracket Validation

- This is the code challenge for class 13 of Code Fellows 401.
- The task is to write a function that receives a string of opening and closing brackets (and possibly extraneous characters) and returns true in the event that the opening brackets match the closing brackets in type and number; otherwise, return false.

## Challenge

- Whiteboard with a partner the solution, determining approaches to testing and Big O for space and time.
- Write the code and tests for it.
- Timebox of two hours. (Revisited and rewritten on 11 March 2021.)

## Approach & Efficiency

- Big O for space: 0(n): created 3 new arrays with n number of indices, and O(n) + O(n) + O(n) = O(n).
- Big 0 for time: 0(n): because of the for loop and the n number of times the loop may run before getting to the end.

## Solution

![Whiteboard](../../assets/code-challenge13.png)
[Coded Solution](./multi-bracket-validation.js)
