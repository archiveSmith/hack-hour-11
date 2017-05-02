/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {

  let mid = Math.floor(arr.length/2);
  //const midNum = arr[mid];

  while (mid > 0 && mid < arr.length - 1) {
    if (arr[mid] === target) {
      return true;
    } else if (target < arr[mid]) {
      mid = Math.floor(mid/2);
    } else {
      mid = Math.floor((arr.length + mid) / 2);
    }
  }
  
  if (arr[mid] === target) return true;
  
  return false;
}

// var nums = [1, 4, 6, 7, 9, 17, 45, 50]
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false
// console.log(findInOrderedSet(nums, 50));  //-> true
// console.log(findInOrderedSet(nums, 1));  //-> true


module.exports = findInOrderedSet;
