/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if(!arr || arr.length === 0) return undefined;
  
  let answer = [];
  
  const recurser = (array) => {
    if(array.length === 0) return;
    answer.push(array.reduce((base, current) => base + current));
    return recurser(array.slice(1)) + recurser(array.slice(0, array.length - 1))
  }
  
  recurser(arr)
  
  return Math.max(...answer)
}

module.exports = maxSubarray;
