'use strict';
// Revised 11 March 2021, because the first solution--see the whiteboard--didn't account for type, only number.

//Problem domain: Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets: '()', '{}', '[]';

function multiBracketValidation(str) {
  if (!str) return true;

  let parentheses = [];
  let curlyBraces = [];
  let brackets = [];

  let inputArray = str.split('');
  console.log({inputArray});
  for (let i = 0; i <= inputArray.length - 1; i++) {
    if (inputArray[i] === '(' || inputArray[i] === ')') parentheses.push(inputArray[i]);
    if (inputArray[i] === '{' || inputArray[i] === '}') curlyBraces.push(inputArray[i]);
    if (inputArray[i] === '[' || inputArray[i] === ']') brackets.push(inputArray[i]);
  }
  return ( (parentheses.length % 2 === 0) && (curlyBraces.length % 2 === 0) && (brackets.length % 2 === 0) ) ? true : false;
}

module.exports = multiBracketValidation;
