// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  while (array !== array.sort()) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          const biggerNum = array[i];
          array[i] = array[j];
          array[j] = biggerNum;
        }
      }
    }
  }
}

module.exports = bubbleSort;