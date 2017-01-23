// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  // loop through array
  const sortArr = [array[0]];
  let i = 1;
  for (; i < array.length; i++) {
    let j = 0;
    while (array[i] > sortArr[j]) {
      if (j === sortArr.length) {
        break;
      }
      j++;
    }
    sortArr.splice(j, 0, array[i]);
  }
  array = sortArr;
  return array;
    // save current element to temp
    // delete using splice (target, 1)
    // each iteration loop through index 0 to current i
      // if current element is greater than comparison then splice into // splice(target, 0, array[i])

}

const arr1 = [4, 2, 9, 3, 5, 6];

console.log(insertionSort(arr1));

module.exports = insertionSort;