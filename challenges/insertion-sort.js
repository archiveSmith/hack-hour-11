// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let length = array.length;
  let temp;
  let j;

  for(let i = 0; i < array.length; i += 1) {
    temp = array[i];
    for(j = i - 1; j >= 0 && array[j] > temp; j -= 1) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

module.exports = insertionSort;
