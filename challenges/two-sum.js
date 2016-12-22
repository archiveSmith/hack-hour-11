/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
// if(!n || typeof n !== "Number") {
//   return false;
// }

for(let i = 0; i < arr.length; i += 1) {
  for(let j = 0; j < arr.length; i += 1) {
    if(arr[i] + arr[j] === n) {
      return true;
    }
  }
}

return false;
}

module.exports = twoSum;
