/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
	let tempArr = arr;
	let index1 = Math.ceil(tempArr.length/2);
	while (tempArr.length > 1) {
		if (target === tempArr[index1]) {
      return true;
		} else if (target > tempArr[index1]) {
			 tempArr = tempArr.slice(index1);
			 index1 = Math.ceil(tempArr.length/2);
			 console.log(tempArr)
		} else if (target < tempArr[index1]) {
			 tempArr = tempArr.slice(0, index1);
			 index1 = Math.ceil(tempArr.length/2);
			 console.log(tempArr)
	  }
	}
  return false;
}


module.exports = findInOrderedSet;
