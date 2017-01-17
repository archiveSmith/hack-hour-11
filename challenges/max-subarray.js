'use strict';
/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let maxSum = -Infinity;
  let index = 0;

  function recurse(arr){
    if(arr.length === 0) return;
    let sum = 0;

      for(let i = index; i < arr.length; i++){
        sum += arr[i];
        if(sum > maxSum) maxSum = sum;
      }

    index++;
    recurse(arr.slice(index));
  }

  recurse(arr.slice(index));
  return maxSum;
}

module.exports = maxSubarray;
