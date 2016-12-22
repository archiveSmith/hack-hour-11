/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const diffs = {};
  const len = arr.length;

  for (let i = 0; i < len; i += 1) {
    if (diffs[arr[i]]) return true;
    diffs[n - arr[i]] = arr[i];
  }
  return false;
}

module.exports = twoSum;