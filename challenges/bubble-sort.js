// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
	
	for (var j = 0; j < array.length; j++){
		for (var i = 0; i < array.length; i++){
			if (array[i] > array[i+1]){
				let temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp
			}
		}

	}

	return array
}

let list = [9,3,2,4,1,0,11,8,11111,-2];

console.log(bubbleSort(list))

module.exports = bubbleSort;
