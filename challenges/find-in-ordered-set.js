/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
	
	function recurse(array, target) {
		let left = array.slice(0,Math.floor(array.length/2));
		let right = array.slice(Math.floor(array.length/2), array.length);
		
		if (target === left[0]){
			return true
		}
		else if (target === right[0]){
			return true
		}
		else if (target <= left[left.length-1]){
			return recurse(left,target)
		}
		else if (target > left[left.length-1]){
			return recurse(right, target)
			//recurse right one

		}
		else return false
	}

	return recurse(arr,target)

}
var nums = [1, 4, 6, 7, 9, 17, 45,56,100,200,300]
console.log(findInOrderedSet(nums,222222));


module.exports = findInOrderedSet;
