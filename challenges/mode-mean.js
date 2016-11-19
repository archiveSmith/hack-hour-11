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
  array.sort(function(a,b) {
    return b-a;
  });
  
  let mode = array[0];
  let count = 1;
  let highestCount = 1;
  let mean=0;
  let sum = 0;
  
  console.log(array);
  
  for (let i=0; i<array.length; i++) {
    sum += array[i];
    
    if (array[i] === array[i+1] && array[i+1] !== undefined) {
      count++;
    } else {
      if (count > highestCount) {
        highestCount = count;
        mode = array[i];
      } 
      count = 1;
    }
    
  }
  
  mean = Math.floor(sum/array.length);
  
  return mean === mode;
  
}

console.log(modemean([1,1,1,1,3,4]));

module.exports = modemean;