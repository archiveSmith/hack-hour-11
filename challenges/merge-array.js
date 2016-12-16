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
  // create new array
  // create a counter for each array's index
  // iterate over the arrays, pushing the lower number of each into new array, increase its index count
  // when one array is empty, push the rest of the other array into the new array
  // return new array
  let merged = [];
  let index1 = 0, index2 = 0;
  while (arr1[index1] !== undefined || arr2[index2] !== undefined) {
    if (arr1[index1] < arr2[index2]) {
      merged.push(arr1[index1++]);
    } else if (arr2[index2] <= arr1[index1]) {
      merged.push(arr2[index2++])
    } else {
      merged.push(arr1[index1++] || arr2[index2++]);
    }
  }
  return merged;
}

module.exports = mergeArrays;
