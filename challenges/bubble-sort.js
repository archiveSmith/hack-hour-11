// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length <= 1) return array;
  let swapped = false;
  array.forEach((el, i, array) => {
    if (el > array[i + 1]) {
      array[i] = array[i + 1];
      array[i + 1] = el;
      swapped = true;
    }
  });
  return swapped ? bubbleSort(array) : array;
}

module.exports = bubbleSort;

// const a = [5];
// console.log(bubbleSort(a));