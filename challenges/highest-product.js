/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array) {
      if (array.length < 3) {
        return 0;
      } else {
        array = array.sort(function(a, b) {
          return b - a;
        });
        let t = array.length - 1;
        let highEnd = (array[0] * array[1] * array[2]);
        let lowEnd = (array[0] * array[t] * array[t-1]);
        console.log(lowEnd, highEnd);
        if (highEnd > lowEnd) {
        	return highEnd;
        } else {
        	return lowEnd;
        }
      }
  } else {
    return 0;
  }
}


module.exports = highestProduct;
