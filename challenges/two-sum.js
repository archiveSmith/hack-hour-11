/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
<<<<<<< HEAD
	let a = arr;
	while(a.length > 1){
		let num = a[0];
		for(let j = 0; j < a.length; j++){
			if(num + a[j] === n) return true;

		}
		a.shift();
	}
	return false;
=======

>>>>>>> 1f81ec2a3846ea99a4288a4fd9b50060a9732414
}

module.exports = twoSum;
