/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (Math.max(...arr) < 0) {
    return Math.max(...arr);
  }
  let maxSoFar = 0; // 1, 3, 13, 16, 18
  let maxEnd = 0; // 1, -1 ,0, 3, 13, 9, 16, 18, 13,
  for (let i = 0; i < arr.length; i += 1) {
    maxEnd += arr[i];
    if (maxEnd < 0) {
      maxEnd = 0;
    } else if (maxSoFar < maxEnd) {
      maxSoFar = maxEnd;
    }
  }
  return maxSoFar;
}

module.exports = maxSubarray;
