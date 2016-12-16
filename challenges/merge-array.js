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
	let long = arr1.length > arr2.length ? arr1 : arr2;
	let short = arr1.length > arr2.length ? arr2 : arr1;
	for(let i = 0; i < long.length; i++){
		if(short[0] < long[i]){
			long.splice(i,0,short[0]);
			short.splice(0,1);
			i--;
		}
	}
	return long;
}
module.exports = mergeArrays;
