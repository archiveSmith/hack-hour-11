/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  //arra.length === 0 should be if(array)
  if (array.length === 0 || array.length < 3) {
    return 0;
  }
  const sortedArray = array.sort(function (a, b) { return b - a; });
  const product = sortedArray[0] * sortedArray[1] * sortedArray[2];
  return product;
}


module.exports = highestProduct;
