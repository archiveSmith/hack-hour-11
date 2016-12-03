/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  const len = array.length;

  if (len === 1) {
    return array[0] === target;
  }
  
  let newTarget = target;
  
  const newArr = [];
  
  for (let x = 0; x < array.length; x += 1) {
    if (x < 0) {
     newTarget += Math.abs(array[x]);
    }
    newArr.push(Math.abs(array[x]));
  }
  
  let currSum = 0;

  for (let i = 0; i < len; i += 1) {
    if (target - newArr[i] > 1) {
      currSum += newArr[i];
      if (currSum === newTarget) {
        return true;
      }
    }
  }

  if (currSum > newTarget) {
    for (let j = 0; j < len; j += 1) {

      if (currSum - newArr[j] === newTarget) {
        return true;
      } 
    }
  }
  
  return false;
}

module.exports = subsetSum;
