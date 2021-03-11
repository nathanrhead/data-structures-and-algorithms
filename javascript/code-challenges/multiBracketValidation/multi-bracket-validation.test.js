'use strict';

const multi = require('./multi-bracket-validation');

describe('the function', () => {
  it ('returns true when given a happy path', () => {
    let test1 = '()[]{}';
    let result = multi(test1);
    expect(result).toBe(true);
  });

  it ('returns true when passed an emptry string', () => {
    let test2 = '';
    let result = multi(test2);
    expect(result).toBe(true);
  });

  it ('returns false when string.length <= 1', () => {
    let test3 = '{';
    let result = multi(test3);
    expect(result).toBe(false);
  });

  it ('returns false when opening != closing', () => {
    let test4 = '([{}]))';
    let result = multi(test4);
    expect(result).toBe(false);
  });

  // This test fails and is an indicator of the poor quality of the solution, this being a large loop hole.
  it ('returns false when opening brackets fail to match their corresponding closing brackets, despite the fact that opening === closing', () => {
    let test5 = '(((}}}';
    let result = multi(test5);
    expect(result).toBe(false);
  });

});
