// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array, ind = 0) {
  if (!array) { return undefined }
  if (!array.length === 0)) { return [] }
  if(ind === array.length - 1) {return array}

  let curr = ind;
  let next = ind + 1;
  let prev = ind - 1;
  
  while(array[curr] > array[next]) {
    let temp = array[curr];
    array[curr] = array[next];
    array[next] = temp;
    next += 1;
  }
  
  while(array[curr] < array[prev]) {
    let temp = array[prev];
    array[prev] = array[curr];
    array[curr] = temp;
    prev += 1;
  }
  
  return bubbleSort(array, curr += 1)

}

module.exports = bubbleSort;
