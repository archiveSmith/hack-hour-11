// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
	for (let i = 1; i < array.length; i += 1) {
		for (let k = i-1; k >=0; k -= 1) {
			if (array[i] < array[k]) {
				array = array.slice(0, k).concat(array[i]).concat(array.slice(k))
			}
		}
	}
	return array
}

module.exports = insertionSort;