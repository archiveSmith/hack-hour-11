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
  let biggestArr;
  let mergedArr = [];
  if (arr1.length > arr2.length) {
    biggestArr = arr1.length;
  } else {
    biggestArr = arr2.length;
  }
  for (let i = 0; i < biggestArr; i++) {
    if (arr1[i] < arr2[i]) {
      mergedArr.push(arr1[i])
    } else {
      mergedArr.push(arr2[i])
    }

    }
  return mergedArr;

}


// var my_array = [3,4,6,10,11,15,21];
// var another_array = [1,5,8,12,14,19];

// function mergeArrays(arr1, arr2) {
//   let biggestArr;
//   let mergedArr = [];
//   if (arr1.length > arr2.length) {
//     biggestArr = arr1.length;
//   } else {
//     biggestArr = arr2.length;
//   }
//   for (let i = 0; i < biggestArr; i++) {
//     for(let j =0; j < biggestArr; j++){
//       if (arr1[i] <= arr2[i]) {
//       mergedArr.push(arr1[i])
//     } else if (arr2[i] < arr1[i]){
//       mergedArr.push(arr2[i])
//     }
//     }
    

//     }
//   return mergedArr;

// }

module.exports = mergeArrays;




// function mergeArrays(arr1, arr2) {
//   let ind1 = 0;
//   let ind2 = 0;
//   const mergedArr = [];
//   if (arr1[ind1] !== undefined || arr2[ind2] !== undefined) {
//     if (arr1[ind1] < arr2[ind2]) {
//       mergedArr.push(arr1[ind1++]);
//     } else if (arr2[ind2] < arr1[ind1]) {
//       mergedArr.push(arr2[ind2++]);
//     } else {
//       mergedArr.push(arr1[ind1] || arr2[ind2]);
//     }
//   }
//   return mergedArr;
// }
