// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  const sorted = [];
  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    console.log('-------------START LOOP------------')
    console.log('Current Value', curr);
    if (i === 0) {
      console.log('First value, nothing to compare...');
      sorted.push(curr)
    };
    for (let j = 0; j < sorted.length; j++) {
      console.log('Compare to current value in sorted: ', sorted[j]);
      if (curr < sorted[j]) {
        console.log(curr, 'is less than', sorted[j]);
      } else if (j === sorted.length -1 && curr > sorted[j]) {
        console.log(curr, 'pushed to end of sorted array');
        sorted.push(curr);
      }
    }
    console.log('Sorted Array', sorted);
  }
  console.log('RESULT:');
  return sorted;
}

console.log(insertionSort([1, 3, 5, 2, 9, 7]));

module.exports = insertionSort;