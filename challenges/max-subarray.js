/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

 function sumArray(arr) {
 	return arr.reduce(function(a, c) {
 		return a + c;
 	});
 }

function maxSubarray(arr) {
	var maxSubArr;
	var maxSum = -Infinity;
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			var checkArr = arr.slice(i, j);
			var checkSum = sumArray(checkArr);
			if (checkSum > maxSum) {
				maxSum = checkSum;
				maxSubArr = checkArr;
			}
		}
	}

	return maxSum;
}

// var arr = [1, -2, 3, 10, -4, 7, 2, -5];

// console.log(maxSubarray(arr));

module.exports = maxSubarray;
