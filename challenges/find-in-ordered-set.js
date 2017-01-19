/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  // cut array in half, check if that mid-point is target
  // if yes, return true
  // if not, check if it's greater or less than target and recurse.
  // repeat until the length of the array can't be halved.
  // if it's still not target, return false.

  // O(log(n))
  let half = Math.floor(arr.length / 2);

  if (arr[half] === target) return true;
  if (arr.length === 1) return false;

  if (arr[half] > target) {
    return findInOrderedSet(arr.slice(0, half), target);
  }

  if (arr[half] < target) {
    return findInOrderedSet(arr.slice(half + 1), target);
  }
}


module.exports = findInOrderedSet;
