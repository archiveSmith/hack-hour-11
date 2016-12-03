/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

// function subsetSum(array, target) {
// let total = 0;
// while(array.length > 0){
// 	total = array[0];
// 	for(let i = 1; i < array.length; i++){
// 		total = total + array[i];
// 		if(total === target) {
// 		 return true;
// 		} else if( total > target){
// 			total = 0;
// 			break;
// 		}
// 	}
// 	array.shift();
// }
// return false;
// }

function subsetSum(array, target) {
	let start  = 0
	let time = start
	while(time < start + 5000){
		let index = Math.floor(Math.random()*array.length);
		let index2 = Math.floor(Math.random()*array.length);
		if(index === index2) Math.floor(Math.random()*array.length);
		if(array[index] + array[index2] === target) return true;
	time++;
	
 	}

	while(time >= (start + 5000) && time < (start + 10000)){
		let index = Math.floor(Math.random()*array.length);
		let index2 = Math.floor(Math.random()*array.length);
		let index3 = Math.floor(Math.random()*array.length);
		if(index === index2) index2 = Math.floor(Math.random()*array.length);
		if(array[index3] + array[index] + array[index2] === target) return true;
	time++;
	
	}
	
		while(time >= start + 10000 && time < start + 20000){
		let index = Math.floor(Math.random()*array.length);
		let index2 = Math.floor(Math.random()*array.length);
		let index3 = Math.floor(Math.random()*array.length);
		let index4 = Math.floor(Math.random()*array.length);
  	if(index === index2) index2 = Math.floor(Math.random()*array.length);
		if(index2 === index4) index4 = Math.floor(Math.random()*array.length);
		if(array[index3] + array[index] + array[index2] + array[index4] === target) return true;
	time++;
	
	}

	return false;
}


module.exports = subsetSum;
