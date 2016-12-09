/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function sortNumber(a,b) {
    return a - b;
}

function highestProduct(array) {
  if (array.length < 3) return 0;
  const positives = [];
  const negatives = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 0) positives.push(array[i]);
    else negatives.push(array[i]);
  }
  const orderedPositives = positives.sort(sortNumber);
  const orderedNegatives = negatives.sort(sortNumber);
  if (orderedNegatives.length < 2) {
    return orderedPositives[orderedPositives.length - 1] * orderedPositives[orderedPositives.length - 2] * orderedPositives[orderedPositives.length - 3];
  } else {
    if (orderedNegatives[0] * orderedNegatives[1] > orderedPositives[orderedPositives.length - 1] * orderedPositives[orderedPositives.length - 2]) {
      return orderedNegatives[0] * orderedNegatives[1] * orderedPositives[orderedPositives.length - 1];
    } else {
      return orderedPositives[orderedPositives.length - 1] * orderedPositives[orderedPositives.length - 2] * orderedPositives[orderedPositives.length - 3];
    }
  }
}


module.exports = highestProduct;
