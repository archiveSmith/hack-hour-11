// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


const arr = [7, 3, 8, 2, 9, 1, 100, -5, 0];

function bubbleSort(array) {
  let len = array.length;
  let i = 0;
  let swap = false;
  for (i, len; len >= 0; len -= 1) {
    let j = i;
    while (j < len) {
      if (array[j] > array[j + 1]) {
        const old = array[j];
        array[j] = array[j + 1];
        array[j + 1] = old;
        swap = true;
      }
      j += 1;
    }
    if (!swap) return array;
  }
  return array;
}

// console.log(bubbleSort(arr))

module.exports = bubbleSort;