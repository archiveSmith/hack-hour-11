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
  // have an accumalator
  const arr = [true];
  for (let i = 0; i < target; i++) {
    arr.push(false);
  }
  for (let j = 0; j < arr.length; j++) {
    if ()
  }
}

module.exports = subsetSum;

// array of 5
// 1 : 5
// 2 : 

// array of 4
// 1 : 4
// 2 : 6
// 3 : 4
// 4 : 1

// array of 3
// 1 : 3
// 2 : 3
// 3 : 1

// array of 2
// 1 : 2
// 2 : 1

