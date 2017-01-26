// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  // have one temp
  let temp;
  // loop through array
  for (let i = 0; i < array.length - 1; i += 1) {
    // each iteration compare i and i + 1
    if (array[i] > array[i + 1]) {
      temp = array[i + 1];
      array[i + 1] = array[i];
      array[i] = temp;
    }
    // if i > i + 1, assign to carriers and switch
  }
  // console.log('after loop:', array);
  // if carriers were assigned, recursively call bubbleSort
  if (temp) {
    return bubbleSort(array);
  }
  return array;
  // if no assignments, return
}

// const arr = [4, 5, 1, 2, 3];

console.log(bubbleSort(arr));


module.exports = bubbleSort;
