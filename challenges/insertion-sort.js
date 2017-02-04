// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort//



function insertionSort(array) {
  let resultArr = array;
 
	for (let i = 1; i < resultArr.length; i += 1) {
	  console.log(i)
		let temp = resultArr[i];
		let newArr = [];

		for (let k = i-1; k >=0; k -= 1) {
		  if (resultArr[i] < resultArr[0]) {
		    for (let j = i; j>=0; j--) {
			    resultArr[j]=resultArr[j-1];
			  }
			  resultArr[0] = temp;
		  }
			if (resultArr[i] < resultArr[k] && resultArr[i] > resultArr[k-1]) {
			  for (let j = i; j>k-1; j--) {
			    resultArr[j]=resultArr[j-1];
			  }
			  resultArr[k] = temp;
			}
		}
	}
	return resultArr
}

module.exports = insertionSort;