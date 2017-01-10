'use strict';
/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  if(!array) return -1;
  
  if(array[0] !== 1) return array[0];
  for(let i = 0; i < array.length - 1; i++){
    if(!(array[i] < array[i + 1])) return array[i + 1];
  }
}

// let arr = [];
// for(let i = 0; i < 40; i++) arr[i] = i+1;
// arr[23] = 17;
// console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
