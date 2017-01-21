// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
let check = array[1];
let z;
for(let i = 1; i < array.length; i++){
	z = i;
	while(check > array[z]){
		array[z] = array[z-1];


		z--;
	check = array[i];

}

return array;
}

module.exports = insertionSort;