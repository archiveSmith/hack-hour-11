/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  // get index of middle element
  let middle = arr[Math.floor(arr.length / 2)];
  // let arr1 = arr.slice(0, Math.floor(arr.length / 2));
  // let arr2 = arr.slice(Math.floor(arr.length / 2) + 1);
  // while loop
  while (middle !== target) {
    if (target < middle) {
      let tempArr = arr.slice(0, middle);
      if (tempArr.length === 1) return false;
      middle = tempArr[Math.floor(tempArr.length / 2)];
    } else if (target > middle) {
      let tempArr = arr.slice(middle + 1);
      if (tempArr.length === 1) return false;
      middle = tempArr[Math.floor(tempArr.length / 2)];
    }
  }
  return true;
  // check if target is equal to selected element
  // if not, check if target is greater or less
  // change selected element
}


module.exports = findInOrderedSet;
