// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let swapped = true;
  let len = array.length - 1;
  while (swapped && len > 1) {
    for (let i = 0; i < len; i += 1) {
      if (array[i] > array[i + 1]) {
        swapped = true;
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      } else {
        swapped = false;
      }
    }
    len -= 1;
  }
  return array;
}

module.exports = bubbleSort;
