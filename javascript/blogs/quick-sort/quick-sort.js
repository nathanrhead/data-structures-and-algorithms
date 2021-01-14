'use strict';

// arr = [8,4,23,42,16,15]; left = 0; right = arr.length-1
function quickSort(arr, left, right) {
  if (left < right) {
    // Partition the array by setting the position of the pivot value.
    let position = partition(arr, left, right);
    // Sort the left.
    quickSort(arr, left, position - 1);
    // Sort the right.
    quickSort(arr, position + 1, right);
  }
};

function partition (arr, left, right) {
  // Set a pivot value as a point of reference.
  let pivot = arr[right];
  // Create a variable to track the largest index of numbers lower than the defined pivot.
  let low = left - 1;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] = pivot) {
      low++;
      swap(arr, i, low);
      swap(arr, right, low + 1)
    };
    return low + 1;
  }
}

function swap(arr, i, low) {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}


let arr = [8,4,23,42,16,15]; // happy path
let arr1 = [20,18,12,8,5,-2] // reverse sorted
let arr2 = [5,12,7,5,5,7] // few unique numbers
let arr3 = [2,3,5,7,13,11] // nearly sorted

const left = 0;
const right = arr.length-1


quickSort(arr, left, right);
console.log('ARR:', arr);