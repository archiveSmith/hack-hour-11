/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
 if (array.length < 3 || array === undefined) {
   return 0;
 }

 else {
  let sumArr = [];

  for(let i = 0; i < 3; i += 1) {
    sumArr.push(Math.max(...array));
    array.splice(array.indexOf(Math.max(...array)), 1)
  }

  return sumArr.reduce((base, val) => base*val, 1)
 }
}


module.exports = highestProduct;
