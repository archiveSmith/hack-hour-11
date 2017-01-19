/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (!target || !arr || !arr.length) return undefined;
  if (arr.length === 1 && arr[0] !== target) return false;
  const len = arr.length;
  const x = Math.floor(len / 2);
  if (arr[x] === target) return true;
  else if (arr[x] > target) return findInOrderedSet(arr.slice(0, x), target);
  else if (arr[x] < target) return findInOrderedSet(arr.slice(-x), target);
}

// var nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4)); // -> true
// console.log(findInOrderedSet(nums, 2)); // -> false

module.exports = findInOrderedSet;
