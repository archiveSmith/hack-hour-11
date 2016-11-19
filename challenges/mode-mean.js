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
  let sum = 0;
  let len = array.length;
  for (let i = 0; i < len; i += 1) {
    sum += array[i];
  }
  let mean = Math.floor(sum / len);
  let table = {};
  let mode;
  table["highest"] = 0;
  for (let j = 0; j < len; j += 1) {
    let char = array[j];
    !table[char] ? table[char] = 1 : table[char] += 1;
    }
  for (let m in table) {
    if (table[m] > table["highest"]) {
      table["highest"] = table[m];
      mode = m;
    }
  }
  return mean == mode ? true : false;
}

module.exports = modemean;
