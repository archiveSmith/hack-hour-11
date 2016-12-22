"use strict";
/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let i = 0;
  let len = arr.length;
  let holder = {};

  while( i < len){
    if((n - arr[i]) in holder) return true;
    holder[arr[i]] = true;
    i++;
  }
  
  return false;
}

module.exports = twoSum;
