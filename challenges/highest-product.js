/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3 || array === []) return false;
  array = array.sort((a, b) => a - b);
  let arr1 = array.slice(-3);
  let arr2 = array.slice(0, 2).concat(array[array.length - 1]);
  let result1 = 1;
  let result2 = 1;
  for (let i = 0; i < arr1.length; i += 1) {
    result1 *= arr1[i];
  }
  for (let j = 0; j < arr2.length; j += 1) {
    result2 *= arr2[j];
  }
  return Math.max(result1, result2);
}

module.exports = highestProduct;
