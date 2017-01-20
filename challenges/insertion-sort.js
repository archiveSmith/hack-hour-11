// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  function insertNumber(array, index, value){
    for (var j = index; j >= 0 && array[j] > value; j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value;
  }
  for(var i = 0; i < array.length-1; i++){
        insertNumber(array, i, array[i+1]);
    }
    return array;
}

module.exports = insertionSort;