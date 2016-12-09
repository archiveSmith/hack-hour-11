/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return array.reduce((a, b) => a * b);
  return array
  .sort((a, b) => a < b)
  .slice(0, 3)
  .reduce((a, b) => a * b);
}

const arr = [10, 3, 23, 12, 3, 5];

console.log(highestProduct(arr));

module.exports = highestProduct;
