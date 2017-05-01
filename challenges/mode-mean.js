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
  // find the average
  let mean = function(array){
    return Math.floor(array.reduce(function(total, element){
      return  total + element / array.length;
    }, 0));
  }
  // find the mode
  let mode = function(array){
    // store our items in an object
    // have a max variable to return
    // have a count variable for comparison
    let mode = {}, max = 0, count = 0;
    // go over each item in array
    array.forEach(function(element){
      // if it already exists in the object, increase by 1
      if (mode[element]){
        mode[element]++;
      } else { // otherwise, assign it 1 to start
        mode[element] = 1;
      }
      // starting with the first key, iterate through until mode is set
      if (count < mode[element]){
        max = element;
        count = mode[element]
      }
    });
    // return our mode
    return max;
  }
  // compare mode and mean
  return mean(array) === mode(array);
}

module.exports = modemean;
