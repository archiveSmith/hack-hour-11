// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {

  if (!array.length) {
    return [];
  }

  let i, j;
  const len = array.length;

  for (i = 0; i < len; i += 1) {

    let swapped = false;

    for (j = 0; j + 1 < len; j += 1) {
      if (array[j] > array[j + 1]) {
        swapped = true;
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }

    if (!swapped) {
      return array;
    }
  }
  
  return array;
}

module.exports = bubbleSort;
