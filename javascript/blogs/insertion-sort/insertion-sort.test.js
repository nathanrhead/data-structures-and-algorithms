'use strict';

const insertionSort = require('./insertion-sort');

describe('insertionSort', () => {
  it ('sorts an array of randomly ordered integers in ascending order', () => {
    let array = [8,4,23,42,16,15];
    insertionSort(array);
    expect(array).toEqual([4,8,15,16,23,42]);
  });

  it ('sorts an array of descending integers in ascending order', () => {
    let array = [20,18,12,8,5,-2];
    insertionSort(array);
    expect(array).toEqual([-2,5,8,12,18,20]);
  });

  it ('sorts an array of integers that may repeat themselves in ascending order', () => {
    let array = [5,12,7,5,5,7];
    insertionSort(array);
    expect(array).toEqual([5,5,5,7,7,12]);
  });

  it ('sorts an array of nearly sorted integers in ascending order', () => {
    let array = [2,3,5,7,13,11];
    insertionSort(array);
    expect(array).toEqual([2,3,5,7,11,13]);
  });

});
