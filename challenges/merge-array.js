/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a function to merge our arrays of orders into one sorted array.
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
  // let arr = arr1.concat(arr2);
  // let mid = Math.floor(arr.length / 2);
  // let left = arr.slice(0, mid);
  // let right = arr.slice(mid);

  // let temp = [];
  // let i = 0;
  // let j = 0;
  // while (left[i] || right[j]) {
  //   if (left[i] >= right[j]) {
  //     temp.push(right[j++]);
  //   } else if (left[i] < right[j]) {
  //     temp.push(left[i++]);
  //   } else {
  //     temp.push(left[i++] || right[j++]);
  //   }
  // }
  // return temp;
  return (arr1.concat(arr2)).sort((a, b) => a - b);
}

module.exports = mergeArrays;
