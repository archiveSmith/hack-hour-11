// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
let length = array.length;
for(let i = length - 1; i >= 0; i--) {
	for(let j = length - 1; j >= 0; j--) {
		if(array[j] < array[j-1]) {
			let temp = array[j];
			array[j] = array[j-1];
			array[j-1] = temp;
		}
	}
}
return array;
}

module.exports = bubbleSort;
