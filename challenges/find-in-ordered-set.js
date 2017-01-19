/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
let len = arr.length;
let answer;
while(!answer){
if(target === arr[Math.floor(len/2)]) return true;
if(target > arr[Math.floor(len/2)]) arr = arr.splice(Math.floor(len/2)); len = arr.length;
if(target < arr[Math.floor(len/2)]) arr = arr.splice(0,Math.floor(len/2)); len = arr.length;
if (len < 2) answer = true;

}
return false
}


module.exports = findInOrderedSet;
