/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let currSum = arr[0];
  let maxSum = currSum;
//   for (let i = 0; i < arr.length; i += 1) {
//     maxSum += arr[i];
//   }

//   for (let j = 0; j < arr.length; j += 1) {

//     for (let k = j; k < arr.length; k += 1) {
//       sum += arr[j];

//     }
//     if (sum > maxSum) {
//         maxSum = sum;
//     } else {
//       sum = 0;
//     }
//   } //hello
  
  for (let j = 1; j < arr.length; j += 1) {

    currSum += arr[j];
    
    if (currSum > maxSum) {
      maxSum = currSum;
    } 
    if (arr[j] > maxSum) {
      maxSum = arr[j];
      currSum = arr[j];
    } 
  }

  return maxSum;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
console.log(maxSubarray([15,20,-5,10]));

module.exports = maxSubarray;
