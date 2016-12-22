/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const diffs = {};
  const len = arr.length;

  let diff;

  for (let i = 0; i < len; i += 1) {
    diff = n - arr[i];
    if (!diffs[diff]) {
      diffs[arr[i]] = true;
    } else {
      return true;
    }
  }

  return false;
}

module.exports = twoSum;
