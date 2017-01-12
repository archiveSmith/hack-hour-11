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
	let answer = [];
	for( let i = 0; i < array.length; i++){
		let item = array[i];
		for(let j = 0; j < array.length; j++){
			if(array[j][0] < array[i][1]){
				item = [array[i][0], array[j][1]];
				array.splice(j,1);
			}
		}
		answer.push(item);
	}
	return answer;
}

module.exports = mergeRanges;
