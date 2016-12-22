/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!arr || arr.length < 2) return false;
  let i = 0;
  const len = arr.length;
  const lookup = [];
  for (i; i < len; i += 1) {
    if (lookup.indexOf(arr[i]) > -1) return true;
    lookup.push(n - arr[i]);
  }
  return false;
}

module.exports = twoSum;
