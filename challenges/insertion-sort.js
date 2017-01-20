// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  if(!array || array === []) {
    return [];
  }
  
  for (let i = 1; i < array.length; i += 1) {
    let temp = array[i]
    let j = i - 1;
    
    while(j >= 0 && array[j] > temp) {
      array[j+1] = array[j];
      j = j - 1;
    }
    
    array[j + 1] = temp;
  }
  
  return array
}

module.exports = insertionSort;