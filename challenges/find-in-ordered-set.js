/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */



function findInOrderedSet(arr, target) {
  
  while((arr.length) > 0) {
    if (target == arr[0]) return true;
    else if (target < arr[(arr.length - 1)/2 + (arr.length - 1)%2]) arr = arr.slice(0, ((arr.length - 1)/2 + (arr.length - 1)%2));
    else arr = arr.slice(((arr.length - 1)/2 + (arr.length - 1)%2))

  }
  
  return false

}


module.exports = findInOrderedSet;
