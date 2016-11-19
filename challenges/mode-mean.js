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
   const mean = Math.floor(array.reduce((prev, curr) => prev += curr) / array.length);
   let countObj = {3:1};
   let largest = [0, null]
   for (let i = 0; i < array.length; i++) {
     if (Object.keys(countObj).indexOf(array[i].toString()) != -1) {
       countObj[array[i]] = countObj[array[i]] + 1;
     } else {
       countObj[array[i]] = 1;
     }
   }

   for (let j = 0; j < Object.keys(countObj).length; j++) {
     if (largest[0] < parseInt(Object.keys(countObj)[j])) {
       largest = [parseInt(Object.keys(countObj)[j]), countObj[Object.keys(countObj)[j]]]
     }
   }
   return largest[1] === mean;
 }

module.exports = modemean;
