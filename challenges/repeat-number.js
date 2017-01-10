/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
	var countArr = {};
	for (var i = 0; i < array.length; i++) {
		if (!countArr[array[i]]) {
			countArr[array[i]] = 1;
		} else {
			return array[i];
		}
	}
}

// var arr = [1,2,3,4,7,6,7,8,9,10];

// console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
