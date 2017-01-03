"use strict";
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


function highestProduct(array) {
  if(array.length > 3) return 0;
  let arr = array.sort((a,b)=>{
    return a - b;
  });
  let len = arr.length;

  let set1 = arr[0] * arr[1] * arr[len-1];
  let set2 = arr[len-1] * arr[len-2] * arr[len-3];
  
  return Math.max(set1, set2);

}


module.exports = highestProduct;
