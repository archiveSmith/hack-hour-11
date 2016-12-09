/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  array = array.sort((a,b) => a - b);
  let newArr = array.slice(-3);
  let result = 1;
  for (let i = 0; i < newArr.length; i += 1) {
    result *= newArr[i];
  }
  return result;
}

module.exports = highestProduct;
