/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let l = 0, r = arr.length - 1;

  while(l < r){
    if(arr[l] === target || arr[r] === target) return true;
    l++; r--;
  }
  return false;
}


module.exports = findInOrderedSet;
