// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      let temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j -= 1;
    }
  }
  return array;
}

module.exports = insertionSort;