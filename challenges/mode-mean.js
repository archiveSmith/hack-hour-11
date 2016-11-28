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
  console.log('ARRAY LENGTH: ', array.length);
  const mean = Math.floor(sum / array.length);
  console.log('MEAN: ', mean);
  const modeTable = {};
  array.forEach((val) => {
    if (modeTable[val]) modeTable[val]++;
    else { modeTable[val] = 1; }
  });
  console.log('MODE TABLE: ', modeTable);
  let max = [-Infinity, 0];
  for (const prop in modeTable) {
    if (modeTable[prop] >= max[1] && prop > max[0]) max = [prop, modeTable[prop]];
  }
  const modeCount = max[1];
  console.log('MODE COUNT: ', modeCount);
  const maxMode = max[0];
  console.log('MAX MODE: ', maxMode);
  return mean == maxMode;
}


// DOESN'T WORK WITH NEGATIVE ELEMENTS

// function modemean(array) {
//   const sum = array.reduce((accum, val) => accum + val);
//   console.log('SUM: ', sum);
//   const mean = Math.floor(sum / array.length);
//   console.log('MEAN: ', mean);
//   const modeTable = [];
//   array.forEach((val) => {
//     if (modeTable[val]) modeTable[val]++;
//     else { modeTable[val] = 1 ;}
//   });
//   for (let i = 0; i < modeTable.length; i++) {
//     if (modeTable[i] === undefined) modeTable[i] = '0';
//   }
//   const modeCount = getMaxOfArray(modeTable);
//   console.log('MODE COUNT: ', modeCount);
//   const maxMode = modeTable.lastIndexOf(modeCount);
//   console.log('MAX MODE: ', maxMode);
//   return mean === maxMode;
// }

// function getMaxOfArray(numArray) {
//   return Math.max.apply(null, numArray);
// }

module.exports = modemean;
