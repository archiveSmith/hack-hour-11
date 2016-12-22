/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
 const arry = [[]];
 for (let i = 0; i < arr.length; i++) {
   for (let j = 0, len = arry.length; j < len; j++) {
     const combo = arr[i].concat(arry[j]);
     if (combo.length === 2 && combo[0] + combo[1] === n) {
       return true;
     }
     arry.push(combo);
   }
 }
 return false;
}

module.exports = twoSum;
