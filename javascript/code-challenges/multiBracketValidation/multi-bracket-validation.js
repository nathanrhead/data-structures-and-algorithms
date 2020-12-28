'use strict';

//Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets: '()', '{}', '[]';

function multiBracketValidation(str) {
  let opening = 0;
  let closing = 0;

  for (let i = 0; i <= str.length-1; i++) {
    if (str.length <= 1) {
      return false;
    } else if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      opening++;
    } else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      closing++;
    }
  }
  return opening === closing ? true : false;
}

let test1 = '()[]{}';
let test2 = '(((]]}'; // This returns true, because 3 opening = 3 closing, but the opening and closing brackets don't match, so ultimately this is a poor solution.

module.exports = multiBracketValidation;