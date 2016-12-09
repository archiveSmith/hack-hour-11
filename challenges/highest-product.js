/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let result;
  const len = array.length;

  if (!len || len < 3) {
    return 0;
  }
  array.sort();

  const productBeginning = array[0] * array[1] * array[len - 1];
  const productEnd = array[len - 1] * array[len - 2] * array[len - 3];
  result = productEnd > productBeginning ? productEnd : productBeginning;

  return result;
}


module.exports = highestProduct;
