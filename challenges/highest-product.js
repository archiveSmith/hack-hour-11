/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if(array.length < 3) return 0;
	let arr = array.sort((a,b) => b-a);
	return arr[0] * arr[1] * arr[2];
}


module.exports = highestProduct;
