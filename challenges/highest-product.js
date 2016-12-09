/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let allPos;
  let result;
  array.sort(function(a,b){
    return a-b;
  });
  if (array[array.length-3] >0){
    allPos = array.slice(-3)
    result = allPos.reduce(function(a, c){
                 return a = a*c;
                   });
    return result;
  }
  if (array[array.length-3]<0){
    result = array.slice(0,1) * array.slice(-2,-1) * array.slice(-1);
    return result;
  }
  
}

console.log(highestProduct([2,6,9,3,5]));


module.exports = highestProduct;
