/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
	for (var i = 0; i < arr.length; i++){
		for (var j = 0; j < arr.length; j++){
			if (i !== j) {
				if (arr[j] + arr[i] === n){
					return true
				}
			}
		}
	}
	return false

}


module.exports = twoSum;
