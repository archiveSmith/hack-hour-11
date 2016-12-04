'use strict';
/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
	let subsets = [array[0]];
	const len = array.length;

	for (let i = 1; i < len; i += 1) {
		let tempArr = [];
		subsets.forEach(subset => {
			tempArr.push(array[i] + subset);
			if (array[i] + subset === target) return true;
		});
		tempArr.push(array[i]);
		subsets = subsets.concat(tempArr);
	}
	return subsets.indexOf(target) !== -1 ? true : false;
}

module.exports = subsetSum;
