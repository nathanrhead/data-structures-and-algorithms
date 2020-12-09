'use strict';

// Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

let inputArray1 = [1, 2, 3, 4, 5];
const value1 = 'square';

let insertShiftArray = (arr, val) => {
  let outputArray = [];
  let midPoint;

  if( !(arr.length % 2) ) {
    midPoint = arr.length / 2;
  } else {
    midPoint = (arr.length / 2) + 0.5;
  }

  for( let i = 0; i <= arr.length; i++) {
    if(i < midPoint) { outputArray[i] = arr[i] };
    if(i === midPoint) { outputArray[i] = val };
    if(i > midPoint) { outputArray[i] = arr[i - 1] };
  }
  console.log(outputArray);
  return outputArray;
}

insertShiftArray(inputArray1, value1);