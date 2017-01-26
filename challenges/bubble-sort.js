// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
	let sorted;
	let hold;

	while(!sorted){
		sorted = true;
		for(let i = 0; i < array.length-1; i++){
			if(array[i+1] < array[i]){
				hold = array[i];
				array[i] = array[i+1];
				array[i+1] = hold;
				sorted = false;
			}

		}

	}
	return array;

}

module.exports = bubbleSort;
