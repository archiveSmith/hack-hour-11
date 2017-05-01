'use strict';

/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3 || !Array.isArray(array)) return 0;
  const bigThreeProduct = array.sort((a, b) => a - b)
                          .slice(-3)
                          .reduce((acc, cur) => { return acc *= cur; });
  const negProduct = [array[0], array[1], array[array.length - 1]].reduce((acc, cur) => { return acc *= cur; });

  return Math.max(bigThreeProduct, negProduct);
}

module.exports = highestProduct;
