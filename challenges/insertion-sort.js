// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let pivot = 1;
  let step;
  let len = array.length;

  if(len < 2) return array;

  while(pivot < len){
    step = pivot - 1;
    while(step >= 0){
      if(array[step] <= array[pivot]){
        array.splice(step + 1, 0, array.splice(pivot, 1)[0]);
        break;
      }
      step--;
    }
    pivot++;
  }

  return array;
}

module.exports = insertionSort;
