/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
 */


function findInOrderedSet(arr, target) {
  let i = 0;
  let mid;
  while (arr[i] !== target) {
    if (arr[i] < target && arr[i + 1] > target) return false;
    mid = Math.floor((i + arr.length - 1) / 2)
    if (target > arr[mid]) i = mid;
    else i += 1;
  }
  return true;
}


module.exports = findInOrderedSet;