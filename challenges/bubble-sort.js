// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let sorted = false;
  let holder;

  while(!sorted){
    sorted = true;
    for(let i = 0; i < array.length - 1; i++){
      if(array[i] > array[i + 1]){
        holder = array[i];
        array[i] = array[i + 1];
        array[i + 1] = holder;
        sorted = false;
      }
    }
  }

  return array;
}


console.log(bubbleSort([4,8,3,89,12,45,76,98,12,3,4,2,5]));
module.exports = bubbleSort;
