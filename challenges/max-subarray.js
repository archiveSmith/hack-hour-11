/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let sum = 0;
  let ans = 0;

  console.log("Start ans:", ans, " Start sum:", sum);
  for (let i = 0; i < arr.length; i++) {
    ans = Math.max(0, ans + arr[i]);
    sum = Math.max(sum, ans);
    console.log("Current sum:", ans, " Current highest:", sum, " Current digit being added:", arr[i]);
  }
  console.log("Last checked: ", ans, " Final highest sum:", sum);
  return sum;

}
maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])


/* Take a number or dont take a number
if you do take a number, slice and add the next number
add it to your sum memoize object  sum: 'Array'
if you dont take a number, slice and just move on
// recursive add all permutations to your object and take largest sum?
*/
module.exports = maxSubarray;