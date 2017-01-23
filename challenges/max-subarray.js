/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  // sums arr
  const sums = [];
  // start looping through arr
  for (let i = 0; i < arr.length; i += 1) {
    // each iteration start with current element and loop through rest array
    let stop = i + 1;
    let sum = 0;
    while (stop < arr.length) {
      for (let j = i; j < stop; j += 1) {
        sum += arr[j];
      }
      stop += 1;
    }
    sums.push(sum);
  }
  // loop through sums and find max value
  return Math.max(...sums);
}

module.exports = maxSubarray;
