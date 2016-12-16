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
	let finished = 0;
	const merged = [];
	while (!finished) {
		if (arr1[i] < arr2[i]) {
			if (arr1[i]) merged.push(arr1[i]);
			if (arr2[i]) merged.push(arr2[i]);
		} else {
			if (arr2[i]) merged.push(arr2[i]);
			if (arr1[i]) merged.push(arr1[i]);
		}

		i++;


		if (i >= arr1.length && i >= arr2.length) {
			if (arr1.length > arr2.length) {
				for (let f = i; f < arr1.length; f++) {
					merged.push(arr1[f]);
				}
			}

			if (arr2.length > arr1.length) {
				for (let f = i; f < arr2.length; f++) {
					merged.push(arr2[f]);
				}
			}
			finished = 1;
		}
	}

	return merged;
}

/*
var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];

console.log(mergeArrays(my_array, another_array));
*/

module.exports = mergeArrays;
