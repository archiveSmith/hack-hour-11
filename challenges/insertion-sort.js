// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array, j = 0) {
  if(j === array.length) return array;
  let first;
  let next;
  for(let i = 0; i < array.length; i++){
    if(array[i] > array[i + 1]) {
      first = array[i];
      next = array[i + 1];
      array[i] = next;
      array[i + 1] = first;
    }
  }
  return insertionSort(array, ++j);
}

module.exports = insertionSort;
