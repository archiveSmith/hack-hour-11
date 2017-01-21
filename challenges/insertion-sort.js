// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let arr = array.slice()
  const len =  arr.length;
  let i = 1;
  for(i; i < len; i += 1){
    let curr = arr[i];
    let j = i - 1; // pointer at the selection before curr
    for (j; j >= 0 && arr[j] > curr; j -= 1) {
      arr[j + 1] = arr[j]; // if pointer value greater // swap up 
    }
    arr[j + 1] = curr
  }
  return arr;
}

console.log(insertionSort([4,6,7,2,78,9,1]))

/*
 for i = 1 to length(A)
    x = A[i]
    j = i - 1
    while j >= 0 and A[j] > x
        A[j+1] = A[j]
        j = j - 1
    end while
    A[j+1] = x
 end for
*/


module.exports = insertionSort;