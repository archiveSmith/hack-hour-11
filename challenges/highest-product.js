/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

  if (array.length < 3) {
    return 0;
  }

  else {

    const sortedArr = array.sort(function (a, b) {
       return b - a;
    });

    const product = sortedArr[0] * sortedArr[1] * sortedArr[2];
  }
  return product;

}


module.exports = highestProduct;
