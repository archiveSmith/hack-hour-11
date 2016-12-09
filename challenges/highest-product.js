/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // sort array from highest to lowest
  // multiply the 3 highest numbers
  // multiply the highest number and two lowest numbers (in case they are high negatives)
  // compare the two numbers and return the higher product.
  // profit.
  if (array.length < 3 || !array) return "boo";
  let data = array.sort(function(a,b) { return b - a; });
  const prod1 = data[0] * data[1] * data[2];
  const prod2 = data[0] * data[data.length-1] * data[data.length-2];

  return Math.max(prod1, prod2);
}


module.exports = highestProduct;
