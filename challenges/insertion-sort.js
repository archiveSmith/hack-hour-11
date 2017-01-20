// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
	for (var i = 0; i < array.length; i++) {
		var temp = array[i];
		for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
			array[j + 1] = array[j];
		}
		array[j + 1] = temp;
	}

	return array;
}

// var arr = [7,2,4,1,9,3,6,10,8];

// console.log(insertionSort(arr)); 

module.exports = insertionSort;