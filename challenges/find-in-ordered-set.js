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
  console.log('-----_START-----', arr, 'LOOKING FOR...', target);
  console.log('LENGTH === 0?');
  if (arr.length === 0) {
    console.log('YES! RETURN FALSE');
    return false;
  }
  console.log('NO.. IS IT TARGET?');
  if (arr[random] === target) {
    console.log('YES! TRUE!');
    return true;
  }
  console.log('NO.. IS IT GREATER THAN?');
  if (arr[random] < target) {
    console.log('YES! START WITH THE RIGHT HALF AGAIN!');
    return findInOrderedSet(arr.slice(random + 1), target);
  }
  console.log('NO.. IS IT LESS THAN?');
  if (arr[random] > target) {
    console.log('YES! START WITH THE LEFT');
    return findInOrderedSet(arr.slice(0, random), target);
  }
}

const nums = [1, 4, 6, 7, 9, 17, 45, 99, 100, 101, 120];
console.log(findInOrderedSet(nums, 100));

module.exports = findInOrderedSet;
