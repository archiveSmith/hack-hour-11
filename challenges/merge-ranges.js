/**
 * Write a function mergeRanges that takes an array of meeting time 
 ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 sort the ranges by end of 
 loop through each array and check if the range is in the range following. if so
 */


function mergeRanges(array) {
	let newArr = array.sort(function(a,b){
		return a[0] - b[0];
	})
	return newArr;

}
var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(mergeRanges(times))

//module.exports = mergeRanges;
