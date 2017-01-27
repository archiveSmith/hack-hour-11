/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
<<<<<<< HEAD
var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
=======

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
 */


function findInOrderedSet(arr, target) {
<<<<<<< HEAD
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
=======

}


module.exports = findInOrderedSet;
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
