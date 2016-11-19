
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
  const sum = array.reduce((accum, val) => accum + val);
  console.log('SUM: ', sum);
  const mean = Math.floor(sum / 2);
  console.log('MEAN: ', mean);
  const modeTable = [];
  array.forEach((val) => {
    if (modeTable[val]) modeTable[val]++;
    else { modeTable[val] = 1 ;}
  });
  for (let i = 0; i < modeTable.length; i++) {
    if (modeTable[i] === undefined) modeTable[i] = '0';
  }
  const modeCount = getMaxOfArray(modeTable);
  console.log('MODE COUNT: ', modeCount);
  const maxMode = modeTable.lastIndexOf(modeCount);
  console.log('MAX MODE: ', maxMode);
  return mean === maxMode;
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

module.exports = modemean;
