/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  // if (arr && arr[0] === target) return true ;
  // if (!arr) return false;
  // return false || findInOrderedSet(arr.slice(1), target)
  let half = Math.floor(arr.length / 2);
  if (arr && arr[0] === target) return true;
  if (arr[half]===target) return true;
  if (arr.length <= 1) return false;
  return arr[half] < target ? findInOrderedSet(arr.slice(half, arr.length), target) : findInOrderedSet(arr.slice(0, half),target) 
}

var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 3));  


module.exports = findInOrderedSet;
