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
  var average = 0;
  var frequency = {};
  var maxmode = array[0];
  array.forEach(function(num) {
    if (!frequency[num]) {
      frequency[num] = 0;
    }
    frequency[num]++;
    average += num;
  });
      
  average = Math.floor(average/array.length);  
  for (var num in frequency) {
    if (frequency[num] >= frequency[maxmode] && num > maxmode) {
      maxmode = parseInt(num, 10);
    }
  }
  
  if (average === maxmode) {
    return true;
  } else {
    return false;
  }
}

module.exports = modemean;
