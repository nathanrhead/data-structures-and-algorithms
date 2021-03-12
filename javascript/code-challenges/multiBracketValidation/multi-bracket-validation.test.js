'use strict';

const multi = require('./multi-bracket-validation');

describe('the function', () => {
  it ('returns true when given a happy path', () => {
    let test1 = '()[]{}';
    let result = multi(test1);
    console.log('Result test 1:', result);
    expect(result).toBe(true);
  });

  it ('returns true when passed an emptry string', () => {
    let test2 = '';
    let result = multi(test2);
    console.log('Result test 2:', result);
    expect(result).toBe(true);
  });

  it ('returns false when string.length <= 1', () => {
    let test3 = '{';
    let result = multi(test3);
    console.log('Result test 3:', result);
    expect(result).toBe(false);
  });

  it ('returns false when opening !== closing', () => {
    let test4 = '([{}]))';
    let result = multi(test4);
    console.log('Result test 4:', result);
    expect(result).toBe(false);
  });

  it ('returns false when opening brackets fail to match their corresponding closing brackets, despite the fact that opening === closing', () => {
    let test5 = '(((}}}';
    let result = multi(test5);
    console.log('Result test 5:', result);
    expect(result).toBe(false);
  });

  it ('returns true when mixed with letters', () => {
    let test6 = '(one{two[three]two}one)';
    let result = multi(test6);
    console.log('Result test 6:', result);
    expect(result).toBe(true);
  });
});
