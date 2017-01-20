// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


// //Original Solution
// function insertionSort(array) {
//   let length = array.length;
//   let temp;
//   let j;
//
//   for(let i = 0; i < array.length; i += 1) {
//     temp = array[i];
//     for(j = i - 1; j >= 0 && array[j] > temp; j -= 1) {
//       array[j + 1] = array[j];
//     }
//     array[j + 1] = temp;
//   }
//   return array;
// }

//Codesmith solution
function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var j = i;
    while (array[j] < array[j-1] && j > 0) {
      var temp = array[j];
      array[j] = array[j-1];
      array[--j] = temp;
    }
  }
  return array;
}


module.exports = insertionSort;
