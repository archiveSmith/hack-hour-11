// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  
  if (!array.length) {
    return [];
  }
  
  let i = 0;
  let j;
  const len = array.length;

  for (i; i < len; i += 1) {
    
    for (j = i; j - 1 >= 0; j -= 1) {
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      } else {
        break;
      }
    }
  }

  return array;
}

// const arr = [5, 10, 3, 7, 4, 21, 12, 1, 2];

// console.log(insertionSort(arr));

module.exports = insertionSort;