/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (!arr) {
    return 0
  }
	if (arr.length === 1) {
		return arr[0]
	}
	let maxSum = 0;
	let newStart = 1
  for (var i = 0; i < arr.length; i += 1) {
		let tempAccum = arr[i];
		for (var k = newStart; k < arr.length; k += 1) {
			tempAccum += arr[k];
			if (tempAccum > maxSum) {
				maxSum = tempAccum
			}
		}
		tempAccum = 0;
		newStart += 1;
	}  
return maxSum;
}

module.exports = maxSubarray;
