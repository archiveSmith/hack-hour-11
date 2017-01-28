// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
let n = array.length;
//repeat
let swapped = false;
function swap(firstVal, secondVal){
if(firstVal > secondVal){
  temp = firstVal;
  firstVal= secondVal;
  secondVal = temp;
  return firstVal, secondVal
}
}
let reds = array.reduce((acc, curr)=>{
  if(acc < curr){
    return curr;
  }else{
    return acc;
  }
})
}

module.exports = bubbleSort;
