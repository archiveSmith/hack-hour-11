/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   let result;
   if (array.length < 3) return 0;
   array = array.sort(function(a, b) {
     return a - b;
   })
  
  result = array[array.length - 3] * array[array.length - 2] * array[array.length - 1]

   return result;
 }

module.exports = highestProduct;
