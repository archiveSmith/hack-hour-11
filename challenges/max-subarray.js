/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  // // O(n^3) time complexity
  // let temp = [];
  // let highest = -Infinity;
  // for (let i = 0; i < arr.length; i += 1) {
  //   for (let j = i; j < arr.length; j += 1) {
  //     temp.push(arr[j]);
  //     let result = temp.reduce((acc, curr) => acc + curr);   
  //     if (result > highest) {
  //       highest = result;
  //     }
  //   }
  //   temp = [];
  // }
  // return highest;
  
  // O(n) time complexity
  var currentMax = Number.NEGATIVE_INFINITY;
  var finalMax = Number.NEGATIVE_INFINITY;

  for (var i = 0; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    finalMax = Math.max(finalMax, currentMax);
  }
  return finalMax;
}

module.exports = maxSubarray;
