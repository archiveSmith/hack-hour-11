// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  const len = array.length;
  let temp;

  for (let i = 1; i < len; i += 1) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j -= 1;
    }
  }

  return array;
}

module.exports = insertionSort;

// const arr = [7, 3, 5, 1];
// console.log(insertionSort(arr));
