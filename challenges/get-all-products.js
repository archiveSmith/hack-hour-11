/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
const result = [];
 for (let i = 0; i< array.length; i++) {
   let product = 1;
  for (let j = 0; j < i; j++) {

    product *= array[j];
  }
  for (let k = array.length -1; k > i; --k) {
    product *= array[k];
  }
   result.push(product);
 }
 return result;}

module.exports = getAllProducts;
