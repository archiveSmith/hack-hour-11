// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {

  let done = true;
  sort(array);
  if (done === true) {
   return array;
    } else {
    return bubbleSort(array);
  }

  function sort(x) {
    for (let i = 0; i < x.length; i += 1) {
        if (x[i]>x[i+1]) {
            temp = x[i];
            x[i] = x[i+1];
            x[i+1] = temp;
            done = false;
        }
    }
  }

}

module.exports = bubbleSort;
