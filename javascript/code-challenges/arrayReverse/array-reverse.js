'use strict';

let array = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  let reversedArray = [];
  let answerIndex = 0;

  for (let i = arr.length-1; i >= 0; i--) {
        reversedArray[answerIndex] = arr[i];
        answerIndex++;
      }
      console.log(reversedArray);
    }

reverseArray(array);

// function reverseArray(arr) {
//   let reversedArray = [];
//   for (let i=arr.length-1; i>=0; i--) {
//     reversedArray.push(arr[i]);
//   }
//   console.log(reversedArray);
//   return reversedArray;
// }

// reverseArray(array);