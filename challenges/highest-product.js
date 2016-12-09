'use strict';

/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length < 3) return 0;

  const bigThree = array.sort((a, b) => a - b).slice(-3);
  return bigThree.reduce((acc, cur) => {
    return acc *= cur;
  });
}

module.exports = highestProduct;

const array = [3, 2, -1];
console.log(highestProduct(array));
