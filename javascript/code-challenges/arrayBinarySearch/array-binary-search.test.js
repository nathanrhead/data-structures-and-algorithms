'use strict';

// const binarySearch = require('./array-binary-search');

const binarySearch = require('./array-binary-search');

describe('binary search of a sorted array', () => {
  it ('returns the index of a found value', () => {
    const array = [1,2,3,4,5,6,7,8,9];
    const result = binarySearch(array, 6);
    expect(result).toEqual(5);
  });

  it ('returns -1 when the value does not exist in the array', () => {
    const array = [1,2,3,4,5,6,7,8,9];
    const result = binarySearch(array, 10);
    expect(result).toEqual(-1);
  });

  it ('returns the index of a vound value from an array of negative numbers, as long as those numbers are still in ascending order', () => {
    const array = [-9,-8,-7,-6,-5,-4,-3,-2,-1];
    const result = binarySearch(array, -8);
    expect(result).toEqual(1);

  })
});
