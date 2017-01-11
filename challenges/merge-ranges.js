/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
	var merged = [];
	var mergedPos = 0;

	array = array.sort(function(a, b){
		if (a[0] > b[0]) {
			return 1;
		} else {
			return -1;
		}
	});

	merged.push(array[0]);

	for (var i = 1; i < array.length; i++) {
		if (merged[mergedPos][1] >= array[i][0]) {
			merged[mergedPos][1] = array[i][1];
		} else {
			merged.push(array[i]);
			mergedPos++;
		}
	}

	return merged;
}

// var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

// console.log(mergeRanges(times));

module.exports = mergeRanges;
