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
  let arr = [[]];
  // first loop loops through passed in param array
  for (let i = 0; i < array.length; i++) {
    // second loop loops through arr
    for (let j = 0, len = arr.length; j < len; j++) {
     // console.log('this is len:' , len)
      let temp = arr[j].concat(array[i]);
      
      // console.log('this is temp: ' , temp);
      arr.push(temp);
      // console.log('this is arr: ' , arr)
      // add temp array up
      let result = temp.reduce(function (acc, curr) {
        return acc + curr;
      });
      // if subset sum is found return true
      if (result === target) {
        return true;
      }
    }
  }
  // if no subset sum is found return false
  return false;
}

// function subsetSum(array, target, n = array.length) {
 // if (target === 0) {
  //   return true;
  // }
  // if (n === 0 && target !== 0) {
  //   return false;
  // }
  // // If last element is greater than sum, then ignore it
  // if (array[n - 1] > target) {
  //   return subsetSum(array, n - 1, target);
  // }
  // return subsetSum(array, n - 1, target) || subsetSum(array, n - 1, target - array[n - 1]);

module.exports = subsetSum;
