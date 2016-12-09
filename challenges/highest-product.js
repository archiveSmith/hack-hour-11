/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let result;
  const len = array.length;

  if (!len) {
    return undefined;
  } else if (len > 0 && len < 3) {
    result = 1;
    for (let i = 0; i < array.length; i += 1) {
      result *= array[0];
    }
    return result;
  }
  array.sort();

  const productBeginning = array[0] * array[1] * array[len - 1];
  const productEnd = array[len - 1] * array[len - 2] * array[len - 3];
  result = productEnd > productBeginning ? productEnd : productBeginning;

  return result;
}


module.exports = highestProduct;
