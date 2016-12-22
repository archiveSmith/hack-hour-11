/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
	let a = arr;
	while(a.length > 1){
		let num = a[0];
		for(let j = 0; j < a.length; j++){
			if(num + a[j] === n) return true;

		}
		a.shift();
	}
	return false;
}

module.exports = twoSum;
