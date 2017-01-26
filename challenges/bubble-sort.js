// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			if (array[j + 1] < array[j]) {
				var temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}

	return array;
}

// var array = [6,2,9,1,7,4,5,3,8];

// console.log(bubbleSort(array));

module.exports = bubbleSort;
