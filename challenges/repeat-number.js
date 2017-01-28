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
	let numbers = {};

	for (let i = 0; i < array.length; i++){
		if ( numbers[array[i]] ){
			return array[i];
		}
		else{
			numbers[array[i]] = 1;
		}

	}

}

//let nums = [1,2,3,4,5,6,7,8,9,9,10,11,12,13,14];

//console.log(repeatNumbers(nums));

module.exports = repeatNumbers;
