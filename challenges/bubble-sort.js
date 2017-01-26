// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function swap(a, b) {
  const temp = a;
  a = b;
  b = temp;
}

function bubbleSort(array) {
  const swap = (array, i) => {
    const temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
    console.log(array);
  }

  let sorting;
  
  while(!sorting) {
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] < array[i]) {
        swap(array, i);
        sorting = true;
      }
    }
    sorting = false;
  }
  return array;
}

console.log(bubbleSort([5, 6, 8, 1, 4, 9, 2, 10, 3, 7]))

module.exports = bubbleSort;
