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

  let i = 0;
  let j = 0;

  let combined = [];

  while (i < arr1.length || j < arr2.length) {
    
    if (i >= arr1.length && j < arr2.length) {
      combined = combined.concat(arr2.slice(j));
      break;
    } else if (i < arr1.length && j >= arr2.length) {
      combined = combined.concat(arr1.slice(i));
      break;
    }

    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i++]);
    } else if (arr1[i] > arr2[j]) {
      combined.push(arr2[j++]);
    } else {
      combined.push(arr1[i++]);
      combined.push(arr2[j++]);
    }
  }

  return combined;
}

module.exports = mergeArrays;
