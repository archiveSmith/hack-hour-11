/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

<<<<<<< HEAD

 
/*

loop through each item
then add it 
iterate over each item 

iterate over each element,
for each element, iterate over each element except for itself. 
add the next item to it and check if the sum === 5....eventually you can optimize and also check if the sum > 5
if you ever get it to match, then return true. 






*/

function subsetSum(array, target) {

	var sum = 0;

	for (var i = 0; i < array.length; i++){
		console.log("i",array[i])
		sum = 0;
		//console.log(array[i])
		for (var j = i; j < array.length; j++){
			//do main logic first and then make sure that you are not adding the same numbers together. 
			//add each element to the next element over and keep checking if they add up to target
			
			sum = sum + array[j];
			//console.log(array[j], array[j+1])
			console.log("sum", sum)
			
			if (sum === target){
				return true;
			}
		}
	}
	return false

}

console.log(subsetSum([3, 7, 4, 2], 5))
//module.exports = subsetSum;
=======
function subsetSum(array, target) {

}

module.exports = subsetSum;
>>>>>>> b5eb6fc6d69a6a9df3d646c7dd6937e7605f82a0
