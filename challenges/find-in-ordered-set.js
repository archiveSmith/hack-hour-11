/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  const random = Math.floor(arr.length * Math.random());
  if (arr.length === 0) return false;
  if (arr[random] === target) return true;
  if (arr[random] < target) return findInOrderedSet(arr.slice(random + 1), target);
  if (arr[random] > target) return findInOrderedSet(arr.slice(0, random), target);
}

const nums = [1, 4, 6, 7, 9, 17, 45, 99, 100, 101, 120];
console.log(findInOrderedSet(nums, 100));

module.exports = findInOrderedSet;
