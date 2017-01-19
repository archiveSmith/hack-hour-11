/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
	//use binary search

	if (!arr) {
		return false;
	}

	var midPoint = parseInt(arr.length/2, 10);

	if (!midPoint) {
		if (target === arr[0]) {
			return true;
		} else {
			return false;
		}
	}

	if (target < arr[midPoint]) {
		return findInOrderedSet(arr.slice(0, midPoint), target);
	} else {
		return findInOrderedSet(arr.slice(midPoint), target);
	}
}

// var nums = [1, 4, 6, 7, 9, 17, 45];

// console.log(findInOrderedSet(nums, 8));

module.exports = findInOrderedSet;
