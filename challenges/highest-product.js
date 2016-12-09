/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
let highestProduct = 0;

//checking for edge case
if(array.length < 3) {
  return highestProduct;
}

//iterate over the array
for(let i = 0; i < array.length; i += 1) {
  let loopProduct = array[i] * array[i + 1] * array[i + 2]
  if(loopProduct > highestProduct) {
    highestProduct = loopProduct;
  }
}

return highestProduct;
}


module.exports = highestProduct;
