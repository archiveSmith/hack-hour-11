/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const arr = array;
  const len = array.length;
  if (len < 3) return 0;
  arr.sort((a, b) => a - b);
  if (arr[len - 2] > 0 && arr[0] < 0 && arr[1] < 0 && Math.abs(arr[1]) > Math.abs(arr[len - 2])) {
    return arr[0] * arr[1] * arr[len - 1];
  }
  return arr[len - 1] * arr[len - 2] * arr[len - 3];
}

module.exports = highestProduct;
