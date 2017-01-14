/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (!arr.length) return undefined;
  if (arr.every(e => e < 0)) return arr.reduce((a, b) => Math.max(a, b));
  let max = -Infinity;

  function add(sum, array) {
    if (sum > max) max = sum;
    if (!array.length) return;

    add(sum + array[0], array.slice(1));
    add(0, array.slice(1));
  }

  add(0, arr);
  return max;
}

module.exports = maxSubarray;
