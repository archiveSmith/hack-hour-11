// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

//you have two a sorted arrayand and unsorted

function insertionSort(array) {
	const sorted = [];
	function sortIt(num,sorted){
		for (let i = 0; i < sorted.length; i++ ){
			if (!sorted.length){
				sorted.push(n)
			}
			else if (num < sorted[0]){
				sorted.unshift(num)
			}
			else if (num > sorted[i] && num < sorted[i+1]){
				sorted.splice(i,0, num)
			}
			else if (num > sorted[sorted.length-1]){
				sorted.push(num)
			}
		}
	}
	for (let i = 0; i < sor.length; i++){
		sortIt(array[i])
	}


}


	function sortIt(num,sorted){
		for (let i = 0; i < sorted.length; i++ ){
			if (!sorted.length){
				sorted.push(n)
			}
			else if (num < sorted[0]){
				sorted.unshift(num)
			}
			else if (num > array[i] && num < array[i+1]){
				sorted.splice(i,0, num)
			}
			else if (num > sorted[sorted.length-1]){
				sorted.push(num)
			}
		}
	}

	let list = [1,3,100,200,300];

	console.log(sortIt(150,list));

	console.log(list)

module.exports = insertionSort;