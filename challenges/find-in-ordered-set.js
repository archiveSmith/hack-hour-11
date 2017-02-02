/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


// function findInOrderedSet(arr, target) {
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i]===target)return true;
//   }
// }

function findInOrderedSet(arr, target){
  let mid = Math.floor(arr.length/2);
  if(arr[mid] ===target)return true;
  if(arr.length ===1)return false;

  if(arr[mid] > target)
    return findInOrderedSet(arr.slice(0, mid),target);
  if(arr[mid] < target)
    return findInOrderedSet(arr.slice(mid+1), target);
}


module.exports = findInOrderedSet;
