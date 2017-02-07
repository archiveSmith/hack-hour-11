/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
  //solution with built-ins;
  // return arr1.concat(arr2).sort((a, b) => a - b);

  if (arr1.length < 2) return arr1;

  const arr = arr1.concat(arr2);
  const result = [];
  const mid = Math.floor(arr.length / 2);
  const left = mergeArrays(arr.slice(0, mid), []);
  const right = mergeArrays(arr.slice(mid), []);

  function merge(a, b) {
    while (a.length > 0 && b.length > 0) {
      result.push(a[0] < b[0] ? a.shift() : b.shift());
    }
    return result.concat(a.length ? a : b);
  }
  return merge(left, right);
}


module.exports = mergeArrays;
