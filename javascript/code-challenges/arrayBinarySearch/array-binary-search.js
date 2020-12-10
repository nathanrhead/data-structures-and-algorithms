'use strict';

// Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

let array = [1,2,3,4,5,6, 7];
let searchKey = 6;

const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length-1;
  let midpoint = arr.length / 2;
  if (midpoint % 2) { midpoint = midpoint + 0.5};
  console.log('starting midpoint:', midpoint)
  while (arr[midpoint] != val && start < end) {
    if ( arr[midpoint] > val ) { end = midpoint-1 }
    else if ( arr[midpoint] < val ) { start = midpoint+1 };
    if (!((end + start) % 2) ) { midpoint = (end + start) / 2 }
    else { (midpoint) = ((end + start) / 2) + 0.5 };
    console.log('looping midpoint:', midpoint)
  }
  console.log('final midpoint:', midpoint)

  return (midpoint != val) ? -1 : midpoint
}

binarySearch(array, searchKey);