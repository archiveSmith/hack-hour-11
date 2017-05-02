/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  
  const len = array.length;
  
  if (len <= 0) {
    throw new Error('The parameter array that was passed is empty.');
  }
  
  let sum = 0;
  let i = 0;
  const obj = {};
  let mode = 0;

  for (; i < len; i += 1) {

    const value = parseFloat(arr[i]);

    if (isNaN(value)) {
      throw new Error('There is a non-numerical value in the array');
    } else {
      
      if (!obj[value]) {
        obj[value] = 1;
      } else {
        obj[value] += 1;
      }

      sum += value;
    }
  }


  for (let j in obj) {
    if (mode <= obj[j]) {
      mode = obj[j];
    }
  }
  const mean = Math.floor(sum/len);
  
  return mean === parseFloat(mode);
}

module.exports = modemean;
