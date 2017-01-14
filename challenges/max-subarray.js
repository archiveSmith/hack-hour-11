/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let maxArr = [];
    let maxNum = arr[i]
    let newSum = 0
    console.log('maxArr', maxArr);
    for (let j = i; j < arr.length; j++) {
      console.log('arr[j]', arr[j])
      maxArr.push(arr[j]);
      console.log('maxArr', maxArr);
      for (let k = 0; k < maxArr.length; k++) {
        newSum += maxArr[k];
      }
      console.log('maxArr2', maxArr)
      maxNum = maxNum < newSum ? newSum : maxNum;
    }
    max = max < maxNum ? maxNum : max;
    console.log('max', max)
  }
  return max;
}

module.exports = maxSubarray;