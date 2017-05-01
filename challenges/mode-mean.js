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
  let tracker = {};
  let i = 0;
  let mode = 0;
  let sum = 0;
  //Tracks number of occurences for each array value and stores in tracker object
  for (; i < array.length; i++) {
    sum += array[i];
    if (!tracker[array[i]]) {
      tracker[array[i]] = 1;
    } else {
      tracker[array[i]]++;
    }
  }

  //Loops through tracker object, and sets mode equal to the number with the highest number of occurences, if mulitple, finds the max and sets mode
  for (var key in tracker) {
    let currentNum = JSON.parse(key);
    if (tracker[key] > mode) {
      mode = currentNum;
    } else if (tracker[key] === mode) {

      mode = Math.max(currentNum, mode);

    }
    //set i to the mean
    i = (sum / currentNum)
  }

  if (i === mode) {
    return true;
  }
  return false;
}

module.exports = modemean;

